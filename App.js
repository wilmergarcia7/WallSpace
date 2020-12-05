import React from "react";
import mainScreen from "./src/screens/mainScreen";
import SearchScreen from "./src/screens/SearchScreen";
import WallpaperScreen from "./src/screens/WallpaperScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Crear nuestra navegación basada en stack (pilas)
const Stack = createStackNavigator();
/* options fue utilizado para ocultar en encabezado que contiene el nombre y el botón para retroceder
  optamos a que se utilicen los botones virtuales o físicos de los móviles android para regresar una pantalla
  en caso de IOS lo que se hace es deslizar la pantalla para regresar a la anterior.
*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WallpaperScreen">
        <Stack.Screen name="mainScreen" component={mainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="WallpaperScreen" component={WallpaperScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
