import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const Modal = (props) => {
  const color = {
    backgroundColor: "rgba(0,0,0,0.5)",
  };
  return ReactDOM.createPortal(
    <div
      class="modal fade show d-block"
      style={color}
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
              {props.title}
            </h5>
          </div>
          <div class="modal-body">{props.content}</div>
          <div class="modal-footer">{props.action}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
