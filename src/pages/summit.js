import React from "react";
import NSTheme from "../components/NSTheme";
import SummitBanner from "../components/SummitBanner";
import { nsObjOne } from "../components/InfoSection/Data";
import NSDropdown from "../components/NSDropdown";
import TimelineNS from "../components/TimelineNS";

const SummitPage = () => {
  return (
    <>
      <SummitBanner {...nsObjOne} />
      <NSTheme />
      <NSDropdown />
      <TimelineNS />
    </>
  );
};

export default SummitPage;
