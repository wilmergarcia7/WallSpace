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

const MainScreen = ({ navigation })=>{

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
      });

    const buttonPopular = () => {
        navigation.navigate("popularScreen", {});
        closeMenu();
    };
    
    const buttonFavorites = () => {
        navigation.navigate("favoritesScreen", {});
        closeMenu();
    };

    const buttonVideogames = () => {
        navigation.navigate("gamesScreen", {});
        closeMenu();
    };

    const buttonSearch = () => {
        navigation.navigate("searchScreen", {});
        closeMenu();
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
        <Provider>        
            <Header style={styles.header}>
                <View style={styles.viewMenu}>
                    <Menu   
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                                <Button style={styles.button} onPress={openMenu}>
                                <Image  source={require("../../assets/icons/menu-button.png")}
                                        style={styles.iconSize}/>
                                </Button>}>
                        
                        <Menu.Item  onPress={buttonPopular} title="Populares" style={styles.menuItem}/>
                        <Divider />
                        <Menu.Item onPress={buttonFavorites} title="Favoritos" style={styles.menuItem}/>
                        <Divider />
                        <Menu.Item onPress={buttonVideogames} title="Videojuegos" style={styles.menuItem}/>
                    </Menu>
                </View>
                <Text style={styles.text}>WallSpace</Text>    
                <Button onPress={buttonSearch} style={styles.button} name="searchScreen">
                    <Image  source={require("../../assets/icons/search.png")}
                            style={styles.iconSize}/>
               </Button>
            </Header>
            <Content style={styles.provider}>
            <View style={styles.view}>
                <H1 style={styles.h1}>FAVORITOS</H1>
                <H1 style={styles.h1}>INICIO</H1>
                <H1 style={styles.h1}>POPULARES</H1>
            </View>
            <View style={styles.viewRow}>
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
    },
    imageWallpaper:{
        width: 120,
        height: 210,
        margin:2,
        alignSelf:"center",
    },
    content: {
        backgroundColor: "#027373",
        alignContent:"center",
        height: height,
        width: width,
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
    button:{
        backgroundColor:"#025159",
        borderColor: "#025159",
        width: 32,
        height: 32,
        alignSelf:"center",
    },
    item:{
        alignItems:"center",
    },
    viewMenu:{
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: "flex-start",
        position:"relative",
        fontFamily: "Triforce",
        
    },
    menuItem:{
        color:"#025159",    
    },
    menu:{
        fontFamily: "Triforce",
    }
});

export default MainScreen; 
