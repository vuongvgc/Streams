import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import history from "../../history";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderStream = () => {
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
  };
  renderAdmin = (stream) => {
    // console.log(stream);
    if (stream.userId === this.props.currentId) {
      return (
        <div className="row">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="btn btn-primary mx-1"
          >
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => history.push("/streams/delete")}
          >
            Delete
          </button>
        </div>
      );
    }
  };
  renderCreateStream = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="text-right">
          <Link to="/streams/new" className="btn btn-primary">
            Create Streams
          </Link>
        </div>
      );
    }
  };
  renderStream = () => {
    return this.props.streams.map((item) => {
      const { id, title, description } = item;
      return (
        <div className="alert alert-dark row" role="alert" key={id}>
          <div className="col-2">
            <i className="fa fa-video W-100"></i>
          </div>
          <div className="col-6">
            <h4 className="text-danger">{title}</h4>
            <p>{description}</p>
          </div>
          <div className="col-4">{this.renderAdmin(item)}</div>
        </div>
      );
    });
  };
  render() {
    // console.log(this.props.streams);
    return (
      <div className="container">
        <h2 className="text-center text-uppercase">Streams</h2>
        {this.renderStream()}
        {this.renderCreateStream()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
