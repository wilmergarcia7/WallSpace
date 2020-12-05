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
  
  const FavoritesScreen = ()=>{
    

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
                <Text style={styles.text}>Favoritos</Text>    
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
  });
  
  export default FavoritesScreen; 