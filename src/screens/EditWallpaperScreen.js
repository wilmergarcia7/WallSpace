import {  Container, 
    Header, 
    Item, 
    Input, 
    Icon, 
    H1, 
    H2, 
    Content, 
    Spinner, 
    Card, 
    Text, 
    CardItem,
    Form,
    Label,
    ListItem,
  } from "native-base";
  import { StyleSheet, View, Dimensions, Image } from "react-native";
  import React, { useContext, useState, useEffect } from "react";
  import { useFonts } from "expo-font";
  import { Button} from 'react-native-paper';
  import { WallpaperContext } from "../context/WallpaperContext";

  const { width, height } = Dimensions.get("window");
  
  const editWallpaperScreen = ({navigation, route})=>{
    
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [theWallpaper, setTheWallpaper] = useState(null);
    const [id, setid] = useState(false);
    const wallpaperContext = useContext(WallpaperContext);
    const { getWallpaperById, refreshWallpapers, editWallpaper, wallpaper } = wallpaperContext;

    const {code} = route.params;

    let [fontsLoaded] = useFonts({
      'Triforce': require("../../assets/fonts/Triforce.ttf")
      
    });

    // Hook de efecto
    useEffect(() => {
      const getWallpapaer = () =>{
          getWallpaperById(code);
      };

      getWallpapaer();

      if(wallpaper.length){
          setTheWallpaper(wallpaper[0].code);
          setid(wallpaper[0].id);
          console.log(theWallpaper);
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
    },
    textHeader:{
        color: "#ffffff",
        fontFamily: "Triforce",
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
      fontSize:25,
      fontFamily: "Triforce",
    },
    button:{
      marginLeft:"25%",
      marginRight:"25%",
      marginTop:"15%",
      backgroundColor:"#025159",
    }
    
  });
  
  export default editWallpaperScreen; 