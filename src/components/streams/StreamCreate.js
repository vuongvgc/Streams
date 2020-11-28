import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
class StreamCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      description: " ",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    // console.log(name);
    this.setState({
      [name]: target.value,
    });
  }
  handleSubmit = (event) => {
    const stream = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.createStream(stream);
    event.preventDefault();
  };
  render() {
    const { title, description } = this.state;
    return (
      <form>
        <div className="form-group">
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Description
            <input
              name="description"
              type="text"
              value={description}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </label>
        </div>
        <button
          className="btn btn-success"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default connect(null, { createStream: createStream })(StreamCreate);
