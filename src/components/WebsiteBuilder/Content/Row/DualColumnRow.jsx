import React from 'react'

const DualColumnRow = () => {
  return (
    <div className="hl_page-creator--row">
      <div className="hl_page-creator--actions">
        <div className="move-actions">
          <span data-tooltip="tooltip" data-placement="top" title="Up">
            <i className="icon icon-arrow-up-2"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Down">
            <i className="icon icon-arrow-down-2"></i>
          </span>
        </div>
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="top" title="Settings">
            <i className="fas fa-cog"></i>
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
        className="add-new-row"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Row"
      >
        <i className="icon icon-plus"></i>
      </span>
      <div className="hl_page-creator--column">
        <div href="#" className="new-element-blank">
          <span className="btn btn-light6 btn-slim">Add New Element</span>
        </div>
      </div>
      <div className="hl_page-creator--column">
        <div href="#" className="new-element-blank">
          <span className="btn btn-light6 btn-slim">Add New Element</span>
        </div>
      </div>
    </div>
  );
}

export default DualColumnRow;