import React from "react";
import { connect } from "react-redux";
import { deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
const StreamDelete = (props) => {
  const action = (
    <div>
      <button
        type="button"
        class="btn btn-danger mx-2"
        onClick={() => props.deleteStream()}
      >
        Delete
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => history.push("/")}
      >
        Cancel
      </button>
    </div>
  );
  return (
    <div>
      <h3>Stream Delete</h3>
      <Modal
        title="Delete Stream"
        content="Are you sure want to delete this stream"
        action={action}
      />
    </div>
  );
};
export default connect(null, { deleteStream })(StreamDelete);
