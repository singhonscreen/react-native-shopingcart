import React from 'react'
import { StyleSheet, TextInput, View,Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { logo } from './constants';
import { FontAwesome5 } from '@expo/vector-icons';
import ListItems from './ListItems';

const ShoppingCart = () => {
    return (
        <ScrollView style={styles.main_conatiner}>
            <View style={styles.togglecontainer}>
            <FontAwesome name="bars" size={24} color="black" />
            <Image
            style={styles.tinyLogo}
            source={logo}/>
            </View>
            <View style={styles.searchcontain}>
            <FontAwesome5 name="search" style={{padding:10}} size={15} color="black" />
            <TextInput
            style={styles.searchinput}
            placeholder="Search"
        />
        <EvilIcons name="camera" size={27} style={{padding:10}} color="black" style={styles.camera} />
            </View>
            <ListItems />
        </ScrollView>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    main_conatiner:{
        flex:1,
        paddingHorizontal:10,
        marginVertical:30,
        paddingVertical:2
    },
    togglecontainer:{
        flexDirection:"row",
        
        justifyContent:"space-between",
        
    },
    tinyLogo:{
        width:20,
        height:20,
      },
      searchcontain:{
          flexDirection:"row",
          
          justifyContent:"space-between",
          marginTop:5,
          backgroundColor: '#E5E5E5',
          alignItems:"center"
      },
     searchinput:{
         width:250
     },
      camera:{
          borderLeftColor:"grey",
          borderLeftWidth:1
      },
})
