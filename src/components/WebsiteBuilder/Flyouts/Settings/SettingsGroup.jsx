/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SettingsGroup = () => {
  return (
    <section className="hl_page-creator--settings-group">
      <a href="#" className="close-group" id="close-settings-group">
        <i className="icon icon-close"></i>
      </a>
      <div className="hl_settings-group">
        <div className="tab-content" id="hl_settings-group-tab">
          <div
            className="tab-pane fade"
            id="integrations"
            role="tabpanel"
            aria-labelledby="integrations-tab"
          >
            <h2>Email Integration Settings</h2>
            <div className="integrations">
              <div className="text-center">
                <h5>Auto Responder Integration</h5>
                <p>
                  Here you will be able to hook up your integrations with your
                  auto-responder service...
                </p>
                <p className="not-connected">
                  <i className="icon icon-close"></i> Not Connected
                </p>
              </div>
              <hr />
              <div className="form-group">
                <label>Integrations</label>
                <select className="selectpicker" data-width="100%">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="form-group">
                <label>Action</label>
                <select className="selectpicker" data-width="100%">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="form-group">
                <label>List to Add</label>
                <select className="selectpicker" data-width="100%">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="seo"
            role="tabpanel"
            aria-labelledby="seo-tab"
          >
            <h2>SEO Mata Data</h2>
            <div className="seo">
              <div className="warning">
                <p>Warning: Change the Default SEO Page Title.</p>
              </div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  placeholder="Description"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <label>Keywords</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Keywords"
                  value="clickfunnels, landing page, web site editor"
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  value="Your Name"
                />
              </div>
              <div className="form-group">
                <label>Social Image</label>
                <input type="file" placeholder="Social Image" />
              </div>
              <hr />
              <h3>SEO Preview</h3>
              <div className="seo-card --seo1">
                <h4 className="seo-title">
                  My Awesome Landing Page - Powered by ClickFunnels.com
                </h4>
                <p>
                  <a href="#" className="seo-link">
                    http://yourwebsite.com/would-be-here
                  </a>
                </p>
                <p className="seo-description">
                  description for your awesome landing page
                </p>
              </div>
              <div className="seo-card --seo2">
                <h4 className="seo-title">
                  My Awesome Landing Page - Powered by ClickFunnels.com
                </h4>
                <p className="seo-description">
                  description for your awesome landing page
                </p>
                <p>
                  <a href="#" className="seo-link">
                    http://yourwebsite.com/would-be-here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tracking"
            role="tabpanel"
            aria-labelledby="tracking-tab"
          >
            <h2>Tracking Code</h2>
            <div className="tracking">
              <div className="form-group">
                <label>Add HTML/Javascript</label>
                <textarea
                  className="form-control"
                  placeholder="Add HTML/Javascript here..."
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="css"
            role="tabpanel"
            aria-labelledby="css-tab"
          >
            <h2>Custom CSS</h2>
            <div className="css">
              <div className="form-group">
                <label>Add CSS</label>
                <textarea
                  className="form-control"
                  placeholder="Add custo CSS here..."
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="background"
            role="tabpanel"
            aria-labelledby="background-tab"
          >
            <h2>Background</h2>
            <div className="background">
              <div className="form-group">
                <label>Background Image</label>
                <input type="file" />
              </div>
              <div className="form-group">
                <label>Color</label>
                <input type="text" className="form-control" placeholder="Color" />
              </div>
              <div className="form-group">
                <label>Background Video</label>
                <select className="selectpicker" data-width="100%">
                  <option>Off</option>
                  <option>On</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="typography"
            role="tabpanel"
            aria-labelledby="typography-tab"
          >
            <h2>Typography</h2>
            <div className="typography">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, expedita. Porro, ea magni doloremque et fuga optio
                laudantium? Mollitia esse aliquam enim facilis eius natus
                laborum dolor laboriosam numquam sapiente?
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="general"
            role="tabpanel"
            aria-labelledby="general-tab"
          >
            <h2>General Settings</h2>
            <div className="general">
              <div className="form-group">
                <label>On Submit Go To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="On Submit Go To"
                />
              </div>
              <div className="form-group">
                <label>Digital Assets</label>
                <select className="selectpicker" data-width="100%">
                  <option>- no asset / download -</option>
                  <option>Facebook Strategy Guide</option>
                  <option>Anurli</option>
                  <option>Horatio D Medium</option>
                  <option>Horatio D Light</option>
                  <option>Patient Rush Favicon</option>
                </select>
              </div>
              <div className="form-group">
                <label>Affiliate Badge</label>
                <select className="selectpicker" data-width="100%">
                  <option>Hide</option>
                  <option>Show</option>
                </select>
              </div>
              <div className="form-group">
                <label>Search Engines</label>
                <select className="selectpicker" data-width="100%">
                  <option>Hide</option>
                  <option>Show</option>
                </select>
              </div>
              <button type="button" className="btn btn-success btn-block">
                Save Page as Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsGroup;
