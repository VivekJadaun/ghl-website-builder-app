import React, { useCallback } from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';
import { useElementContext } from '../../../../contexts/ElementContext';

const Paragraph = ({ id, data: { text }, parentId }) => {
  const { openElementsFlyout, openEditorFlyout } = useWebsiteBuilderContext();
  const { setActiveElementId, deleteElement, duplicateElement } = useElementContext();

  const onEdit = useCallback(() => {
    setActiveElementId(id);
    openEditorFlyout();
  }, [id, openEditorFlyout, setActiveElementId]);

  const onDelete = useCallback(() => {
    setActiveElementId(parentId);
    deleteElement(id);
  }, [deleteElement, id, parentId, setActiveElementId]);

  const onDuplicate = useCallback(() => {
    setActiveElementId(parentId);
    duplicateElement(id);
  }, [duplicateElement, id, parentId, setActiveElementId]);
    
  return (
    <div className="hl_page-creator--element">
      <div className="hl_page-creator--actions">
        <div className="more-actions">
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Settings"
            onClick={onEdit}
          >
            <i className="fas fa-cog"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Move">
            <i className="fas fa-arrows-alt"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Clone" onClick={onDuplicate}>
            <i className="far fa-eye"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Save">
            <i className="far fa-copy"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Delete" onClick={onDelete}>
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
      <span
        className="add-new-element"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Element"
        onClick={openElementsFlyout}
      >
        <i className="icon icon-plus"></i>
      </span>
      <div
        className="element-container"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Paragraph;