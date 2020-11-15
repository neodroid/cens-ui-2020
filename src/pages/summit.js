import React from "react";
import NSTheme from "../components/NSTheme";
import SuummitBanner from "../components/SummitBanner";
import { nsObjOne } from "../components/InfoSection/Data";
import NSDropdown from "../components/NSDropdown";

const SummitPage = () => {
  return (
    <>
      <SuummitBanner {...nsObjOne} />
      <NSTheme />
      <NSDropdown />
    </>
  );
};

export default SummitPage;
