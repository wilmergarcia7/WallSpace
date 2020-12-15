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
    Card 
  } from "native-base";
  import { StyleSheet, Image, View, ImageBackground, Dimensions, FlatList,SafeAreaView } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import { WallpaperContext } from "../context/WallpaperContext";
  import * as Font from "expo-font";
  
  const { width, height } = Dimensions.get("window");
  
  const AddWallpaperScreen = ({navigation})=>{
    
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [tag, setTag] = useState("");
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [enableSave, setEnableSave] = useState(true);
    const wallpaperContext = useContext(WallpaperContext);
    const { addNewWallpaper, refreshWallpapers } = wallpaperContext;


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


    useEffect(() => {
      if (name&&code&&tag) {
      setEnableSave(false);
      }
      else setEnableSave(true);
    }, [name, code, tag]);


    const handlerNewWallpaper = async () =>{
      
      if (name&&code&&tag){     
        await addNewWallpaper(name, code, tag, refreshWallpapers);

        // Regresar a la pantalla anterior
        navigation.goBack();
      } else {
        setErrorWallpaper(true);
      }
    }; 
      
      const imagesWallpapers = [
        {
          id: 1,
          imageRoute: require("../../assets/Wallpapers/1.jpg"),
        },
        {
          id: 2,
          imageRoute: require("../../assets/Wallpapers/2.jpg"),
        },
        {
          id: 3,
          imageRoute: require("../../assets/Wallpapers/3.png"),
        },
        {
          id: 4,
          imageRoute: require("../../assets/Wallpapers/4.jpg"),
        },
        {
          id: 5,
          imageRoute: require("../../assets/Wallpapers/5.jpg"),
        },
        {
          id: 6,
          imageRoute: require("../../assets/Wallpapers/6.jpg"),
        },
        {
          id: 7,
          imageRoute: require("../../assets/Wallpapers/7.jpg"),
        },
        {
          id: 8,
          imageRoute: require("../../assets/Wallpapers/8.jpg"),
        },
        {
          id: 9,
          imageRoute: require("../../assets/Wallpapers/9.jpg"),
        },
        {
          id: 10,
          imageRoute: require("../../assets/Wallpapers/10.jpg"),
        },
        {
          id: 11,
          imageRoute: require("../../assets/Wallpapers/11.jpg"),
        },
        {
          id: 12,
          imageRoute: require("../../assets/Wallpapers/12.jpg"),
        },
        {
          id: 13,
          imageRoute: require("../../assets/Wallpapers/13.jpg"),
        },
        {
          id: 14,
          imageRoute: require("../../assets/Wallpapers/14.png"),
        },
        {
          id: 15,
          imageRoute: require("../../assets/Wallpapers/15.png"),
        },
        {
          id: 16,
          imageRoute: require("../../assets/Wallpapers/16.jpg"),
        }
    
      ]
       
 
  if(!fontsLoaded){
          return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
          );
   };
  
        return(
        <Container style={styles.container}>               
            <Header style={styles.header}>
              <Button transparent onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/icons/back.png")} style={styles.icon}/>
              </Button>
              <Text style={styles.textHeader}>Añadir Wallpaper</Text>    
            </Header>
            <SafeAreaView style={styles.container}>
            <FlatList
         
        data={imagesWallpapers}
        numColumns={3}
        columnWrapperStyle={{justifyContent:'space-between'}}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>¡No hay wallpapers :"c!</Text>}
        renderItem={({ item }) =>{
            return(
                
                    <Card style={styles.card}>
                    <Image source={item.imageRoute}
                        style={styles.imageWallpaper}
                    />
                    <Text style={styles.text}>Código: {item.id}</Text>
                    </Card>                    
            )
        }}
        />
        </SafeAreaView>
            <H1 style={styles.textInstruction}>Elija una imagen de la arriba, escriba un nombre, 
                                  escriba el código de la imagen seleccionada, y Etiquetas
                                  que representen a la imagen.</H1>
            <Content>
            <Form style={styles.form}>
           
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Nombre</Label>
              <Input style={styles.input} value={name} onChangeText={setName}/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Código</Label>
              <Input style={styles.input} value={code} onChangeText={setCode}/>
            </Item>
           
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Etiquetas</Label>
              <Input style={styles.input} value={tag} onChangeText={setTag}/>
            </Item>
        
            </Form>
            <Button style={enableSave ? styles.buttonError : styles.button} 
                    onPress={handlerNewWallpaper}
                    disabled={enableSave}
                    >
              <Text style={styles.text}>Agregar</Text>
              </Button>
            </Content>
            
        </Container>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0D0D0D",
        flex: 1,
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
        marginLeft: "19%",
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
      fontSize:28,
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
      fontFamily: "Triforce",
      alignSelf: "center",
      marginTop: 10,
      backgroundColor:"#025159",
      
    },
    buttonError:{
      fontFamily: "Triforce",
      alignSelf: "center",
      marginTop: 10,
    },
    icon:{
      height: 30,
      width: 30,
    },
    imageWallpaper:{
      width: 90,
      height: 110,
      margin:2,
      alignSelf:"center",
  },
  card:{
    backgroundColor:"#027373",
    borderColor:"#027373",
  },
  textInstruction:{
    color:"#FFFFFF",
    fontSize:20,
    fontFamily: "Triforce",
  },
  });
  
  export default AddWallpaperScreen; 