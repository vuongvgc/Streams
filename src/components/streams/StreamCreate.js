import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate  extends React.Component {
    renderInput({input, label, meta}) {
        // console.log(propsForm)
        return (
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" {...input} />
                <div className="text-danger">{meta.error}</div>
            </div>
        )
    }
    onSubmit(formValue) {
        console.log(formValue)
    }
    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter a title" />
                <Field name="description" component={this.renderInput} label="Enter a description" />
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
    
}
const validate = (formValues) => {
    let error = {};
    if(!formValues.title){
        error.title = "You must enter title"
    }
    if(!formValues.description){
        error.description = "You must enter description"
    }
    return error
}
export default reduxForm({
    form: "streamCreate",
    validate: validate
}
)(StreamCreate);