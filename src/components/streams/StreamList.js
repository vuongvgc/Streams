import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderStream() {
    return this.props.streams.map((item) => {
      const { id, title, description } = item;
      return (
        <div className="alert alert-dark" role="alert" key={id}>
          <h4 className="text-danger">{title}</h4>
          <p>{description}</p>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.streams);
    return (
      <div className="container">
        <h2 className="text-center text-uppercase">Streams</h2>
        {this.renderStream()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
