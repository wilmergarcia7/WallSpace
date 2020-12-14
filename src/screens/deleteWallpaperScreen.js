import {  Container,
    Content,
    Button,
    Text,
  } from "native-base";
import { StyleSheet, Image, View, ImageBackground, Dimensions} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Card } from "react-native-paper";
import { WallpaperContext } from "../context/WallpaperContext";

const deleteWallpaper = ({ navigation, id})=>{

    // Variables para obtener el alto y el ancho de la pantalla del dispositivo.
    const { width, height } = Dimensions.get("window");

    const wallpaperContext = useContext(WallpaperContext);
    const { deleteWallpaperById, refreshWallpapers } = wallpaperContext;

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
    });

    const handlerDeleteWallpaper = () =>{
        const id = 19;
        deleteWallpaperById(id, refreshWallpapers);
  
        // Regresar a la pantalla anterior
        navigation.goBack();
      };    

    if(!fontsLoaded){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
        );
    };

    return(
        <Container style={styles.container}>
            <Card style={styles.message}>
                <View>
                    <Text style={styles.text}>Esta Seguro de Eliminar la Wallpaper</Text>
                </View>
                <View style={{flexDirection:"row", alignSelf: "center" }}>
                    <Button style={styles.button} transparent onPress={handlerDeleteWallpaper}>
                        <Image source={require("../../assets/icons/accept.png")} style={styles.icon}/>
                    </Button>
                    <Button style={styles.button} transparent onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/icons/close.png")} style={styles.icon}/>
                    </Button>
                </View>
            </Card>
        </Container>
    );
    
};



const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        backgroundColor:"#025159",
    },
    message: {
        alignItems: "center",
        backgroundColor: "#A65644",
    },
    text: {
        fontFamily: "Triforce",
        fontSize: 40,
        color: "#FFF",
        textAlign: "center",
        paddingBottom: "4%",
    },
    icon:{
        height: 50,
        width: 50,
    },
    button:{
        textAlign: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingBottom: "3%",
    },
});

export default deleteWallpaper;

