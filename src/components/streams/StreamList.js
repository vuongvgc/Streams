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
        <div className="alert alert-dark row" role="alert" key={id}>
          <div className="col-2">
            <i className="fa fa-video W-100"></i>
          </div>
          <div className="col-10">
            <h4 className="text-danger">{title}</h4>
            <p>{description}</p>
          </div>
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
