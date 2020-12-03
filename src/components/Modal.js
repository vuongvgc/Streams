import React from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const color = {
    backgroundColor: "rgba(0,0,0,0.5)",
  };
  return ReactDOM.createPortal(
    <div
      className="modal fade show d-block"
      style={color}
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      onClick={() => props.onDismiss()}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">{props.action}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
