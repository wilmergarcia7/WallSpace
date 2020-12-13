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
    CardItem,
    List,
    ListItem, 
  } from "native-base";
import { StyleSheet, Image, View, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import {  Menu, Divider, Provider } from 'react-native-paper';
import { WallpaperContext } from "../context/WallpaperContext";



const { width, height } = Dimensions.get("window");

const MainScreen = ({ navigation })=>{
    const wallpaperContext = useContext(WallpaperContext);
    const { wallpapers } = wallpaperContext;
    


    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    let [fontsLoaded] = useFonts({
        'Triforce': require("../../assets/fonts/Triforce.ttf")
      });

    const buttonSearch = () => {
        navigation.navigate("searchScreen", {});
        closeMenu();
    };

    const buttonAddWallpaper = () => {
        navigation.navigate("addWallpaperScreen", {});
        closeMenu();
    };


    const buttonPrueba = () => {
        navigation.navigate("prueba", {});
        closeMenu();
    };

    const buttonDrop = () => {
        navigation.navigate("eliminar", {});
        closeMenu();
    };

   
    if(!fontsLoaded){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Spinner color="yellow"/>
            </View>
        );
    };
    const imagesWallpapers = {
        1: require("../../assets/testImages/1.jpg"),
        2: require("../../assets/testImages/2.jpg"),
        3: require("../../assets/testImages/3.png"),
        4: require("../../assets/testImages/4.jpg"),
        5: require("../../assets/testImages/5.jpg"),
        6: require("../../assets/testImages/6.jpg"),
        7: require("../../assets/testImages/7.jpg"),
        8: require("../../assets/testImages/8.jpg"),
        9: require("../../assets/testImages/9.jpg"),
      } 
      
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
                        
                        <Menu.Item onPress={buttonDrop} title="Eliminar" style={styles.menuItem}/>
                        <Divider />
                        <Menu.Item onPress={buttonPrueba} title="Mostrar datos" style={styles.menuItem}/>
                        <Divider />
                        <Menu.Item onPress={buttonAddWallpaper} title="Añadir Wallpaper" style={styles.menuItem}/>
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
          {wallpapers
            ? wallpapers.map((wallpaper) => (
                <View key={wallpaper.id.toString()} style={styles.cardItem}>
                  <Text style={styles.textt}>{wallpaper.name}:</Text>
                  <Card style={styles.cardItem}>
                <Image source={imagesWallpapers[wallpaper.code]}
                  style={styles.iconSize}/>
                  {console.log(wallpaper.id)}
                </Card>          
                </View>
              ))
            : null}
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
    textt:{
        color:"#FFFFFF",
      fontSize:25,
      fontFamily: "Triforce",
    },
    iconSize:{
        width: 30,
        height: 30,
        alignSelf:"auto"
    },
    h1:{
        color: "#ffffff",
        fontFamily: "Triforce",
        fontSize: 18,
        marginLeft:"5%",        
    },
    view:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
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
    },
});

export default MainScreen; 
/*


            <FlatList 
        data={wallpapers}
        keyExtractor={(wallpaperw) => wallpaperw.id}
        ListEmptyComponent={<Text>¡No hay wallpapers :"c! {console.log(wallpapers)}</Text>}
        renderItem={({ wallpaperw }) =>{
            return(
                <Card>
                    
                    <Image source={imagesWallpapers[wallpaperw.code]}
                        style={styles.iconSize}
                    />
                </Card>
            )
        }}
        />
*/

        