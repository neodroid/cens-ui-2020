import React from "react";
import NSTheme from "../components/NSTheme";
import SuummitBanner from "../components/SummitBanner";
import { nsObjOne } from "../components/InfoSection/Data";
import NSDropdown from "../components/NSDropdown";
import TimelineNS from "../components/TimelineNS";

const SummitPage = () => {
  return (
    <>
      <SuummitBanner {...nsObjOne} />
      <NSTheme />
      <NSDropdown />
      <TimelineNS />
    </>
  );
};

export default SummitPage;
