import {  Container, 
    Header, 
    Item, 
    Input,
    H1, 
    Content, 
    Text, 
    Form,
    Label,
    Button,
  } from "native-base";
  import { StyleSheet, View, Dimensions, Image } from "react-native";
  import React, { useContext, useState, useEffect } from "react";
  import * as Font from "expo-font";
  import { WallpaperContext } from "../context/WallpaperContext";

  const { width, height } = Dimensions.get("window");
  
  const editWallpaperScreen = ({navigation, route})=>{
    
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [theWallpaper, setTheWallpaper] = useState(null);
    const [id, setid] = useState(false);
    const wallpaperContext = useContext(WallpaperContext);
    const { getWallpaperById, refreshWallpapers, editWallpaper, wallpaper } = wallpaperContext;
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const {code} = route.params;

     // Cargar la fuente de manera asíncrona
     useEffect(() => {
      const loadFontsAsync = async () => {
        await Font.loadAsync({
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          'Triforce': require("../../assets/fonts/Triforce.ttf")
        }).then(() => {
          setFontsLoaded(true);
        });
      };
  
      loadFontsAsync();
    }, []);

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

    const handlerNewWallpaper = () =>{

      if(!name){
        editWallpaper(wallpaper[0]['name'], tag, id, refreshWallpapers);
      }
      if(!tag){
        editWallpaper(name, wallpaper[0]['tag'], id, refreshWallpapers);
      }
      else{
        editWallpaper(name, tag, id, refreshWallpapers);
      }

      // Regresar a mis Wallpapers
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
            <Header style={styles.header}>
              <Button style={{alignSelf: "center"}} transparent onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/icons/back.png")} style={styles.icon}/>
              </Button>
              <Text style={styles.textHeader}>Editar Wallpaper</Text>    
            </Header>
            <H1 style={styles.h1}>Ingresa los nuevos datos correspondientes:</H1>
            <Content>
              <Form style={styles.form}>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.label}>Nombre</Label>
                  <Input style={styles.input} placeholder={wallpaper[0].name} value={name} onChangeText={setName}/>
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.label}>Etiquetas</Label>
                  <Input style={styles.input} placeholder={wallpaper[0].tag} value={tag} onChangeText={setTag}/>
                </Item>
              </Form>
              <Button mode="contained" style={styles.button} onPress={handlerNewWallpaper}>
                <Text style={styles.text}>Editar</Text>
              </Button>
            </Content>
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
        flexDirection: "row",
    },
    textHeader:{
        color: "#ffffff",
        fontFamily: "Triforce",
        margin: "14%",
        fontSize: 35,
    },
    label:{
      color: "#ffffff",
      fontFamily: "Triforce",
      fontSize:25,
    },
    h1:{
      color: "#ffffff",
      fontFamily: "Triforce",
      fontSize:25,
      alignSelf:"center",
      marginTop:"5%",
    },
    item:{
      height:55,      
    },
    input:{
      color:"#FFFFFF",
      fontSize:22,
      fontFamily: "Triforce",
    },
    form:{
        flex:1,
    },
    text:{
      color:"#FFFFFF",
      fontSize:23,
      fontFamily: "Triforce",
    },
    button:{
      marginLeft:"35%",
      marginRight:"35%",
      marginTop:"15%",
      backgroundColor:"#025159",
    },
    icon:{
      height: 30,
      width: 30,
    },
    
  });
  
  export default editWallpaperScreen; 