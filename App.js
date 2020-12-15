import React from "react";
import mainScreen from "./src/screens/mainScreen";
import SearchScreen from "./src/screens/SearchScreen";
import WallpaperScreen from "./src/screens/WallpaperScreen";
import myWallpaper from "./src/screens/myWallpaper";
import WallpaperOptionsScreen from "./src/screens/WallpaperOptionsScreen"
import EditWallpaperScreen from "./src/screens/EditWallpaperScreen";
import deleteWallpaperScreen from "./src/screens/deleteWallpaperScreen";
import AddWallpaperScreen from "./src/screens/AddWallpaperScreen";
import DropScreen  from "./src/screens/DropScreen";
import wallpaperResultsScreen from "./src/screens/wallpapersResultsScreen";
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
  // Carga la base de datos
  const isLoadingComplete = useDatabase();

  return (
    <NavigationContainer>
      <WallpaperContextProvider>
      <Stack.Navigator initialRouteName="mainScreen">
        <Stack.Screen name="mainScreen" component={mainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="WallpaperScreen" component={WallpaperScreen} options={{headerShown:false}}/>
        <Stack.Screen name="myWallpaper" component={myWallpaper} options={{headerShown:false}}/>
        <Stack.Screen name="EditWallpaperScreen" component={EditWallpaperScreen} options={{headerShown:false}}/>
        <Stack.Screen name="WallpaperOptionsScreen" component={WallpaperOptionsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="deleteWallpaperScreen" component={deleteWallpaperScreen} options={{headerShown:false}}/>
        <Stack.Screen name="searchScreen" component={SearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name="addWallpaperScreen" component={AddWallpaperScreen} options={{headerShown:false}}/>
        <Stack.Screen name="eliminar" component={DropScreen} options={{headerShown:false}}/>
        <Stack.Screen name="results" component={wallpaperResultsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      </WallpaperContextProvider>
    </NavigationContainer>
  )
}
