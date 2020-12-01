import React from "react";
import { connect } from "react-redux";
const StreamEdit = (props) => {
  console.log(props);
  return <div>StreamEdit</div>;
};
const mapStateToProps = (state, ownsProps) => {
  //   console.log(ownsProps);
  return {
    stream: state.streams[ownsProps.match.params.id],
  };
};
export default connect(mapStateToProps)(StreamEdit);
