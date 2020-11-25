import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate  extends React.Component {
    renderInput({input, label}) {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" {...input} />
            </div>
        )
    }
    onSubmit(formValue) {
        console.log(formValue)
    }
    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter a title" />
                <Field name="description" component={this.renderInput} label="Enter a description" />
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
    
}
export default reduxForm(
    {form: "streamCreate"}
)(StreamCreate);