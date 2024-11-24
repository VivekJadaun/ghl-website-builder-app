import React, { useState } from "react";
import { generateId } from "../../../../helpers/stringHelper";

const ParagraphEditor = ({ data: { text = "" }, onSubmit = () => {} }) => {
  const [inputValue, setInputValue] = useState(text);
  const id = generateId();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ text: inputValue });
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-12">
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          <h5>Enter paragraph</h5>
        </label>
        <textarea
          type="text"
          id={id}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="form-control"
          autoFocus
          rows={10}
        />
      </div>
      <div className="flex justify-start">
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ParagraphEditor;
