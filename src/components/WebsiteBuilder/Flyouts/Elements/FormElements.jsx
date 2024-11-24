import React from 'react'

const FormElements = () => {
  return (
    <div className="element-group">
      <h4>Form</h4>
      <div className="element-cards">
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-stop"></i>
          </div>
          <h5>Button</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <h5>Facebook Option</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="far fa-square"></i>
          </div>
          <h5>Input</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="far fa-hand-pointer"></i>
          </div>
          <h5>Select Box</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-comment-alt"></i>
          </div>
          <h5>Text Area</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-check-square"></i>
          </div>
          <h5>Checkbox Headline</h5>
        </div>
      </div>
    </div>
  );
}

export default FormElements;