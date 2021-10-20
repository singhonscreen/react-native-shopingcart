import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';

const AppButton = ({title}) => {
    return (
        
        <TouchableOpacity style={{ height: 50, backgroundColor: "#DB4700", alignItems: 'center', width:300, justifyContent: 'center' ,borderRadius:15,}}>
        <Text style={{ fontSize: 14, color: "white",  padding:15 }}>{title}</Text>
    </TouchableOpacity>
                
            
    )
}

export default AppButton

const styles = StyleSheet.create({
    parent: {
        width: 200,
        height: 35,
        backgroundColor: 'red',
         alignSelf:"center",
        margin: 15,
        borderRadius:15,
        color:"#DB4700",
    },
 
  
})
