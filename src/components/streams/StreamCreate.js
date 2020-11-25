import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate  extends React.Component {
    renderInput(propsForm) {
        console.log(propsForm)
        return <input onChange={propsForm.input.onChange} value={propsForm.input.value} />
    }
    render(){
        // console.log(this.props)
        return(
            <div>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </div>
        )
    }
    
}
export default reduxForm(
    {form: "streamCreate"}
)(StreamCreate);