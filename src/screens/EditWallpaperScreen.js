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
    Label 
  } from "native-base";
  import { StyleSheet, Image, View, ImageBackground, Dimensions } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import { useFonts } from "expo-font";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import {  Button} from 'react-native-paper';
  import { WallpaperContext } from "../context/WallpaperContext";
  
  const { width, height } = Dimensions.get("window");
  
  const editWallpaperScreen = ({navigation})=>{
    
    const [name, setName] = useState("");
    const [route, setRoute] = useState("");
    const [tag, setTag] = useState("");
    const [resolution, setResolution] = useState("");
    const wallpaperContext = useContext(WallpaperContext);
    const { wallpapers, addNewWallpaper, refreshWallpapers } = wallpaperContext;


    let [fontsLoaded] = useFonts({
      'Triforce': require("../../assets/fonts/Triforce.ttf")
      
    });

    const handlerNewWallpaper = () =>{
      const id=19; // Este id debe cambiar, si es el mismo provoca error. añadir +1 
                    
                    // Después de agregar los datos, ir a bd.js y actualizar con CTRL + S
                    // de esa forma se actualizan los datos en la pantalla de mostrar info del inicio
                    // autoincremente cuando se realice la inserción
                    // Buscar altrenativa para que la bd se actualice sin necesidad de reiniciar
                    // la app
      addNewWallpaper(id, name, route, tag, resolution, refreshWallpapers);

      // Regresar a la pantalla anterior
      navigation.goBack();
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
            <Header style={styles.header}>
                <Text style={styles.textHeader}>Editar Wallpaper</Text>    
            </Header>
            <H1 style={styles.h1}>Ingresa los nuevos datos correspondientes:</H1>
            <Content>
            <Form style={styles.form}>
           
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Nombre</Label>
              <Input style={styles.input} value={name} onChangeText={setName}/>
            </Item>
            
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Ruta</Label>
              <Input style={styles.input} value={route} onChangeText={setRoute}/>
            </Item>
           
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Etiquetas</Label>
              <Input style={styles.input} value={tag} onChangeText={setTag}/>
            </Item>
           
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Resolución</Label>
              <Input style={styles.input} value={resolution} onChangeText={setResolution}/>
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
      fontSize:25,
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
      marginTop:"8%",
      backgroundColor:"#025159",
    }
    
  });
  
  export default editWallpaperScreen; 