import React from "react";
import mainScreen from "./src/screens/mainScreen";
import SearchScreen from "./src/screens/SearchScreen";
import WallpaperScreen from "./src/screens/WallpaperScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import PopularScreen from "./src/screens/PopularScreen";
import VideogamesScreen from "./src/screens/VideogamesScreen";
import AddWallpaperScreen from "./src/screens/AddWallpaperScreen";
import prueba from "./src/screens/prueba";
import  DropScreen  from "./src/screens/DropScreen";
import useDatabase from "./src/hooks/useDatabase";
import { WallpaperContextProvider } from "./src/context/WallpaperContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Crear nuestra navegación basada en stack (pilas)
const Stack = createStackNavigator();
/* options fue utilizado para ocultar en encabezado que contiene el nombre y el botón para retroceder
  optamos a que se utilicen los botones virtuales o físicos de los móviles android para regresar una pantalla
  en caso de IOS lo que se hace es deslizar la pantalla para regresar a la anterior.
*/

export default function App() {
  const isLoadingComplete = useDatabase();

  return (
    <NavigationContainer>
      <WallpaperContextProvider>
      <Stack.Navigator initialRouteName="mainScreen">
        <Stack.Screen name="mainScreen" component={mainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="searchScreen" component={SearchScreen} />
        <Stack.Screen name="favoritesScreen" component={FavoritesScreen} />
        <Stack.Screen name="popularScreen" component={PopularScreen} />
        <Stack.Screen name="gamesScreen" component={VideogamesScreen} />
        <Stack.Screen name="addWallpaperScreen" component={AddWallpaperScreen} />
        <Stack.Screen name="prueba" component={prueba} />
        <Stack.Screen name="eliminar" component={DropScreen} />
        <Stack.Screen name="WallpaperScreen" component={WallpaperScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      </WallpaperContextProvider>
    </NavigationContainer>
  )
}
