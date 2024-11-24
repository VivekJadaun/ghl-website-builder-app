import React from 'react'
import { ELEMENT_TYPES } from '../../../../constants/constants';

const TextElements = ({ onClick }) => {
  const onHeadlineClick = () => onClick(ELEMENT_TYPES.HEADLINE);
  const onParagraphClick = () => onClick(ELEMENT_TYPES.PARAGRAPH);
  return (
    <div className="element-group">
      <h4>Text</h4>
      <div className="element-cards">
        <div className="element-card" onClick={onHeadlineClick}>
          <div className="icon">
            <i className="fas fa-heading"></i>
          </div>
          <h5>Headline</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-font"></i>
          </div>
          <h5>Sub-headline</h5>
        </div>
        <div className="element-card" onClick={onParagraphClick}>
          <div className="icon">
            <i className="fas fa-paragraph"></i>
          </div>
          <h5>Paragraph</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-list"></i>
          </div>
          <h5>Bullet List</h5>
        </div>
      </div>
    </div>
  );
}

export default TextElements;