import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return <div className="alert alert-danger">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    // console.log(propsForm)
    const className = meta.error && meta.touched ? "text-danger" : "";
    return (
      <div className="form-group">
        <label className={className}>{label}</label>
        <input className="form-control" {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValue) => {
    // console.log(formValue);
    // console.log(this.props.createStream());
    this.props.onSubmit(formValue);
  };
  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  let error = {};
  if (!formValues.title) {
    error.title = "You must enter title";
  }
  if (!formValues.description) {
    error.description = "You must enter description";
  }
  return error;
};
export default reduxForm({
  form: "StreamForm",
  validate: validate,
})(StreamForm);
