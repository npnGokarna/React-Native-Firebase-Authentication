import React, {Component} from 'react';
import {View,
    Text,
    Linking,
    Platform
} from 'react-native';
import * as firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from "./common";

class LoginForm extends Component{

    state = { email:'', password:'', error:'', loading: false };

    // Set up Linking
    componentDidMount() {
        // Add event listener to handle OAuthLogin:// URLs
        Linking.addEventListener('url', this.handleOpenURL);
        // Launched from an external URL
        Linking.getInitialURL().then((url) => {
            if (url) {
                this.handleOpenURL({ url });
            }
        });
    }

    componentWillUnmount() {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = ({ url }) => {
        // Extract stringified user string out of the URL
        const [, user_string] = url.match(/user=([^#]+)/);
        this.setState({
            // Decode the user string and parse it into JSON
            user: JSON.parse(decodeURI(user_string))
        });

    };

    // Handle Login with Facebook button tap
    //loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

    // Handle Login with Google button tap
    loginWithGoogle = () => this.openURL('https://accounts.google.com/o/oauth2/auth?state=%7B%22csrf%22%3A+%22eyZ8U1t2RXBDQDUsYGxnXm87OF0pVFFyS0c0aV0mOjE1MDU1MTQ0MjE%3D%22%2C+%22extra%22%3A+%5B%5D%7D&redirect_uri=https%3A%2F%2Fwww.plumgroups.com%2FAuth%2Fgoogleplus%2Fcallback&prompt=select_account&response_type=code&client_id=316151578622-lr7i8rrd7ihfalk4f24eq652dkgrndb4.apps.googleusercontent.com&scope=profile+email');

    // Open URL in a browser
    openURL = (url) => {
        // Use SafariView on iOS
        Linking.openURL(url);
    };

    onButtonPress(){
        const {email, password} = this.state;
        this.setState({error:'', loading:true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                console.log(this.state.email+' '+this.state.password);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));

            });


    }

    onGoogleButtonPress(){


        console.log('Google Login Button Invoked');

    }

    onLoginSuccess(){

        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        });

    }

    onLoginFail(){
        this.setState({
            error: 'Authentication Failed',
            loading:false
        });
    }



    renderButton(){

        if(this.state.loading){

            return <Spinner size = 'large'/>;
        }
        else{
            return(
            <Button onPress ={this.onButtonPress.bind(this)}>
                Login
            </Button>
            );
        }

    }

    googleButton(){

        if(this.state.loading){
            return <Spinner size = 'large'/>;
        }
        else{
            return(
                <Button onPress = {this.loginWithGoogle.bind(this)}>
                    Google Login
                </Button>
            );
        }

    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder = 'example@email.com'
                        label = 'Email:'
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input

                        placeholder = 'password'
                        label = 'Password:'
                        secureTextEntry
                        value = {this.state.password}
                        onChangeText = {password => this.setState({password})}
                    />

                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    {this.googleButton()}
                </CardSection>

                <Text style = {styleObj.errorTextStyle}>
                    {this.state.error}
                </Text>


            </Card>
        );
    }

}

const styleObj ={

    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red',
    }
};

export default LoginForm;