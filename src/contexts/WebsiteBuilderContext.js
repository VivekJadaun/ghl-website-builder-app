import React, { useMemo, useState } from "react";
import { DEFAULT_SECTIONS } from "../constants/constants";
import { generateId } from "../helpers/stringHelper";

const WebsiteBuilderContext = React.createContext({});

const WebsiteBuilderProvider = ({ children }) => {
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [activeSectionId, setActiveSectionId] = useState(DEFAULT_SECTIONS?.[0]?.id ?? "");
  const [sectionFlyoutVisiblity, setSectionFlyoutVisiblity] = useState(false);
  
  const addSection = (type, setActive = true) =>{
    const newSectionId = generateId();
    setSections((sections) => [
      ...sections,
      {
        id: newSectionId,
        type,
        position: Math.max(sections.map(({ position }) => position)) + 1,
      },
    ]);

    if (setActive) {
      setActiveSectionId(newSectionId);
    }
    
    return newSectionId;
  };

  const editSection = (section) =>
    setSections((sections) =>
      sections.map((sec) => (sec.id === section.id ? { ...sec, ...section } : sec))
    );
    
  const deleteSection = (sectionId) => {
    setSections((prevsections) => {
      const sectionToDelete = prevsections.find((section) => section.id === sectionId);
      return prevsections
        .filter((section) => section.id !== sectionId)
        .map((section) => ({
          ...section,
          position:
            section.position > sectionToDelete.position
              ? section.position - 1
              : section.position,
        }))
        .sort((a, b) => a.position - b.position);
    });
  };

  const duplicateSection = (sectionId) => {
    setSections((prevSections) => {
      const sectionToDuplicate = prevSections.find(
        (section) => section.id === sectionId
      );
      if (!sectionToDuplicate) return prevSections;

      const newId = generateId();
      const duplicatedSection = {
        ...sectionToDuplicate,
        id: newId,
        position: sectionToDuplicate.position + 1,
      };

      return [
        ...prevSections.map((section) => ({
          ...section,
          position:
            section.position > sectionToDuplicate.position
              ? section.position + 1
              : section.position,
        })),
        duplicatedSection,
      ].sort((a, b) => a.position - b.position);
    });
  };
  
  const closeSectionsFlyout = () => setSectionFlyoutVisiblity(false);
  const openSectionsFlyout = () => setSectionFlyoutVisiblity(true);
  const toggleSectionsFlyout = () => setSectionFlyoutVisiblity((currentVisibility) => !currentVisibility);

  const moveSection = (currentPosition, moveUp = false) => {
    const newPosition = moveUp ? currentPosition - 1 : currentPosition + 1;

    /* Boundary check */    
    if (newPosition < 0 || newPosition >= sections.length) return;

    setSections((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.position === currentPosition) {
            return { ...item, position: newPosition };
          }
          if (item.position === newPosition) {
            return { ...item, position: currentPosition };
          }
          return item;
        })
        .sort(
          (a, b) => a.position - b.position
        ); /* Sort while setting the state to avoid having to do this in children */
    });
  };
  const moveSectionUp = (currentPosition) => moveSection(currentPosition, true);
  const moveSectionDown = (currentPosition) => moveSection(currentPosition, false);

  const memoizedContextValues = useMemo(
    () => ({
      sections,
      activeSectionId,
      setActiveSectionId,
      addSection,
      editSection,
      deleteSection,
      duplicateSection,
      sectionFlyoutVisiblity,
      closeSectionsFlyout,
      openSectionsFlyout,
      toggleSectionsFlyout,
      moveSectionUp,
      moveSectionDown
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeSectionId, sectionFlyoutVisiblity, sections]
  );
  
  return <WebsiteBuilderContext.Provider value={memoizedContextValues}>{children}</WebsiteBuilderContext.Provider>
};

const useWebsiteBuilderContext = () => {
  const context = React.useContext(WebsiteBuilderContext);
  if (context === undefined) {
    throw new Error("useWebsiteBuilderContext must be used within WebsiteBuilderContext");
  }
  return context;
};

export { WebsiteBuilderContext, WebsiteBuilderProvider, useWebsiteBuilderContext };
