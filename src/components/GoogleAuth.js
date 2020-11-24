import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions' 
class GoogleAuth extends React.Component {
    componentDidMount() {
        // NOTE After the platform library loads, load the auth2 library:
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                // params:	An object containing key-value pairs of client configuration data. See gapi.auth2.ClientConfig for the different properties configurable. For example:
                // { client_id: 'CLIENT_ID.apps.googleusercontent.com'}
                clientId: '847913211050-mg6a7sg1hg7u2mqnammqn0g2nurem5vk.apps.googleusercontent.com',
                // client_id	string	Required. The app's client ID, found and created in the Google Developers Console.
                scope: 'email'
            }).then( () => {
                // The gapi.auth2.GoogleAuth object. Use the then() method to get a Promise that is resolved when the gapi.auth2.GoogleAuth object finishes initializing.
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    onSignInGoogleClick = () => {
        // console.log('in')
        this.auth.signIn();
    }
    onSignOutGoogleClick = () => {
        // console.log('out')
        this.auth.signOut();
    }
    renderAuthButton() {
        // console.log('state',this.state.isSignedIn)
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return (
                <button className="btn btn-danger" onClick={this.onSignOutGoogleClick}>
                    <span><i className="fab fa-google px-2"></i></span>
                    Sign Out
                </button>
            )
        }else {
            return (
                <button className="btn btn-success" onClick={this.onSignInGoogleClick}>
                    <span><i className="fab fa-google px-2"></i></span>
                    Sign in with Google
                </button>
            )
        }
    }
    render(){
        // console.log('props', this.props.isSignedIn);
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userId}
}
export default connect(
    mapStateToProps,
    { signIn, signOut }
    )(GoogleAuth);

// REVIEW SIGN IN WITH GG https://developers.google.com/identity/sign-in/web/reference
// 1. Load the Google APIs platform library to create the NOTE gapi object
// 2. Load the NOTE auth2 library
// 3. gapi.auth2.getAuthInstance() Returns the NOTE GoogleAuth object
// 4. GoogleAuth.isSignedIn.get() Returns whether the current user is currently signed in. TODO: true false