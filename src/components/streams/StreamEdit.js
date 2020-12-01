import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStreams(this.props.match.params.id);
  }
  render() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}
const mapStateToProps = (state, ownsProps) => {
  //   console.log(ownsProps);
  return {
    stream: state.streams[ownsProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStreams: fetchStreams })(
  StreamEdit
);
