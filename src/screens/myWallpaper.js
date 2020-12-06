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
  
  const myWallpaperScreen = ({navigation})=>{
    
    
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
                <Text style={styles.text}>Mis Wallpapers</Text>     
            </Header>
            <Content>
                <View style={styles.viewRow}>
                    <TouchableOpacity onPress={() => navigation.navigate("EditWallpaperScreen",{})}>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/gato.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                    </TouchableOpacity>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/libros.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/librosrojos.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                </View>
                <View style={styles.viewRow}>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/naruto.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/ojoSheikah.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/zeldaTriforce.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                </View>
                <View style={styles.viewRow}>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/busqueda.png")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/biblioteca.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                    <Card style={styles.cardItem}>
                        <Image  source={require("../../assets/testImages/BOTW.jpg")} 
                                style={styles.imageWallpaper}/>
                    </Card>
                </View>
            </Content>
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
    imageWallpaper:{
        width: 120,
        height: 210,
        margin:2,
        alignSelf:"center",
    },
  });
  
  export default myWallpaperScreen; 