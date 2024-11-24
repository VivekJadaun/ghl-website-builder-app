// tbd
import React, { useMemo, useState } from "react";
import { generateId } from "../helpers/stringHelper";

const ColumnContext = React.createContext({});

const ColumnProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);
  const [activeColumnId, setActiveColumnId] = useState("");
  
  const addColumn = (type, setActive = true) => {
    const newColumnId = generateId();
    setColumns((columns) => [
      ...columns,
      {
        id: newColumnId,
        type,
        position: Math.max(columns.map(({ position }) => position)) + 1,
      },
    ]);

    if (setActive) {
      setActiveColumnId(newColumnId);
    }
    
    return newColumnId;
  };

  const editColumn = (column) =>
    setColumns((columns) =>
      columns.map((sec) => (sec.id === column.id ? { ...sec, ...column } : sec))
    );
    
  const deleteColumn = (columnId) => {
    setColumns((prevcolumns) => {
      const columnToDelete = prevcolumns.find((column) => column.id === columnId);
      return prevcolumns
        .filter((column) => column.id !== columnId)
        .map((column) => ({
          ...column,
          position:
            column.position > columnToDelete.position
              ? column.position - 1
              : column.position,
        }))
        .sort((a, b) => a.position - b.position);
    });
  };

  const memoizedContextValues = useMemo(
    () => ({
      columns,
      activeColumnId,
      setActiveColumnId,
      addColumn,
      editColumn,
      deleteColumn,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeColumnId, columns]
  );
  
  return <ColumnContext.Provider value={memoizedContextValues}>{children}</ColumnContext.Provider>
};

const useColumnContext = () => {
  const context = React.useContext(ColumnContext);
  if (context === undefined) {
    throw new Error("useColumnContext must be used within ColumnContext");
  }
  return context;
};

export { ColumnContext, ColumnProvider, useColumnContext };
