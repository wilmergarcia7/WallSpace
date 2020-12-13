import React, { useContext } from "react";
import { StyleSheet, Image } from "react-native";
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


const Prueba = ({ navigation }) => {
  const { wallpapers } = useContext(WallpaperContext);
  
  

  console.log(wallpapers);
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
 
  
  return (
    <Container>
      <Content>
        <List>
          {wallpapers
            ? wallpapers.map((wallpaper) => (
                <ListItem key={wallpaper.id.toString()}>
                  <Text style={styles.text}>{wallpaper.name}:</Text>
                  <Card style={styles.cardItem}>
                    {console.log(wallpaper.code)}
           <Image source={imagesWallpapers[wallpaper.code]}
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
  },
});

export default Prueba;