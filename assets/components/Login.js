import React, { Component } from 'react'

import { ImageBackground,TextInput, StyleSheet, View,Image,Text, SafeAreaView, TouchableOpacity, Button} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { image } from "./constants";
import { logo } from "./constants";
import Constants from 'expo-constants';

const Login = ({navigation}) => {
    const [mailChange, setMailChange ] = React.useState("");
    const [passChange, setPassChange] = React.useState("");


    const goToShop = ()=>{
      if(mailChange==="" || passChange===""){
          alert('please fill the values')
      }else if(mailChange.length < 3 || passChange.length < 5){
          alert('Credentials are wrong')
      }else{

          navigation.navigate('ShoppingCart')
      }

  }
    
    return (

        <SafeAreaView style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.logocontain}>
        <Image
        style={styles.tinyLogo}
        source={logo}/>
        <Text>EKART</Text>
        </View>
        <View>
            <View style={styles.input_container}>
            <View style={{height:150, marginBottom:20}}>
            <View style={styles.input_contain} >
            <AntDesign name="mail" size={15} color="black" style={{paddingBottom:12}} />
            <TextInput
            style={styles.input}
            onChangeText={(mailChange)=>{setMailChange(mailChange)}}
            defaultValue={mailChange}
            placeholder="Email"    
                        />
                        </View>
                        <View style={styles.input_contain} >
                        <EvilIcons name="lock" size={24} color="black" style={{paddingBottom:12}} />
                        <TextInput
                        style={styles.input}
                        onChangeText={(passChange)=>{setPassChange(passChange)}}
            defaultValue={passChange}
                        placeholder="Password"
                        />
                        </View>
                        <View style={styles.forget}>
                        <Text style={{fontSize:10}}>Remember me</Text>
                        <Text style={{fontSize:10}}> forget Password?</Text>
                        </View>
                        </View>
                        <TouchableOpacity style={{ height: 35, width:170, backgroundColor: "#DB4700", alignItems: 'center', justifyContent: 'center' ,borderRadius:15,}}>
                        <Text style={{ fontSize: 14, color: "white",  padding:15 }} onPress={goToShop} >Login</Text>
                        </TouchableOpacity>
                        
                <Text>Don't have an account? Signup</Text>
            </View>
        </View>
      </ImageBackground> 
        </SafeAreaView>

        
    )

}
const styles = StyleSheet.create({
    input_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        color: "white",
        fontSize: 15,
        lineHeight: 8,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#ffffffb0",
        width: 288,
        height: 300,
        borderRadius: 35,
    },
    forget:{
        flexDirection:"row",
        width:200,
        fontSize:12,
        paddingLeft:4,
        paddingRight:4,
        justifyContent:"space-between"
    },
    input_contain:
        {
            flex:1, flexDirection:"row",
        justifyContent: 'flex-start',
        borderBottomWidth: 1, 
        alignItems:"flex-end" ,
        
    }
    ,
   
    input: {
        height: 50,
        width:150,
        marginBottom: -5,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: -5,
        paddingLeft: 5,
        borderColor: "#3C3C3C",
        borderBottomColor: "#3C3C3C",
        borderWidth:0,
        
        
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      },
      image: {
        flex: 1,
        justifyContent: "center",
        position:"relative"
      },
      tinyLogo:{
        zIndex:2,
        width:50,
        height:50,
      },
      logocontain:{
        position:"absolute",
        top:5,
        right:5,
        textAlign:"center"
      }
})

export default Login
