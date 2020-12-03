import React from "react";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderAction = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push("/")}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure want to delete this stream";
    }
    return `Are you sure want to delete the stream with title: ${this.props.stream.title}`;
  }
  render() {
    console.log(this.props);
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        action={this.renderAction()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownsProps) => {
  // console.log(ownsProps);
  return { stream: state.streams[ownsProps.match.params.id] };
};
export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
