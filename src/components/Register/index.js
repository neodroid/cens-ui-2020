import React, { useState, useEffect } from "react";
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
  DropDown,
  Dropbtn,
  DropDownContent,
} from "./SigninElement";

const Register = () => {
  return (
    <Container>
      <FormWrap>
        {/* <Icon to="/">cens</Icon> */}

        <FormContent>
          <Form action="#">
            {/* <FormH1>Register your team!</FormH1> */}
            <FormLabel htmlFor="for">Team Name</FormLabel>
            <FormInput type="text" required placeholder="Team Name" />
            <FormLabel htmlFor="for">University/Institution</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Universitas Indonesia"
            />
            <FormLabel htmlFor="for">Country of Origin</FormLabel>
            <FormInput type="text" required placeholder="Indonesia" />
            <FormLabel htmlFor="for">Name of Team Captain</FormLabel>
            <FormInput type="text" required placeholder="Name" />
            <FormLabel htmlFor="for">Team Captain's Email</FormLabel>
            <FormInput type="email" required placeholder="Email" />
            <FormLabel htmlFor="for">Team Captain's Phone Number</FormLabel>
            <FormInput type="number" required placeholder="Phone Number" />
            <FormLabel htmlFor="for">Name of Team Member 1</FormLabel>
            <FormInput type="text" required placeholder="Name 1" />
            <FormLabel htmlFor="for">Name of Team Member 2</FormLabel>
            <FormInput type="text" required placeholder="Name 2" />
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Register;
