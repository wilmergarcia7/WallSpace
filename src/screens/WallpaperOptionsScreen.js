import {  Container,
    Content,
    Button,
    Text,
  } from "native-base";
import { StyleSheet, Image, View, ImageBackground, Dimensions} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

const wallpaperOptionsScreen = ({ navigation})=>{

    // Variables para obtener el alto y el ancho de la pantalla del dispositivo.
    const { width, height } = Dimensions.get("window");

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
    });

    if(!fontsLoaded){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
        );
    };

    return(
        <Container>
            <Content>
                {/*<ImageBackground source={require("../../assets/testImages/113021.png")} style={{ width: width, height: height,  alignItems: "center"}} resizeMode="cover">
                    <View style={styles.optionBar}>
                        <View style={{alignContent:"flex-start", flexDirection: "row", flex:1}}>
                            <Button style={{marginLeft:"8%", alignSelf: "center"}} transparent onPress={() => navigation.goBack()}>
                                <Image source={require("../../assets/icons/back.png")} style={styles.icon}/>
                            </Button>
                        </View>
                        <View style={{flexDirection: "row", marginLeft:"40%"}}>
                            <Button style={styles.button} transparent onPress={() => navigation.navigate("EditWallpaperScreen",{})}>
                                <Image source={require("../../assets/icons/edit.png")} style={styles.icon}/>
                            </Button>
                            <Button style={styles.button} transparent onPress={() => navigation.navigate("deleteWallpaperScreen",{})}>
                                <Image source={require("../../assets/icons/delete.png")} style={styles.icon}/>
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
                    <Text style={styles.infomation}>FECHA: 04/12/2020</Text> 
                </View>*/}
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
    container: {
        minHeight: 192,
      },
});

export default wallpaperOptionsScreen;

