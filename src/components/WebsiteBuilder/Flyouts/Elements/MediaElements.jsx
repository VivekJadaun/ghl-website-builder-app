import React from 'react'
import { ELEMENT_TYPES } from '../../../../constants/constants';

const MediaElements = ({ onClick }) => {
  const onImgClick = () => onClick(ELEMENT_TYPES.IMAGE);
  
  return (
    <div className="element-group">
      <h4>Media</h4>
      <div className="element-cards">
        <div className="element-card" onClick={onImgClick}>
          <div className="icon">
            <i className="fas fa-image"></i>
          </div>
          <h5>Image</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-images"></i>
          </div>
          <h5>Image Popup</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-play-circle"></i>
          </div>
          <h5>Video</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="far fa-play-circle"></i>
          </div>
          <h5>Video popup</h5>
        </div>
        <div className="element-card">
          <div className="icon">
            <i className="fas fa-volume-up"></i>
          </div>
          <h5>Audio player</h5>
        </div>
      </div>
    </div>
  );
};

export default MediaElements;