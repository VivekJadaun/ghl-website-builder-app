import React from 'react'

const AdvanceFormElements = () => {
  return (
    <div className="element-group">
      <h4>Advance Form</h4>
      <div className="element-cards">
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-sms"></i>
          </div>
          <h5>SMS Sign up</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-file-invoice"></i>
          </div>
          <h5>Billing Add.</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-file-invoice"></i>
          </div>
          <h5>Shipping Add.</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-poll-h"></i>
          </div>
          <h5>Survey</h5>
        </div>
      </div>
    </div>
  );
}

export default AdvanceFormElements;