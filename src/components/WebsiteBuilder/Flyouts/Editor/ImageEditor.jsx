import React, { useState } from "react";

const ImageEditor = ({
  data: { url = "", width = "", height = "", alt = "" },
  onSubmit = () => {},
}) => {
  const [imageUrl, setImageUrl] = useState(url);
  const [imageWidth, setImageWidth] = useState(width);
  const [imageHeight, setImageHeight] = useState(height);
  const [imageAlt, setImageAlt] = useState(alt);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      src: imageUrl,
      width: imageWidth,
      height: imageHeight,
      alt: imageAlt,
    });
  };

  return (
    <form className="col-md-12" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="image-url" className="form-label fs-4 text-start">
          Enter image URL
        </label>
        <input
          type="url"
          className="form-control"
          id="image-url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="image-width" className="form-label">
            Width (px)
          </label>
          <input
            type="number"
            className="form-control"
            id="image-width"
            value={imageWidth}
            onChange={(e) => setImageWidth(e.target.value)}
            placeholder="e.g., 800"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="image-height" className="form-label">
            Height (px)
          </label>
          <input
            type="number"
            className="form-control"
            id="image-height"
            value={imageHeight}
            onChange={(e) => setImageHeight(e.target.value)}
            placeholder="e.g., 600"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="image-alt" className="form-label">
          Alt Text
        </label>
        <input
          type="text"
          className="form-control"
          id="image-alt"
          value={imageAlt}
          onChange={(e) => setImageAlt(e.target.value)}
          placeholder="Enter alternative text"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default ImageEditor;
