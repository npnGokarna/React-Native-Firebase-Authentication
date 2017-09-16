import React from 'react';
import {View, Text} from 'react-native';

const Card = (props) =>{

    return(

        <View style = {styleObj.containerStyle}>
            {props.children}
        </View>

    );

};


const styleObj = {

    containerStyle: {
        borderWidth:1,
        borderRadius:4,
        borderColor: '#ffffff',
        borderBottomWidth: 0,
        shadowColor:'#ffffff',
        shadowOffset:{ width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        marginLeft:5,
        marginRight:5,
        marginTop:10

    }

};

export {Card};