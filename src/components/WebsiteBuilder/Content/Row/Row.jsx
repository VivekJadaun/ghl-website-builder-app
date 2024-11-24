import React, { useCallback, useMemo } from "react";
import { useElementContext } from "../../../../contexts/ElementContext";
import { useWebsiteBuilderContext } from "../../../../contexts/WebsiteBuilderContext";
import { useRowContext } from "../../../../contexts/RowContext";
import NewElement from "../Elements/NewElement";
import ElementSelector from "../Elements/ElementSelector";
import { useSectionContext } from "../../../../contexts/SectionContext";

const Row = ({ id, columns, parentId, position }) => {
  const { openRowsFlyout } = useWebsiteBuilderContext();
  const { setActiveSectionId } = useSectionContext();
  const { moveRowUp, moveRowDown, deleteRow, duplicateRow } = useRowContext();
  const { elements } = useElementContext();
  const currentRowElements = useMemo(
    () => elements.filter((element) => element.parentId === id),
    [id, elements]
  );

  const onDelete = useCallback(() => {
    setActiveSectionId(parentId);
    deleteRow(id);
  }, [deleteRow, id, parentId, setActiveSectionId]);

  const onDuplicate = useCallback(() => {
    setActiveSectionId(parentId);
    duplicateRow(id);
  }, [duplicateRow, id, parentId, setActiveSectionId]);
    
  const onAdd = useCallback(() => {
    setActiveSectionId(parentId);
    openRowsFlyout();
  }, [openRowsFlyout, parentId, setActiveSectionId]);

  const moveUp = useCallback(
    () => moveRowUp(position),
    [moveRowUp, position]
  );

  const moveDown = useCallback(
    () => moveRowDown(position),
    [moveRowDown, position]
  );

  return (
    <div className="hl_page-creator--row">
      <div className="hl_page-creator--actions">
        <div className="move-actions">
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Up"
            onClick={moveUp}
          >
            <i className="icon icon-arrow-up-2"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Down"
            onClick={moveDown}
          >
            <i className="icon icon-arrow-down-2"></i>
          </span>
        </div>
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="top" title="Settings">
            <i className="fas fa-cog"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Clone"
            onClick={onDuplicate}
          >
            <i className="far fa-eye"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Save">
            <i className="far fa-copy"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Delete"
            onClick={onDelete}
          >
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
      <span
        className="add-new-row"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Row"
        onClick={onAdd}
      >
        <i className="icon icon-plus"></i>
      </span>
      {columns > 0 &&
        [...Array(columns).keys()].map((col) => {
          const currentColElements = currentRowElements.filter(
            (element) => element.column === col
          );
          return (
            <div className="hl_page-creator--column" key={col}>
            {col}
              {currentColElements.length ? (
                currentColElements.map((element) => (
                  <ElementSelector
                    key={element.id}
                    type={element.type}
                    element={element}
                  />
                ))
              ) : (
                <NewElement rowId={id} column={col} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Row;
