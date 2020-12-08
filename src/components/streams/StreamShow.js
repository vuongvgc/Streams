import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";
class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(this.videoRef);
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
    // console.log(this.videoRef);
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer() {
    const { id } = this.props.match.params;
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    // console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="container">
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
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
