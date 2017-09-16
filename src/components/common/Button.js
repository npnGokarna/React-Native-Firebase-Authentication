import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) =>{

    const{
        btnStyle,
        textStyle
    } = btnStyleObj;

    return(
        <TouchableOpacity onPress = {onPress} style = {btnStyle}>
            <Text style ={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const btnStyleObj = {
    textStyle:{
        color:'#fdffee',
        fontWeight:'800',
        alignSelf:'center',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    btnStyle:{
        flex:1,
        alignItems:'center',
        borderWidth:1,
        borderRadius:6,
        borderColor: '#5CB85C',
        marginLeft:7,
        marginRight:7,
        backgroundColor:'#56c63e',
    }
};

//cannot use export default while using index.js as in this example

export {Button};