import React from "react";
import Content from "./Content/Content";
import { useWebsiteBuilderContext } from "../../contexts/WebsiteBuilderContext";
import Flyouts from "./Flyouts/Flyouts";
import { SectionProvider } from "../../contexts/SectionContext";
import { RowProvider } from "../../contexts/RowContext";
import { ElementProvider } from "../../contexts/ElementContext";

const WebsiteBuilder = () => {
  const {
    sectionFlyoutVisibility,
    columnFlyoutVisibility,
    elementFlyoutVisibility,
    rowFlyoutVisibility,
    editorFlyoutVisibility,
  } = useWebsiteBuilderContext();
  
  const isFlyoutOpen =
    sectionFlyoutVisibility ||
    rowFlyoutVisibility ||
    columnFlyoutVisibility ||
    elementFlyoutVisibility ||
    editorFlyoutVisibility;

  return (
    <section className="hl_wrapper nav-shrink d-flex">
      <section
        className={`hl_wrapper--inner page-creator ${
          isFlyoutOpen ? "--menu-active" : ""
        }`}
        id="page-creator"
      >
        <SectionProvider>
          <RowProvider>
            <ElementProvider>
              <Content />
              <Flyouts />
            </ElementProvider>
          </RowProvider>
        </SectionProvider>
      </section>
    </section>
  );
};

export default WebsiteBuilder;
