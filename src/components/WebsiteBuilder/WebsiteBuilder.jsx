/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Content from "./Content/Content";
import { useWebsiteBuilderContext } from "../../contexts/WebsiteBuilderContext";
import Flyouts from "./Flyouts/Flyouts";

const WebsiteBuilder = () => {
  const { sectionFlyoutVisiblity } = useWebsiteBuilderContext();
  const isFlyoutOpen = sectionFlyoutVisiblity;
  
  return (
    <section className="hl_wrapper nav-shrink d-flex">
      <section
        className={`hl_wrapper--inner page-creator ${
          isFlyoutOpen ? "--menu-active" : ""
        }`}
        id="page-creator"
      >
        <Content />
        <Flyouts />
      </section>
    </section>
  );
};

export default WebsiteBuilder;
