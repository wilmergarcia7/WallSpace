import {  Container, 
    Header, 
    Item, 
    Input, 
    Icon, 
    H1, 
    H2, 
    Content, 
    Spinner, 
    Card, 
    Text, 
    CardItem,
    Form,
    Label 
  } from "native-base";
  import { StyleSheet, Image, View, ImageBackground, Dimensions } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import { useFonts } from "expo-font";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import {  Button} from 'react-native-paper';
  import { WallpaperContext } from "../context/WallpaperContext";
  
  const { width, height } = Dimensions.get("window");
  
  const DropScreen = ({navigation})=>{
    
    const wallpaperContext = useContext(WallpaperContext);
    const { wallpapers, dropWallpaper } = wallpaperContext;


    let [fontsLoaded] = useFonts({
      'Triforce': require("../../assets/fonts/Triforce.ttf")
      
    });

    const handlerNewWallpaper = () =>{
        dropWallpaper();

      // Regresar a la pantalla anterior
      navigation.goBack();
    };    
 
  
  if(!fontsLoaded){
          return(
              <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
              <Spinner color="yellow"/>
              </View>
          );
      };
  
      return(
        <Container style={styles.container}>               
            <Header style={styles.header}>
                <Text style={styles.textHeader}>Eliminar todos los Wallpaper</Text>    
            </Header>
            <H1 style={styles.h1}>Se eliminarn todos los wallpapers</H1>
            <Content>
            <Button mode="contained" style={styles.button} onPress={handlerNewWallpaper}>
              <Text style={styles.text}>ELIMINAR</Text>
              </Button>
            </Content>
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
    textHeader:{
        color: "#ffffff",
        fontFamily: "Triforce",
        fontSize: 35,
    },
    label:{
      color: "#ffffff",
      fontFamily: "Triforce",
      fontSize:25,
    },
    h1:{
      color: "#ffffff",
      fontFamily: "Triforce",
      fontSize:28,
      alignSelf:"center",
      marginTop:"5%",
    },
    item:{
      height:55,      
    },
    input:{
      color:"#FFFFFF",
      fontSize:25,
      fontFamily: "Triforce",
      
    },
    form:{
        flex:1,
    },
    text:{
      color:"#FFFFFF",
      fontSize:25,
      fontFamily: "Triforce",
    },
    button:{
      marginLeft:"25%",
      marginRight:"25%",
      marginTop:"8%",
      backgroundColor:"#025159",
    }
    
  });
  
  export default DropScreen; 