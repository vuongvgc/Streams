import React from 'react';
class GoogleAuth extends React.Component {
    state = { isSignedIn: null }
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
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }
    onSignInGoogle = () => {
        this.auth.signIn();
    }
    onSignOutGoogle = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null
        }else if(this.state.isSignedIn){
            return (
                <button className="btn btn-danger" onClick={this.onSignOutGoogle}>
                    <span><i className="fab fa-google px-2"></i></span>
                    Sign Out
                </button>
            )
        }else {
            return (
                <button className="btn btn-success" onClick={this.onSignInGoogle}>
                    <span><i className="fab fa-google px-2"></i></span>
                    Sign in with Google
                </button>
            )
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}
export default GoogleAuth;

// REVIEW SIGN IN WITH GG https://developers.google.com/identity/sign-in/web/reference
// 1. Load the Google APIs platform library to create the NOTE gapi object
// 2. Load the NOTE auth2 library
// 3. gapi.auth2.getAuthInstance() Returns the NOTE GoogleAuth object
// 4. GoogleAuth.isSignedIn.get() Returns whether the current user is currently signed in. TODO: true false