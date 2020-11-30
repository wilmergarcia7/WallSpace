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
import {  Menu, Divider, Provider } from 'react-native-paper';

const MainScreen = ({ navigation })=>{

    const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
      });

    const buttonSearch = () => {
        navigation.navigate("SearchScreen", {});
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
                        anchor={<Button style={styles.button} onPress={openMenu}>
                            <Image  source={require("../../assets/icons/menu-button.png")}
                                    style={styles.iconSize}/>
                                </Button>}>
                        <Menu.Item  onPress={() => {}} title="Item 1" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Item 2"/>
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Item 3"/>
                    </Menu>
                </View>
                <Text style={styles.text}>WallSpace</Text>    
                <Button onPress={buttonSearch} style={styles.button} name="searchScreen">
                    <Image  source={require("../../assets/icons/search.png")}
                            style={styles.iconSize}/>
               </Button>
            </Header>
            <Content>
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
            </Provider>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0D0D0D",
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
        alignSelf:"center",
        
    },
    item:{
        alignItems:"center",
    },
    menuItem:{
        zIndex:0,
    },
    viewMenu:{
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: "flex-start",
        position:"relative",
        }
});

export default MainScreen; 
