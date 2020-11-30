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

const MainScreen = ({ navigation })=>{

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
            <Header style={styles.header}>
                <Button style={styles.button}>
                    <Image  source={require("../../assets/icons/menu-button.png")}
                        style={styles.iconSize}/>
                </Button>    
                <Text style={styles.text}>WallSpace</Text>
                <Button style={styles.button} onPress={()=> navigation.navigate("searchScreen")}>
                    <Image  source={require("../../assets/icons/search.png")}
                        style={styles.iconSize}/>
                </Button>                
            </Header>
            <Content >
            <View style={styles.view}>
                <H1 style={styles.h1}>CATEGORIAS</H1>
                <H1 style={styles.h1}>INICIO</H1>
                <H1 style={styles.h1}>POPULARES</H1>
            </View>
            <Card style={styles.card}>
                <Card style={styles.cardItem}>
                    <Image  source={require("../../assets/testImages/gato.jpg")} 
                            style={styles.imageWallpaper}/>
                </Card>
                <Card style={styles.cardItem}>
                    <Image  source={require("../../assets/testImages/libros.jpg")} 
                            style={styles.imageWallpaper}/>
                </Card>
                <Card style={styles.cardItem}>
                    <Image  source={require("../../assets/testImages/librosrojos.jpg")} 
                            style={styles.imageWallpaper}/>
                </Card>
            </Card>
            <Card style={styles.card}>
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
            </Card>
            <Card style={styles.card}>
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
            </Card>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0D0D0D",
    },
    header:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#025159",
        margin:"7%",
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
    }
});

export default MainScreen; 
