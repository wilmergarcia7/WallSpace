import {  Container,
    Button,
    Text,
  } from "native-base";
import { StyleSheet, Image, View} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Card } from "react-native-paper";
import { WallpaperContext } from "../context/WallpaperContext";

const deleteWallpaper = ({ navigation, route})=>{

    const [theWallpaper, setTheWallpaper] = useState(null);
    const [id, setid] = useState(false);

    const wallpaperContext = useContext(WallpaperContext);
    const { getWallpaperById, refreshWallpapers, deleteWallpaperById, wallpaper } = wallpaperContext;

    const {code} = route.params;

    // Hook de efecto
    useEffect(() => {
        const getWallpapaer = () =>{
            getWallpaperById(code);
        };

        getWallpapaer();

        if(wallpaper.length){
            setTheWallpaper(wallpaper[0].code);
            setid(wallpaper[0].id);
        }
    }, [code,id]);

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
    });

    const handlerDeleteWallpaper = () =>{
        deleteWallpaperById(wallpaper[0].id, refreshWallpapers);
  
        // Regresar a la pantalla anterior
        navigation.navigate("myWallpaper", {});
      };    

    if(!fontsLoaded || !wallpaper){
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

