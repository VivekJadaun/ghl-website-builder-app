import React, { useMemo, useState } from "react";
import { generateId } from "../helpers/stringHelper";

const ElementContext = React.createContext({});

const ElementProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [activeElementId, setActiveElementId] = useState("");
  
  const addElement = (type, setActive = true) =>{
    const newElementId = generateId();
    setElements((elements) => [
      ...elements,
      {
        id: newElementId,
        type,
        position: Math.max(elements.map(({ position }) => position)) + 1,
      },
    ]);

    if (setActive) {
      setActiveElementId(newElementId);
    }
    
    return newElementId;
  };

  const editElement = (element) =>
    setElements((elements) =>
      elements.map((el) => (el.id === element.id ? { ...el, ...element } : el))
    );
    
  const deleteElement = (sectionId) => {
    setElements((prevsections) => {
      const sectionToDelete = prevsections.find((element) => element.id === sectionId);
      return prevsections
        .filter((element) => element.id !== sectionId)
        .map((element) => ({
          ...element,
          position:
            element.position > sectionToDelete.position
              ? element.position - 1
              : element.position,
        }))
        .sort((a, b) => a.position - b.position);
    });
  };

  const duplicateElement = (sectionId) => {
    setElements((prevElements) => {
      const sectionToDuplicate = prevElements.find(
        (element) => element.id === sectionId
      );
      if (!sectionToDuplicate) return prevElements;

      const newId = generateId();
      const duplicatedElement = {
        ...sectionToDuplicate,
        id: newId,
        position: sectionToDuplicate.position + 1,
      };

      return [
        ...prevElements.map((element) => ({
          ...element,
          position:
            element.position > sectionToDuplicate.position
              ? element.position + 1
              : element.position,
        })),
        duplicatedElement,
      ].sort((a, b) => a.position - b.position);
    });
  };
  
  const moveElement = (currentPosition, moveUp = false) => {
    const newPosition = moveUp ? currentPosition - 1 : currentPosition + 1;

    /* Boundary check */    
    if (newPosition < 0 || newPosition >= elements.length) return;

    setElements((prevItems) => {
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
  const moveElementUp = (currentPosition) => moveElement(currentPosition, true);
  const moveElementDown = (currentPosition) => moveElement(currentPosition, false);

  const memoizedContextValues = useMemo(
    () => ({
      elements,
      activeElementId,
      setActiveElementId,
      addElement,
      editElement,
      deleteElement,
      duplicateElement,
      moveElementUp,
      moveElementDown
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
