const express = require("express");
const Participant = require("../models/participantModel");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const fs = require("fs");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "routes/files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});

router.post("/register", upload.single("file"), async (req, res) => {
  try {
    const {
      lomba,
      teamName,
      university,
      country,
      teamCaptain,
      captainEmail,
      captainNumber,
      member1,
      member2,
    } = req.body;
    const file = {
      data: fs.readFileSync(
        path.join(__dirname + "/files/" + req.file.filename)
      ),
      contentType: "application/pdf",
    };

    //Making sure all fields are filled
    if (
      !teamName ||
      !university ||
      !country ||
      !teamCaptain ||
      !captainEmail ||
      !captainNumber ||
      !member1 ||
      !member2
    ) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }
    const existingEmail = await Participant.findOne({
      captainEmail: captainEmail,
    });
    const existingTeamName = await Participant.findOne({ teamName: teamName });
    //Validating uniqueness of participant
    if (existingEmail)
      return res
        .status(400)
        .json({ msg: "A Team using this email has been registered" });

    if (existingTeamName)
      return res
        .status(400)
        .json({ msg: "A Team using this name has been registered" });

    const newParticipant = new Participant({
      lomba,
      teamName,
      university,
      country,
      teamCaptain,
      captainEmail,
      captainNumber,
      member1,
      member2,
      file,
    });
    const registeredParticipant = await newParticipant.save();
    res.json(registeredParticipant);
  } catch (error) {
    res.send({ message: error.message });
  }
});
module.exports = router;
