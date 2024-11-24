import React from 'react'

const CountdownElements = () => {
  return (
    <div className="element-group">
      <h4>Countdown</h4>
      <div className="element-cards">
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-hourglass-start"></i>
          </div>
          <h5>Countdown</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="far fa-clock"></i>
          </div>
          <h5>Minute Timer</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-clock"></i>
          </div>
          <h5>Day Timer</h5>
        </div>
      </div>
    </div>
  );
}

export default CountdownElements;