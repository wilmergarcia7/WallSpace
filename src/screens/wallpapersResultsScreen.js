import {  Container, 
    Header, 
    Item, 
    Input,
    Button,
    Text,
    Card,
  } from "native-base";
  import { StyleSheet, Image, View, Dimensions } from "react-native";
  import React, { useEffect, useState,useContext } from "react";
  import { useFonts } from "expo-font";
  import { Provider } from 'react-native-paper';
  import { WallpaperContext } from "../context/WallpaperContext";
  
  
  const { width, height } = Dimensions.get("window");
  
  const WallpapersResultsScreen = ({ route, navigation })=>{
  
    let [fontsLoaded] = useFonts({
      'Triforce': require("../../assets/fonts/Triforce.ttf")
    });
    
    const {name} = route.params;
    const wallpaperContext = useContext(WallpaperContext);
    const [theWallpaper, setTheWallpaper] = useState(null);
    const [id, setid] = useState(false);
    const [code,setCode]= useState(false);
    const { getWallpaperByName, wallpaper } = wallpaperContext;


    // Hook de efecto
    useEffect(() => {
        const getWallpapaer = () =>{
            getWallpaperByName(name);
        };
  
        getWallpapaer();
  
        if(wallpaper.length){
            setTheWallpaper(wallpaper[0].name);
            setCode(wallpaper[0].code);
            setid(wallpaper[0].id);
        }
    }, [name,code,id]);
    
  
  
  if(!fontsLoaded || !wallpaper){
          return(
              <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
              <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
              </View>
          );
      };

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
  
      return(
        <Container style={styles.container}>  
        <Provider>        
            <Header style={styles.header}>
            <Text style={styles.text}>Resultado:</Text>
            </Header>
                    <View>
                    <Card style={styles.card}>
                    <Image source={imagesWallpapers[wallpaper[0].code]}
                        style={styles.imageWallpaper}
                    />
                    </Card>                   
                    </View>
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
        marginLeft:8,
        marginRight:20,
    },
    imageWallpaper:{
        width: width,
        height: height,
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
        width: 42,
        height: 42,
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
  
  export default WallpapersResultsScreen; 