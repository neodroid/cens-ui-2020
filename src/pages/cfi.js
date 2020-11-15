import React from "react";
import CFIBanner from "../components/CFIBanner";
import { cfiObjOne } from "../components/InfoSection/Data";

const CFIPage = () => {
  return (
    <>
      <CFIBanner {...cfiObjOne} />
    </>
  );
};

export default CFIPage;
