import {  Container,
    Button,
    Content, 
    Spinner, 
    Card, 
    Text,
  } from "native-base";
import { StyleSheet, Image, View, ImageBackground, Dimensions} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { WallpaperContext } from "../context/WallpaperContext";


const wallpaperScreen = ({ navigation, route})=>{

    // Variables para obtener el alto y el ancho de la pantalla del dispositivo.
    const { width, height } = Dimensions.get("window");

    const [theWallpaper, setTheWallpaper] = useState(null);
    const [id, setid] = useState(false);

    const wallpaperContext = useContext(WallpaperContext);
    const { getWallpaperById, refreshWallpapers, setWallpaper, wallpaper } = wallpaperContext;

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
            console.log(wallpaper);
        }
    }, [code,id]);

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
    });

    const imagesWallpapers = {
        1: require("../../assets/Wallpapers/1.jpg"),
        2: require("../../assets/Wallpapers/2.jpg"),
        3: require("../../assets/Wallpapers/3.png"),
        4: require("../../assets/Wallpapers/4.jpg"),
        5: require("../../assets/Wallpapers/5.jpg"),
        6: require("../../assets/Wallpapers/6.jpg"),
        7: require("../../assets/Wallpapers/7.jpg"),
        8: require("../../assets/Wallpapers/8.jpg"),
        9: require("../../assets/Wallpapers/9.jpg"),
        10: require("../../assets/Wallpapers/10.jpg"),
        11: require("../../assets/Wallpapers/11.jpg"),
        12: require("../../assets/Wallpapers/12.jpg"),
        13: require("../../assets/Wallpapers/13.jpg"),
        14: require("../../assets/Wallpapers/14.png"),
        15: require("../../assets/Wallpapers/15.png"),
        16: require("../../assets/Wallpapers/16.jpg"),
    } 

    if(!fontsLoaded || !wallpaper){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
        );
    };

    return(
        <Container>
            <Content>
                <ImageBackground source={imagesWallpapers[wallpaper[0].code]} style={{ width: width, height: height,  alignItems: "center"}} resizeMode="cover">
                    <View style={styles.optionBar}>
                        <View style={{alignContent:"flex-start", flexDirection: "row", flex:1}}>
                            <Button style={{marginLeft:"4%", alignSelf: "center"}} transparent onPress={() => navigation.goBack()}>
                                <Image source={require("../../assets/icons/back.png")} style={styles.icon}/>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.infomationContainer}>
                    <View style={styles.tagContainer}>
                        <Image source={require("../../assets/icons/tag.png")} style={{height: 25, width: 25, marginLeft: "2%"}}/>
                        <Text style={styles.tag}> {wallpaper[0].tag}</Text>
                    </View>
                    <Text style={styles.infomation}>NOMBRE: {wallpaper[0].name} </Text>
                    <Text style={styles.infomation}>CODIGO: {wallpaper[0].code}</Text> 
                    <Text style={styles.infomation}>FECHA: {wallpaper[0].date}</Text> 
                </View>
            </Content>
        </Container>
    );
    
};



const styles = StyleSheet.create({
    optionBar: {
        width: "100%",
        height: 50,
        backgroundColor:"rgba(2, 89, 89, 0.5)",
        flexDirection: 'row',
        justifyContent:"center",
    },
    icon:{
        height: 30,
        width: 30,
    },
    button:{
        alignSelf: "center",
        paddingLeft: "14%",
    },
    infomation:{
        fontFamily: "Triforce",
        fontSize: 25,
        color: "#FFFFFF",
        marginTop: "3%",
        marginLeft: "2%",
        marginBottom: "3%"
    },
    infomationContainer:{
        backgroundColor: "rgb(2, 89, 89)",
    },
    tag:{
        fontFamily: "Triforce",
        fontSize: 20,
        color: "#FFFFFF",
    },
    tagContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: "2.5%",

    },
});

export default wallpaperScreen;

