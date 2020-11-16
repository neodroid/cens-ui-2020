const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const participantRoute = require("./routes/participantRoute");

const app = express();
//Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//Router for POST API
app.use("/api/participants", participantRoute);

//Define PORT & verify running port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

//connecting to MongoDB
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
