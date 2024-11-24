/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const MenuLeft = () => {
  return (
    <div className="menu--left">
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-tooltip="tooltip"
        data-placement="top"
        title="Back"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Desktop"
          id="page-creator-desktop"
        >
          <i className="fas fa-desktop"></i>
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Mobile"
          id="page-creator-mobile"
        >
          <i className="fas fa-mobile-alt"></i>
        </button>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Apps"
        >
          <i className="fas fa-plug"></i>
        </button>
        <div className="dropdown" id="settings-group">
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
            data-tooltip="tooltip"
            data-placement="top"
            title="Settings"
          >
            <i className="fas fa-cogs"></i>
            <span className="btn-text">Settings</span>
          </button>
          <div className="dropdown-menu">
            <div className="nav">
              <a className="dropdown-item" data-toggle="tab" href="#integrations">
                Integrations
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#seo">
                SEO Meta Data
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#tracking">
                Tracking Code
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#css">
                Custom CSS
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#background">
                Background
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#typography">
                Typography
              </a>
              <a className="dropdown-item" data-toggle="tab" href="#general">
                General
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
            data-tooltip="tooltip"
            data-placement="top"
            title="Pop up"
          >
            <i className="fas fa-external-link-alt"></i>
            <span className="btn-text">Pop up</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Show Popup
            </a>
            <a className="dropdown-item" href="#">
              Edit Settings
            </a>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Undo"
        >
          <i className="fas fa-undo"></i>
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Redo"
          disabled
        >
          <i className="fas fa-redo"></i>
        </button>
      </div>
    </div>
  );
}

export default MenuLeft