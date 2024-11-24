import React from 'react'

const ContentBlockElements = () => {
  return (
    <div className="element-group">
      <h4>Content Blocks</h4>
      <div className="element-cards">
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-circle"></i>
          </div>
          <h5>Icon</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-file-image"></i>
          </div>
          <h5>Img Feature</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-link"></i>
          </div>
          <h5>Navigation</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="far fa-question-circle"></i>
          </div>
          <h5>FAQ</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="far fa-window-minimize"></i>
          </div>
          <h5>Divider</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-window-minimize"></i>
          </div>
          <h5>Progress bar</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-list"></i>
          </div>
          <h5>Image List</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-table"></i>
          </div>
          <h5>Pricing Table</h5>
        </div>
      </div>
    </div>
  );
}

export default ContentBlockElements;