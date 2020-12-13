import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Fab,
  Icon,
  List,
  ListItem,
  Text,
  View,
  Card,
} from "native-base";

// Utilizar el contexto de notas
import { WallpaperContext } from "../context/WallpaperContext";
import getEnvVars from "../../environment";
import { testImages } from "../../assets/";
//import { Image } from 'react-native-elements';
import { Image } from '@shoutem/ui';

const { images, extJpg, extPng } = getEnvVars();
const Prueba = ({ navigation }) => {
  const { wallpapers } = useContext(WallpaperContext);
  
  
  // después de borrar todos los datos de la tabla ir a la pantalla useDatabase
  // y quitar las barras // para la funcion await database.setupDatabaseTableAsync();
  // presionar CTRL + S, eso para crear la tabla desde 0
  // Después ir a db y actualizar presionando CTRL + s para que se borren los datos de la tabla
  // ${wallpapers.name}
  console.log(wallpapers);
 

  
 
  
  return (
    <Container>
      <Content>
        <List>
          {wallpapers
            ? wallpapers.map((wallpaper) => (
                <ListItem key={wallpaper.id.toString()}>
                  <Text style={styles.text}>{wallpaper.name}:</Text>
                  <Card style={styles.cardItem}>
                    {console.log(wallpaper.route)}
          
           <Image source={{uri: `${wallpaper.route.toString()}`}}
                  style={styles.iconSize}/>
        </Card>
                  
                </ListItem>
              ))
            : null}
        </List>
        
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    text:{
        marginLeft:"1%",
    },
    iconSize:{
      width: 100,
      height: 100,
      alignItems: "stretch",
  },
});

export default Prueba;