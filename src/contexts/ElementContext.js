import React, { useMemo, useState } from "react";
import { generateId } from "../helpers/stringHelper";
import { DEFAULT_ELEMENTS, getDefaultElementDataByType } from "../constants/defaults";

const ElementContext = React.createContext({});

const ElementProvider = ({ children }) => {
  const [elements, setElements] = useState(DEFAULT_ELEMENTS);
  const [activeElementId, setActiveElementId] = useState(DEFAULT_ELEMENTS?.[0]?.id);

  const addElement = (
    type,
    column,
    parentId,
    afterElementId = activeElementId,
    setActive = true
  ) => {
    const newElementId = generateId();

    setElements((elements) => {
      if (!afterElementId) {
        return [
          ...elements,
          {
            id: newElementId,
            type,
            parentId,
            column,
            position:
              Math.max(...elements.map(({ position }) => position), 0) + 1,
            data: getDefaultElementDataByType(type),
          },
        ];
      }

      const insertIndex = elements.findIndex((el) => el.id === afterElementId);

      if (insertIndex === -1) {
        return [
          ...elements,
          {
            id: newElementId,
            type,
            parentId,
            column,
            position:
              Math.max(...elements.map(({ position }) => position), 0) + 1,
            data: getDefaultElementDataByType(type),
          },
        ];
      }

      const afterPosition = elements[insertIndex].position;

      const updatedElements = elements.map((el) => {
        if (el.position > afterPosition) {
          return { ...el, position: el.position + 1 };
        }
        return el;
      });

      return [
        ...updatedElements.slice(0, insertIndex + 1),
        {
          id: newElementId,
          type,
          parentId,
          column,
          position: afterPosition + 1,
          data: getDefaultElementDataByType(type),
        },
        ...updatedElements.slice(insertIndex + 1),
      ];
    });

    if (setActive) {
      setActiveElementId(newElementId);
    }

    return newElementId;
  };

  const editElement = (element) =>
    setElements((elements) =>
      elements.map((el) => (el.id === element.id ? { ...el, ...element } : el))
    );
    
  const deleteElement = (elementId) => {
    setElements((prevElements) => {
      const elementToDelete = prevElements.find(
        (element) => element.id === elementId
      );
      return prevElements
        .filter((element) => element.id !== elementId)
        .map((element) => ({
          ...element,
          position:
            (element.position > elementToDelete.position && element.parentId === elementToDelete.parentId && element.column === elementToDelete.column)
              ? element.position - 1
              : element.position,
        }))
        .sort((a, b) => a.position - b.position);
    });
  };

  const duplicateElement = (elementId) => {
    setElements((prevElements) => {
      const elementToDuplicate = prevElements.find(
        (element) => element.id === elementId
      );
      if (!elementToDuplicate) return prevElements;

      const newId = generateId();
      const duplicatedElement = {
        ...elementToDuplicate,
        id: newId,
        position: elementToDuplicate.position + 1,
      };

      return [
        ...prevElements.map((element) => ({
          ...element,
          position:
            element.position > elementToDuplicate.position
              ? element.position + 1
              : element.position,
        })),
        duplicatedElement,
      ].sort((a, b) => a.position - b.position);
    });
  };
  
  const memoizedContextValues = useMemo(
    () => ({
      elements,
      activeElementId,
      setActiveElementId,
      addElement,
      editElement,
      deleteElement,
      duplicateElement,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeElementId, elements]
  );
  
  return <ElementContext.Provider value={memoizedContextValues}>{children}</ElementContext.Provider>
};

const useElementContext = () => {
  const context = React.useContext(ElementContext);
  if (context === undefined) {
    throw new Error("useElementContext must be used within ElementContext");
  }
  return context;
};

export { ElementContext, ElementProvider, useElementContext };
