import React, { useMemo, useState } from "react";
import { DEFAULT_SECTIONS } from "../constants/defaults";
import { generateId } from "../helpers/stringHelper";

const SectionContext = React.createContext({});

const SectionProvider = ({ children }) => {
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [activeSectionId, setActiveSectionId] = useState(DEFAULT_SECTIONS?.[0]?.id ?? "");
  
  const addSection = (
    type,
    afterSectionId = activeSectionId,
    setActive = true
  ) => {
    const newSectionId = generateId();

    setSections((sections) => {
      /* If no afterSectionId is provided or section not found, add to the end */
      if (!afterSectionId) {
        return [
          ...sections,
          {
            id: newSectionId,
            type,
            position:
              Math.max(...sections.map(({ position }) => position), 0) + 1,
          },
        ];
      }

      /* Find the index of the section to insert after */
      const insertIndex = sections.findIndex(
        (section) => section.id === afterSectionId
      );

      if (insertIndex === -1) {
        /* If section not found, add to the end */
        return [
          ...sections,
          {
            id: newSectionId,
            type,
            position:
              Math.max(...sections.map(({ position }) => position), 0) + 1,
          },
        ];
      }

      /* Get the position value for the new section */
      const afterPosition = sections[insertIndex].position;

      /* Update positions for all sections after the insertion point */
      const updatedSections = sections.map((section) => {
        if (section.position > afterPosition) {
          return { ...section, position: section.position + 1 };
        }
        return section;
      });

      /* Insert the new section at the correct position */
      return [
        ...updatedSections.slice(0, insertIndex + 1),
        {
          id: newSectionId,
          type,
          position: afterPosition + 1,
        },
        ...updatedSections.slice(insertIndex + 1),
      ];
    });

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
      moveSectionUp,
      moveSectionDown
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeSectionId, sections]
  );
    
  console.log(activeSectionId);
  
  return <SectionContext.Provider value={memoizedContextValues}>{children}</SectionContext.Provider>
};

const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSectionContext must be used within SectionContext");
  }
  return context;
};

export { SectionContext, SectionProvider, useSectionContext };
