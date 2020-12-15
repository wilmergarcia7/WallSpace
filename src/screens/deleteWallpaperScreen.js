// Importamos todo lo necesario para la creacion de la pantalla
import { Container,
    Button,
    Text,
  } from "native-base";
import { StyleSheet, Image, View} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Card } from "react-native-paper";
import { WallpaperContext } from "../context/WallpaperContext";

const deleteWallpaper = ({ navigation, route})=>{

    // Variable que se deben inicializar
    const [theWallpaper, setTheWallpaper] = useState(null);
    const [id, setid] = useState(false);

    // Variables importadas desde el contex
    const wallpaperContext = useContext(WallpaperContext);
    const { getWallpaperById, refreshWallpapers, deleteWallpaperById, wallpaper } = wallpaperContext;

    // codigo enviado de la pantalla anterior
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

    // Obtener las fuentes que se utilizaran en la pantalla.
    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
    });

    // Función creada para, mandar a llamar la fucion de eliminar
    // wallpaper al momento que el usuario preciona el boton de
    // aceptar
    const handlerDeleteWallpaper = () =>{
        deleteWallpaperById(wallpaper[0].id, refreshWallpapers);
  
        // Regresar a la pantalla de mis wallpapers
        navigation.navigate("myWallpaper", {});
      };    

    // En caso de no encontrar resultados o tardar en encontrarlos se carga 
    // la siguiente pantalla temporal.
    if(!fontsLoaded || !wallpaper){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
        );
    };

    // Creación de la pantalla
    return(
        <Container style={styles.container}>
            <Card style={styles.message}>
                <View>
                    <Text style={styles.text}>¿Está Seguro de Eliminar el Wallpaper?</Text>
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


// Estilos utilizados en la pantalla
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

