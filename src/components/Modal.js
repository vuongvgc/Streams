import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      class="modal fade show d-block bg-dark"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      onClick={() => history.push("/")}
    >
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Delete Stream
            </h5>
          </div>
          <div class="modal-body">
            Are you sure want to delete this stream ?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
