import React from "react";
import CFITheme from "../components/CFITheme";
import CFIBanner from "../components/CFIBanner";
import { cfiObjOne } from "../components/InfoSection/Data";
import CFIDropdown from "../components/CFIDropdown";

const CFIPage = () => {
  return (
    <>
      <CFIBanner {...cfiObjOne} />
      <CFITheme />
      <CFIDropdown />
    </>
  );
};

export default CFIPage;
