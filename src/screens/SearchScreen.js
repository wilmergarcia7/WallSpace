import {  Container, 
    Header, 
    Item, 
    Input, 
    Icon, 
    Button,
    H1, 
    H2, 
    Content, 
    Spinner, 
    Card, 
    Text, 
    CardItem 
  } from "native-base";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import {  Menu, Divider, Provider } from 'react-native-paper';

const SearchScreen = ()=>{
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);




return(
  <Provider>
  <View
    style={{
      paddingTop: 0,
      flexDirection: 'row',
      justifyContent: "flex-start",
    }}>
    <Menu
      
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Button style={styles.button} onPress={openMenu}><Image  source={require("../../assets/icons/search.png")}
      style={styles.iconSize}/></Button>}>
      <Menu.Item onPress={() => {}} title="Item 1" />
      <Menu.Item onPress={() => {}} title="Item 2" />
      <Divider />
      <Menu.Item onPress={() => {}} title="Item 3" />
    </Menu>
  </View>
</Provider>
)
};

const styles = StyleSheet.create({
  container: {
      backgroundColor:"#0D0D0D",
  },
  header:{     
      alignItems: "center",
      backgroundColor: "#025159",
      position:"relative",
  },
  text:{
      color: "#ffffff",
      fontFamily: "Triforce",
      margin: "18%",
      fontSize: 35,
  },
  iconSize:{
      width: 30,
      height: 30,
      alignSelf:"auto"
  },
  h1:{
      color: "#ffffff",
      fontFamily: "Triforce",
      fontSize: 17,
      marginLeft:"6%",
      marginRight:"6%",
  },
  view:{
      flex:1,
      flexDirection:"row",
      alignSelf:"center",
      margin:"1%",
  },
  imageWallpaper:{
      width: 110,
      height: 200,
      margin:2,
      alignSelf:"center",
  },
  content: {
      backgroundColor: "#027373",
  },
  card:{
      backgroundColor:"#0D0D0D",
      flex:3,
      flexDirection:"row",
      alignItems:"stretch",
      borderColor:"#0D0D0D",        
  },
  cardItem:{
      backgroundColor:"#027373",
      alignItems:"center",
      borderColor:"#027373",        
  },
  button:{
      backgroundColor:"#025159",
      borderColor: "#025159",
      width: 32,
      height: 32,
      alignSelf:"center",
      
  },
  item:{
      alignItems:"center"
  }
});

export default SearchScreen; 