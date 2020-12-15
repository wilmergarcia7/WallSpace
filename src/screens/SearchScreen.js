import {  Container, 
  Header, 
  Item, 
  Input,
  Button,
} from "native-base";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from 'react-native-paper';


const { width, height } = Dimensions.get("window");

const nameScreen = ({ navigation })=>{

  let [fontsLoaded] = useFonts({
    'Triforce': require("../../assets/fonts/Triforce.ttf")
  });

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  
  const handlername = () =>{
    if (!name) {
      setNameError(true)
    }else
    {
      navigation.navigate("results", {name})
      // Borra la búsqueda anterior y coloca el espacio vacío
      setName("");
      setNameError(false);
    }
  };

  // Remueve el valor de error del input de búsqueda si el usuario ingresa información
     // y llama a los hooks correspondientes para obtener la información.  
     useEffect(() => {
      if (name) setNameError(false);
    }, [name]);

    // Verifica que exista la fuente de texto
    if(!fontsLoaded){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
            <Image source={require("../../assets/Wallpapers/Cucco.gif")} style={{height:110,width:110, marginLeft: "35%"}}/>
            </View>
        );
    };


    /*
        Esta función se encarga de realizar una búsqueda de una imagen en la base de datos, con el nombre muestra la imagen 
        registrada. Se enviá el parametro name a la pantalla de resultados.
    */
    return(
      <Container style={styles.container}>  
      <Provider>        
          <Header searchBar style={styles.header}>
            <Item style={styles.item}>
            <Input placeholder="Buscar" value={name} onChangeText={setName} style={nameError ? styles.inputError : null} />
            </Item>
              <Button onPress={handlername} style={styles.button} name="searchScreen">
                  <Image  source={require("../../assets/icons/search.png")}
                          style={styles.iconSize}/>
             </Button>
             
          </Header>
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
        fontFamily: "Triforce",
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
    content: {
        backgroundColor: "#027373",
        alignContent:"center",
        height: height,
        width: width,
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
        fontFamily: "Triforce",
        
    }
});

export default nameScreen; 