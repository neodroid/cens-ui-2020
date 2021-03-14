import React from "react";
import NSTheme from "../components/NSTheme";
import SummitBanner from "../components/SummitBanner";
import { nsObjOne } from "../components/InfoSection/Data";
import NSDropdown from "../components/NSDropdown";
import TimelineNS from "../components/TimelineNS";
import GuidelineNS from "../components/GuidelineNS";
import Announcement from "../components/Announcement copy";

const SummitPage = () => {
  return (
    <>
      <SummitBanner {...nsObjOne} />
      <NSTheme />
      <NSDropdown />
      <TimelineNS />
      <GuidelineNS />
      <Announcement />
    </>
  );
};

export default SummitPage;
