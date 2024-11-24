/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Content from "./Content/Content";
import { useWebsiteBuilderContext } from "../../contexts/WebsiteBuilderContext";
import Flyouts from "./Flyouts/Flyouts";
import { SectionProvider } from "../../contexts/SectionContext";

const WebsiteBuilder = () => {
  const {
    sectionFlyoutVisibility,
    columnFlyoutVisibility,
    elementFlyoutVisibility,
    rowFlyoutVisibility,
  } = useWebsiteBuilderContext();
  
  const isFlyoutOpen =
    sectionFlyoutVisibility ||
    rowFlyoutVisibility ||
    columnFlyoutVisibility ||
    elementFlyoutVisibility;

  return (
    <section className="hl_wrapper nav-shrink d-flex">
      <section
        className={`hl_wrapper--inner page-creator ${
          isFlyoutOpen ? "--menu-active" : ""
        }`}
        id="page-creator"
      >
        <SectionProvider>
          <Content />
          <Flyouts />
        </SectionProvider>
      </section>
    </section>
  );
};

export default WebsiteBuilder;
