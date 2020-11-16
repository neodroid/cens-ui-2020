import React from "react";
import CFITheme from "../components/CFITheme";
import CFIBanner from "../components/CFIBanner";
import { cfiObjOne } from "../components/InfoSection/Data";
import CFIDropdown from "../components/CFIDropdown";
import TimelineCFI from "../components/TimelineCFI";
import GuidelineCFI from "../components/GuidlineCFI";

const CFIPage = () => {
  return (
    <>
      <CFIBanner {...cfiObjOne} />
      <CFITheme />
      <CFIDropdown />
      <TimelineCFI />
      <GuidelineCFI />
    </>
  );
};

export default CFIPage;
