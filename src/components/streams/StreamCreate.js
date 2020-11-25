import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate  extends React.Component {
    renderInput({input}) {
        console.log()
        return <input onChange={input.onChange} value={input.value} />
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