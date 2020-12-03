import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownsProps) => {
  return { stream: state.streams[ownsProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
