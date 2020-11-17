import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Dropzone from "react-dropzone";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  FormContent,
  Text,
} from "./SigninElement";

const Register = () => {
  const [teamName, setTeamName] = useState();
  const [university, setUniversity] = useState();
  const [country, setCountry] = useState();
  const [teamCaptain, setTeamCaptain] = useState();
  const [captainEmail, setCaptainEmail] = useState();
  const [captainNumber, setCaptainNumber] = useState();
  const [member1, setMember1] = useState();
  const [member2, setMember2] = useState();
  const [file, setFile] = useState();
  const [previewSrc, setPreviewSrc] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const dropRef = useRef();
  const history = useHistory();

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("teamName", teamName);
      formData.append("university", university);
      formData.append("country", country);
      formData.append("teamCaptain", teamCaptain);
      formData.append("captainEmail", captainEmail);
      formData.append("captainNumber", captainNumber);
      formData.append("member1", member1);
      formData.append("member2", member2);
      formData.append("file", file);

      setErrorMsg("");
      await Axios.post(`/api/participants/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      history.push("/");
    } else {
      setErrorMsg("Please select a file to add");
    }
  };
  return (
    <Container>
      <FormWrap>
        {/* <Icon to="/">cens</Icon> */}
        <FormContent>
          <Form action="#" onSubmit={submit} enctype="multipart/form-data">
            <FormH1>Register your team!</FormH1>
            <FormLabel htmlFor="for">Team Name</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Team Name"
              onChange={(e) => setTeamName(e.target.value)}
            />
            <FormLabel htmlFor="for">University/Institution</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Universitas Indonesia"
              onChange={(e) => setUniversity(e.target.value)}
            />
            <FormLabel htmlFor="for">Country of Origin</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Indonesia"
              onChange={(e) => setCountry(e.target.value)}
            />
            <FormLabel htmlFor="for">Name of Team Captain</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="placeholder"
              onChange={(e) => setTeamCaptain(e.target.value)}
            />
            <FormLabel htmlFor="for">Team Captain's Email</FormLabel>
            <FormInput
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setCaptainEmail(e.target.value)}
            />
            <FormLabel htmlFor="for">Team Captain's Email</FormLabel>
            <FormInput
              type="number"
              required
              placeholder="Phone Number"
              onChange={(e) => setCaptainNumber(e.target.value)}
            />
            <FormLabel htmlFor="for">Name of Team Member 1</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Name 1"
              onChange={(e) => setMember1(e.target.value)}
            />
            <FormLabel htmlFor="for">Name of Team Member 2</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Name 2"
              onChange={(e) => setMember2(e.target.value)}
            />
            <div className="upload-section">
              <Dropzone
                onDrop={onDrop}
                onDragEnter={() => updateBorder("over")}
                onDragLeave={() => updateBorder("leave")}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRef}
                  >
                    <input {...getInputProps()} />
                    <p>Drag and drop a file OR click here to select a file</p>
                    {file && (
                      <div>
                        <strong>Selected file:</strong> {file.name}
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
              {previewSrc ? (
                isPreviewAvailable ? (
                  <div className="image-preview">
                    <img
                      className="preview-image"
                      src={previewSrc}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <div className="preview-message">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <div className="preview-message">
                  <p>Image preview will be shown here after selection</p>
                </div>
              )}
            </div>

            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Register;
