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
  import { StyleSheet, View, Dimensions } from "react-native";
  import React, { useContext, useState } from "react";
  import { useFonts } from "expo-font";
  import { Button} from 'react-native-paper';
  import { WallpaperContext } from "../context/WallpaperContext";

  const { width, height } = Dimensions.get("window");
  
  const editWallpaperScreen = ({navigation})=>{
    
    const [name, setName] = useState("");
    const [route, setRoute] = useState("");
    const [tag, setTag] = useState("");
    const [resolution, setResolution] = useState("");
    const wallpaperContext = useContext(WallpaperContext);
    const { refreshWallpapers, editWallpaper } = wallpaperContext;

    const { wallpapers } = useContext(WallpaperContext);

    console.log(wallpapers);

    let [fontsLoaded] = useFonts({
      'Triforce': require("../../assets/fonts/Triforce.ttf")
      
    });

    const id=20;

    const handlerNewWallpaper = () =>{

      if(!name){
        console.log("1");
        editWallpaper(wallpapers[0]['name'], route, tag, resolution, id, refreshWallpapers);
      }
      if(!route){
        console.log("1");
        editWallpaper(name, wallpapers[0]['route'], tag, resolution, id, refreshWallpapers);
      }
      if(!tag){
        console.log("1");
        editWallpaper(name, route, wallpapers[0]['tag'], resolution, id, refreshWallpapers);
      }
      if(!resolution){
        console.log("1");
        editWallpaper(name, route, tag, wallpapers[0]['resolution'], id, refreshWallpapers);
      }
      //editWallpaper(name, route, tag, resolution, id, refreshWallpapers);

      // Regresar a la pantalla anterior
      navigation.goBack();
    };    
 
  
  if(!fontsLoaded || !wallpapers){
          return(
              <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
              <Spinner color="yellow"/>
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
            {wallpapers
            ? wallpapers.map((wallpaper) => (
              <Form style={styles.form} key={wallpaper.id.toString()}>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.label}>Nombre</Label>
                  <Input style={styles.input} placeholder={wallpaper.name} value={name} onChangeText={setName} defaultValue={wallpaper.name}/>
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.label}>Ruta</Label>
                  <Input style={styles.input} placeholder={wallpaper.route} value={route} onChangeText={setRoute} defaultValue={wallpaper.route}/>
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.label}>Etiquetas</Label>
                  <Input style={styles.input} placeholder={wallpaper.tag} value={tag} onChangeText={setTag}/>
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.label}>Resolición</Label>
                  <Input style={styles.input} placeholder={wallpaper.resolution} value={resolution} onChangeText={setResolution}/>
                </Item>
              </Form>
              ))
              : null}
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