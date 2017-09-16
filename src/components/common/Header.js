// import librarie for making a component
import React from 'react';
import { Text, View } from 'react-native';


//make a component
const Header = (props) =>{

    const{ textStyle, viewStyle } = styles;

    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};



//make new object for styling each individual component
// purple color: #692058
const styles = {
    viewStyle: {
        backgroundColor: '#691F58',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#454F55',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.6,
        elevation: 2,
        position:'relative'
    },
    textStyle: {
        fontSize: 20,
        color:'#ffffff'
    }
};


//make the componenet available to other parts of the app
export {Header};
