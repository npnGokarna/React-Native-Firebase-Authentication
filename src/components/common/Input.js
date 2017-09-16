import React from 'react';
import {View, TextInput, Text} from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) =>{

    const {inputStyle, labelStyle, containerStyle} = styleObj;

    return(
        <View style = {containerStyle}>
            <Text style = {labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                secureTextEntry = {secureTextEntry}
                placeholder = {placeholder}
                autoCorrect = {false}
                value = {value}
                onChangeText = {onChangeText}
            />
        </View>
    );


};
const styleObj = {
    inputStyle:{
        backgroundColor: '#ffffff',
        borderRadius: 4,
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        lineHeight: 23,
        flex:2,
        height:30
    },
    labelStyle:{
        color:"#ffffff",
        fontSize:18,
        paddingLeft: 5,
        flex:1

    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
};


export {Input};