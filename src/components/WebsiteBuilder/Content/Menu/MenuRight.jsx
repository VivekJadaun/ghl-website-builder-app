import React from 'react'

const MenuRight = () => {
  return (
    <div className="menu--right">
      <div className="btn-group">
        <div className="dropdown" id="section-group">
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
            data-tooltip="tooltip"
            data-placement="top"
            title="Sections"
          >
            <i className="fas fa-expand"></i>
            <span className="btn-text">Sections</span>
          </button>
          <div className="dropdown-menu">
            <div className="nav">
              <a className="dropdown-item" data-toggle="tab" href="#add-section">
                Add Section
              </a>
              <a
                className="dropdown-item"
                data-toggle="tab"
                href="#manage-sections"
              >
                Manage
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown" id="row-group">
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
            data-tooltip="tooltip"
            data-placement="top"
            title="Rows"
          >
            <i className="fas fa-bars"></i>
            <span className="btn-text">Rows</span>
          </button>
          <div className="dropdown-menu">
            <div className="nav">
              <a className="dropdown-item" data-toggle="tab" href="#add-row">
                Add Row
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#manage-rows">
                Manage
              </a>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Columns"
          id="column-group"
        >
          <i className="fas fa-columns"></i>
          <span className="btn-text">Columns</span>
        </button>
        <div className="dropdown" id="element-group">
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
            data-tooltip="tooltip"
            data-placement="top"
            title="Elements"
          >
            <i className="fas fa-code"></i>
            <span className="btn-text">Elements</span>
          </button>
          <div className="dropdown-menu">
            <div className="nav">
              <a className="dropdown-item" data-toggle="tab" href="#add-element">
                Add Element
              </a>
              <a
                className="dropdown-item"
                data-toggle="tab"
                href="#manage-elements"
              >
                Manage
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Preview"
        >
          <i className="far fa-eye"></i>
          <span className="btn-text">Preview</span>
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Save"
        >
          <i className="far fa-save"></i>
          <span className="btn-text">Save</span>
        </button>
      </div>
    </div>
  );
}

export default MenuRight