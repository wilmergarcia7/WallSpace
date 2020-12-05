import {  Container,
    Button,
    Content, 
    Spinner, 
    Card, 
    Text,
    Link,
  } from "native-base";
import { StyleSheet, Image, View, ImageBackground, Dimensions} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";


const wallpaperScreen = ({ navigation })=>{

    // Variables para obtener el alto y el ancho de la pantalla del dispositivo.
    const { width, height } = Dimensions.get("window");

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
    });

    if(!fontsLoaded){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/testImages/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
        );
    };

    return(
        <Container>
            <Content>
                <ImageBackground source={require("../../assets/testImages/113021.png")} style={{ width: width, height: height, justifyContent: "flex-end", alignItems: "center"}}>
                    <View style={styles.optionBar}>
                        <View style={{flexDirection: 'row'}}>
                            <Button style={styles.button} transparent>
                                <Image source={require("../../assets/icons/view.png")} style={styles.icono}/>
                            </Button>
                            <Button style={styles.button} transparent>
                                <Image source={require("../../assets/icons/download.png")} style={styles.icono}/>
                            </Button>
                            <Button style={styles.button} transparent>
                                <Image source={require("../../assets/icons/heart.png")} style={styles.icono}/>
                            </Button>
                        </View>
                    </View>
                </ImageBackground> 
                <View style={styles.infomationContainer}>
                    <View style={styles.tagContainer}>
                        <Image source={require("../../assets/icons/tag.png")} style={{height: 25, width: 25, marginLeft: "2%"}}/>
                        <Text style={styles.tag}> Zelda, Nintendo, Juegos, Link, Trifuerza</Text>
                    </View>
                    <Text style={styles.infomation}>NOMBRE: Zelda </Text>
                    <Text style={styles.infomation}>AUTOR: Wilmer Garcia</Text> 
                    <Text style={styles.infomation}>RESOLUCION: 1080x1920</Text> 
                    <Text style={styles.infomation}>FECHA: 04/12/2020</Text> 
                </View>
            </Content>
        </Container>
    );
    
};



const styles = StyleSheet.create({
    optionBar: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"rgba(2, 89, 89, 0.5)",
    },
    icono:{
        height: 35,
        width: 35,
    },
    button:{
        alignSelf: "center",
        paddingLeft: "11%",
        paddingRight: "11%",
    },
    infomation:{
        fontFamily: "Triforce",
        fontSize: 25,
        color: "#FFFFFF",
        marginTop: "3%",
        marginLeft: "2%",
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

