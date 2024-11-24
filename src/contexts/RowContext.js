import React, { useMemo, useState } from "react";
import { generateId } from "../helpers/stringHelper";
import { getDefaultRowBySectionType } from "../constants/defaults";

const RowContext = React.createContext({});

const RowProvider = ({ type, children }) => {
  const [rows, setRows] = useState(getDefaultRowBySectionType(type));
  const [activeRowId, setActiveRowId] = useState("");
  
  const addRow = (columns, afterRowId = activeRowId, setActive = true) => {
    const newRowId = generateId();

    setRows((rows) => {
      if (!afterRowId) {
        return [
          ...rows,
          {
            id: newRowId,
            columns,
            position: Math.max(...rows.map(({ position }) => position), 0) + 1,
          },
        ];
      }

      const insertIndex = rows.findIndex((row) => row.id === afterRowId);

      if (insertIndex === -1) {
        return [
          ...rows,
          {
            id: newRowId,
            columns,
            position: Math.max(...rows.map(({ position }) => position), 0) + 1,
          },
        ];
      }

      const afterPosition = rows[insertIndex].position;

      const updatedRows = rows.map((row) => {
        if (row.position > afterPosition) {
          return { ...row, position: row.position + 1 };
        }
        return row;
      });

      return [
        ...updatedRows.slice(0, insertIndex + 1),
        {
          id: newRowId,
          columns,
          position: afterPosition + 1,
        },
        ...updatedRows.slice(insertIndex + 1),
      ];
    });

    if (setActive) {
      setActiveRowId(newRowId);
    }

    return newRowId;
  };

  const editRow = (row) =>
    setRows((rows) =>
      rows.map((rowItem) => (rowItem.id === row.id ? { ...rowItem, ...row } : rowItem))
    );
    
  const deleteRow = (RowId) => {
    setRows((prevRows) => {
      const RowToDelete = prevRows.find((row) => row.id === RowId);
      return prevRows
        .filter((row) => row.id !== RowId)
        .map((row) => ({
          ...row,
          position:
            row.position > RowToDelete.position
              ? row.position - 1
              : row.position,
        }))
        .sort((a, b) => a.position - b.position);
    });
  };

  const duplicateRow = (RowId) => {
    setRows((prevRows) => {
      const RowToDuplicate = prevRows.find(
        (row) => row.id === RowId
      );
      if (!RowToDuplicate) return prevRows;

      const newId = generateId();
      const duplicatedRow = {
        ...RowToDuplicate,
        id: newId,
        position: RowToDuplicate.position + 1,
      };

      return [
        ...prevRows.map((row) => ({
          ...row,
          position:
            row.position > RowToDuplicate.position
              ? row.position + 1
              : row.position,
        })),
        duplicatedRow,
      ].sort((a, b) => a.position - b.position);
    });
  };
  
  const moveRow = (currentPosition, moveUp = false) => {
    const newPosition = moveUp ? currentPosition - 1 : currentPosition + 1;

    /* Boundary check */
    if (newPosition < 0 || newPosition >= rows.length) return;

    setRows((prevItems) => {
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
  const moveRowUp = (currentPosition) => moveRow(currentPosition, true);
  const moveRowDown = (currentPosition) => moveRow(currentPosition, false);

  const memoizedContextValues = useMemo(
    () => ({
      rows,
      activeRowId,
      setActiveRowId,
      addRow,
      editRow,
      deleteRow,
      duplicateRow,
      moveRowUp,
      moveRowDown,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeRowId, rows]
  );
  
  return <RowContext.Provider value={memoizedContextValues}>{children}</RowContext.Provider>
};

const useRowContext = () => {
  const context = React.useContext(RowContext);
  if (context === undefined) {
    throw new Error("useRowContext must be used within RowContext");
  }
  return context;
};

export { RowContext, RowProvider, useRowContext };
