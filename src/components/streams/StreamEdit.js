import React from "react";
import { connect } from "react-redux";
import { fetchStreams, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStreams(this.props.match.params.id);
  }
  onSubmit = (formValue) => {
    this.props.editStream(this.props.match.params.id, formValue);
  };
  render() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownsProps) => {
  //   console.log(ownsProps);
  return {
    stream: state.streams[ownsProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  fetchStreams: fetchStreams,
  editStream: editStream,
})(StreamEdit);
