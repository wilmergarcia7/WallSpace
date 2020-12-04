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
  import { StyleSheet, Image, View, ImageBackground, Dimensions } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useFonts } from "expo-font";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import {  Menu, Divider, Provider } from 'react-native-paper';
  
  
  const { width, height } = Dimensions.get("window");
  
  const PopularScreen = ()=>{
    
    
    let [fontsLoaded] = useFonts({
      'Triforce': require("../../assets/fonts/Triforce.ttf")
    });
    

  if(!fontsLoaded){
          return(
              <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
              <Spinner color="yellow"/>
              </View>
          );
      };
  
      return(
        <Container style={styles.container}>  
        <Provider>        
            <Header style={styles.header}>
                <Text style={styles.text}>Populares</Text>     
            </Header>
            </Provider>
        </Container>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0D0D0D",
        width: width,
        height: height,
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
        marginLeft:8,
        marginRight:20,
    },
    imageWallpaper:{
        width: 120,
        height: 210,
        margin:2,
        alignSelf:"center",
    },
    content: {
        backgroundColor: "#027373",
        alignContent:"center",
        height: height,
        width: width,
    },
    viewRow:{
        backgroundColor:"#0D0D0D",
        flexDirection:"row",
        alignSelf:"center",       
    },
    cardItem:{
        backgroundColor:"#027373",
        alignItems:"center",
        borderColor:"#027373",
        padding:2,
        marginLeft:5,
        marginRight:5,
    },
    button:{
        backgroundColor:"#025159",
        borderColor: "#025159",
        width: 42,
        height: 42,
        alignSelf:"center",
    },
    item:{
        alignItems:"center",
    },
    viewMenu:{
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: "flex-start",
        position:"relative",
        fontFamily: "Triforce",
        
    },
    menuItem:{
        color:"#025159",    
    },
    menu:{
        fontFamily: "Triforce",
    }
  });
  
  export default PopularScreen; 