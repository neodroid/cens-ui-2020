import React from "react";
import CFITheme from "../components/CFITheme";
import CFIBanner from "../components/CFIBanner";
import { cfiObjOne } from "../components/InfoSection/Data";
import CFIDropdown from "../components/CFIDropdown";
import TimelineCFI from "../components/TimelineCFI";

const CFIPage = () => {
  return (
    <>
      <CFIBanner {...cfiObjOne} />
      <CFITheme />
      <CFIDropdown />
      <TimelineCFI />
    </>
  );
};

export default CFIPage;
