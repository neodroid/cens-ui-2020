import React, { useState } from "react";
import Register from "../components/Register";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import RegistrationBanner from "../components/RegistrationBanner";

const RegisterPage = () => {
  return (
    <>
      <RegistrationBanner />
      <Register />
    </>
  );
};

export default RegisterPage;
