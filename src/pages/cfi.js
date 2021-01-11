import React from "react";
import CFITheme from "../components/CFITheme";
import CFIBanner from "../components/CFIBanner";
import { cfiObjOne } from "../components/InfoSection/Data";
import CFIDropdown from "../components/CFIDropdown";
import TimelineCFI from "../components/TimelineCFI";
import Announcement from "../components/Announcement";
import GuidelineCFI from "../components/GuidlineCFI";

const CFIPage = () => {
  return (
    <>
      <CFIBanner {...cfiObjOne} />
      <CFITheme />
      <CFIDropdown />
      <TimelineCFI />
      <GuidelineCFI />
      <Announcement />
    </>
  );
};

export default CFIPage;
