import React, { useCallback, useEffect } from "react";
import Menu from "./Menu/Menu";
import SectionType from "./SectionType";
import { useSectionContext } from "../../../contexts/SectionContext";
import { RowProvider } from "../../../contexts/RowContext";

const Content = () => {
  const { sections, activeSectionId } = useSectionContext();

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
            <RowProvider key={section.id} type={section.type}>
              <SectionType key={section.id} section={section} />
            </RowProvider>
          ))}
      </div>
    </section>
  );
};

export default Content;
