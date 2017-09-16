import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({ size }) =>{

    return(
        <View style = {styleObj.spinnerStyle}>
            <ActivityIndicator size = { size || 'small'}/>
        </View>
    );

};

const styleObj = {
    spinnerStyle:{

        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }

};

export {Spinner};