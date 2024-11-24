import React from 'react'

const MiscElements = () => {
  return (
    <div className="element-group">
      <h4>Misc Elements</h4>
      <div className="element-cards">
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-share-alt-square"></i>
          </div>
          <h5>Social Share</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-bell"></i>
          </div>
          <h5>Privacy Notice</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-comments"></i>
          </div>
          <h5>FB Comments</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-align-center"></i>
          </div>
          <h5>Text Block</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-code"></i>
          </div>
          <h5>Custom JS/HTML</h5>
        </div>
      </div>
    </div>
  );
}

export default MiscElements;