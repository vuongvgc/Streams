import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamCreate extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    // console.log(this.props.createStream());
    this.props.createStream(formValue);
  };
  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>Create your stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { createStream: createStream })(StreamCreate);
