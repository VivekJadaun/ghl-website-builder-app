import React from "react";

const Modal = () => {
  return (
    <>
      <div className="modal fade" id="client-checkin--modal" tabIndex="-1" role="dialog" aria-labelledby="client-checkin--modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header--inner">
                <h5 className="modal-title" id="client-checkin--modalLabel"><i className="icon icon-user --green"></i> Client Check In</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-body--inner">
                <div className="form-group">
                  <label>Customer Phone or Email:</label>
                  <input type="text" className="form-control" placeholder="Customer Phone or Email"/>
                </div>
                <div className="form-group">
                  <label>Customer Name:</label>
                  <input type="text" className="form-control" placeholder="Customer Name"/>
                </div>
                <div className="modal-buttons d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn-link">Send to Multiple Clients</button>
                  <button type="button" className="btn btn-success">Send a Review Invite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal review-link--modal" tabIndex="-1" role="dialog" id="review-link--modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <img src="./img/img-link-review-copied.png"/>
            <h4>Link copied to clipboard!</h4>
            <p>www.somekindoflink.com/mycompanyname/213213</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;
