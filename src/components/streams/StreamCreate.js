import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate  extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <Field name="title" component="input" type="text"/>
                <Field name="description" component="input" type="textArea" />
            </div>
        )
    }
    
}
export default reduxForm(
    {form: "streamCreate"}
)(StreamCreate);