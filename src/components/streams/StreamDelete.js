import React from "react";
import Modal from "../Modal";
const StreamDelete = () => {
  const action = (
    <div>
      <button type="button" class="btn btn-danger mx-2">
        Delete
      </button>
      <button type="button" class="btn btn-secondary">
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
export default StreamDelete;
