import React from 'react'

const SubHeadline = () => {
  return (
    <div className="hl_page-creator--element">
      <div className="hl_page-creator--actions">
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="top" title="Move">
            <i className="fas fa-arrows-alt"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Clone">
            <i className="far fa-eye"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Save">
            <i className="far fa-copy"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Delete">
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
      <span
        className="add-new-element"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Element"
      >
        <i className="icon icon-plus"></i>
      </span>
      <div className="element-container">
        <h1>SubHeadline Text Goes Here</h1>
      </div>
    </div>
  );
}

export default SubHeadline;