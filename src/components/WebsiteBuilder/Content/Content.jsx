import React, { memo, useCallback, useEffect } from "react";
import Menu from "./Menu/Menu";
import { useWebsiteBuilderContext } from "../../../contexts/WebsiteBuilderContext";
import SectionType from "./SectionType";

const Content = () => {
  const { sections, activeSectionId } = useWebsiteBuilderContext();

  const scrollToSection = useCallback(
    (id) => {
      const element = document.getElementById(`section-${id}`);

      if (element) {
        return element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      console.error(`Element with id '${id}' not found`);
    },
    []
  );
  ;
  
  useEffect(() => {
    if (activeSectionId) {
      scrollToSection(activeSectionId);
    }
  }, [activeSectionId, scrollToSection]);

  return (
    <section className="hl_page-creator--main">
      <Menu />

      <div className="hl_page-creator--content">
        {!!sections.length &&
          sections.map((section) => (
            <SectionType key={section.id} section={section} />
          ))}
      </div>
    </section>
  );
};

export default memo(Content);
