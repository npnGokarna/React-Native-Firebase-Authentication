import React, { Component } from 'react';
import {View,
    Text,
    Linking,
    Platform
} from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state = {loggedIn:null};



    componentWillMount(){


        firebase.initializeApp({

            apiKey: "AIzaSyDarUfwkek7YP_GAPl-KGqXKiN-BhNeWVY",
            authDomain: "auth-d7ba7.firebaseapp.com",
            databaseURL: "https://auth-d7ba7.firebaseio.com",
            projectId: "auth-d7ba7",
            storageBucket: "auth-d7ba7.appspot.com",
            messagingSenderId: "940653305019"

        });

        firebase.auth().onAuthStateChanged((user) =>{

            if (user){
                this.setState({ loggedIn:true });
            } else {
                this.setState({ loggedIn:false });
            }

        });

    }




    renderContent(){

        switch(this.state.loggedIn){
            case true:
                return(
                    <Button
                        onPress={()=> firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
                break;
            case false:
                return <LoginForm />;
                break;
            default:
                return <Spinner size ='large'/>;

        }



    }

    render(){

        return(
            <View>
                <Header headerText = 'Authentication'/>
                {this.renderContent()}
            </View>
        );

    }


}

export default App;