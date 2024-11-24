import React, { useCallback, useEffect } from "react";
import Menu from "./Menu/Menu";
import { useSectionContext } from "../../../contexts/SectionContext";
import Section from "./Sections/Section";

const Content = () => {
  const { sections, activeSectionId } = useSectionContext();

  const scrollToSection = useCallback(
    (id) => {
      const element = document.getElementById(`section-${id}`);

      if (element) {
        return element.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      console.error(`Element with id '${id}' not found`);
    },
    []
  );
  
  useEffect(() => {
    if (activeSectionId) {      
      scrollToSection(activeSectionId);
    }
  }, [activeSectionId, scrollToSection]);
  
  return (
    <section className="hl_page-creator--main">
      {/* MenuBar */}
      <Menu />
      
      {/* Sections */}
      <div className="hl_page-creator--content">
        {!!sections.length &&
          sections.map((section) => (
            <Section key={section.id} {...section}/>
          ))}
      </div>
    </section>
  );
};

export default Content;
