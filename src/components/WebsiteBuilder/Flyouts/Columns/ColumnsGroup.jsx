/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ColumnsGroup = () => {
  return (
    <section className="hl_page-creator--columns-group">
      <a href="#" className="close-group" id="close-column-group">
        <i className="icon icon-close"></i>
      </a>
      <div className="manage-columns">
        <h2>Manage Columns</h2>
        <div className="columns-section-group-wrap">
          <div className="columns-section-group">
            <h3>Section {">"} 2 Column Row</h3>
            <ul className="columns">
              <li>
                <h4>Left Column</h4>
                <div className="actions">
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-eye"></i>
                  </a>
                </div>
              </li>
              <li>
                <h4>Right Column</h4>
                <div className="actions">
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-eye"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="columns-section-group">
            <h3>Section {">"} 1 Column Row</h3>
            <ul className="columns">
              <li>
                <h4>Full Column</h4>
                <div className="actions">
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-eye"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="columns-section-group">
            <h3>Section {">"} 2 Column Row</h3>
            <ul className="columns">
              <li>
                <h4>Left Column</h4>
                <div className="actions">
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-eye"></i>
                  </a>
                </div>
              </li>
              <li>
                <h4>Right Column</h4>
                <div className="actions">
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-eye"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="columns-section-group">
            <h3>Section {">"} 1 Column Row</h3>
            <ul className="columns">
              <li>
                <h4>Full Column</h4>
                <div className="actions">
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="btn btn-square-sm btn-light4">
                    <i className="far fa-eye"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColumnsGroup;