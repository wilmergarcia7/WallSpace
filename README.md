# WallSpace
Es una aplicación que implementa un sistema para agregar, buscar, modificar y eliminar wallpapers, que se encuentran
en la galería de la aplicación en la pantalla de añadir.

# Creadores
<h1 align="center" fontSize=30px> <strong>Wilmer Josué García</strong> </h1>
<h1 align="center"> <strong>Christian Orlando Mejía</strong> </h1>

# Icono 
<p align="center"><img src="assets/icon.png" height=400></p><br>

# Splash
<p align="center"><img src="assets/splash.png" height=500></p><br>

# Imágenes del proyecto
# ¿Cómo funciona?
- Al ingresar a la aplicación se encuentra con la pantalla principal que muestra los últimos wallpapers que fueron añadidos.
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326348501549076/Screenshot_20201215-023332_Expo.jpg" height=400></p><br>

 -Se encuentra un menú en la parte superior izquierda, que redirige a otras pantallas que se encargan de añadir wallpaper y mis wallpapers.
 <p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326413403947048/Screenshot_20201215-023900_Expo.jpg" height=400></p><br>

- <strong>Pantalla de añadir</strong> <br>
  Se encuentran imágenes en el sistema que pueden ser añadidas utilizando el código que tienen debajo.<br>
  <p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326566815334400/Screenshot_20201215-024528_Expo.jpg" height=400></p><br>
  
- <strong>Pantalla Mis wallpapers</strong> <br>
La pantalla de mis wallpapers contiene las imágenes que fueron agregadas a la base de datos. <br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788348826623672370/Screenshot_20201215-041617_Expo.jpg" height=400></p><br>
Al presionar una imagen ofrece información sobre ella que contiene la base de datos. <br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788348826276724746/Screenshot_20201215-041632_Expo.jpg" height=400></p><br>

- <strong>Pantalla de eliminar</strong> <br>
  Elimina la imagen seleccionada por el usuario segun el id que contenga en la base. Debe seleccionar el icono del basurero.<br>  
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326462214111252/Screenshot_20201215-023917_Expo.jpg" height=400></p><br>

Se habilita una pantalla que le pregunta si realmente desea eliminar el wallpaper.<br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326505032843284/Screenshot_20201215-024250_Expo.jpg" height=400></p><br>

- <strong>Pantalla de editar</strong> <br>
Edita la imagen que seleccione el usuario segun el id que contenga en la base. Debe seleccionar el icono de lápiz y papel.<br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326462214111252/Screenshot_20201215-023917_Expo.jpg" height=400></p><br>
  
<p align="center"><strong>*Realizando edición </strong> 
 Para realizar la edición puede observar los datos que estaban anteriormente, solo puede modificar el nombre y las etiquetas. <br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326504705818654/Screenshot_20201215-024153_Expo.jpg" height=400></p><br>

- <strong>Pantalla de búsqueda</strong> <br>
Para realizar una búsqueda se ingresa el nombre del wallpaper que anteriormente fue ingresado o que ya se encuentre en la base de datos.<br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326505347285002/Screenshot_20201215-024321_Expo.jpg" height=400></p><br>

<p align="center"><strong>*Realizando búsqueda</strong> </p>
Para realizar búsquedas basta simplemente con escribir el nombre.<br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326566286327818/Screenshot_20201215-024345_Expo.jpg" height=400></p><br>

<p align="center"><strong>*Resultado</strong> </p>
El resultado muestra la imagen que se solicito a través del nombre, lo muestra en pantalla completa. <br>
<p align="center"><img src="https://cdn.discordapp.com/attachments/689137149441867776/788326566534971392/Screenshot_20201215-024425_Expo.jpg" height=400></p><br>


# Tecnologías utilizados 

- React Native
- Javascript
- SQLite con EXPO
- Expo
- GitHub

# Aplicaciones utilizadas

- Android Studio
- Adobe Photoshop
- Adobe Illustrator
- Adobe Color
- Visual Studio Code

# Recursos 
- Paleta de colores
<p align="center"><img
src="https://cdn.discordapp.com/attachments/689137149441867776/788269706573381642/AdobeColor-BASALT_Iceland.jpeg"
height=200></p>
<br>

- Tipografía
  * Triforce
  * Roboto (requerida por el componente de un botón de la librería <code>native-base</code>)
  
# Instrucciones para la instalación de los recursos de expo
Para clonar el repositorio y poder utilizar la aplicación de forma correcta necesita tener instalado <code>node</code>, <code>npm</code>, 
<code>expo-cli</code> y <code>sqlite</code> de manera global en la computadora. 

# Intalación
- Primero debe instalar Node.js <br>
Utilice el siguiente enlace: <br>
<code><a href="https://nodejs.org/en/download/">Node.js</a></code>

- Instalar los recursos de expo y npm <br>
<code>npm install</code> <br>
<code>npm install -g expo-cli exp</code><br>
<code>npm i react</code><br>
<code>npm i react-native</code><br>
<code>npm i native-base</code><br>
<code>npm i expo-font</code><br>
<code>npm i react-native-gesture-handler</code><br>
<code>npm i @react-navigation/native</code><br>
<code>npm i @react-navigation/stack</code><br>
<code>npm i react-navigation-stack</code><br>
<code>npm i react-native-screens</code><br>
<code>npm i @react-native-community/masked-view</code><br>

- Instalar expo-sqlite<br>
<code>npm i expo-sqlite</code> <br>


- Iniciar Expo Metro: <br>
<code>expo start</code>


# Documentación 
- Corrección del Fallo VirtualizedList-backed<br>
https://nyxo.app/es/fixing-virtualizedlists-should-never-be-nested-inside-plain-scrollviews/

- Fuente Triforce<br>
https://www.dafont.com/es/triforce.font

- Documentación de sqlite<br>
https://docs.expo.io/versions/latest/sdk/sqlite/

- Columnas en Flatlist <br>
https://stackoverflow.com/questions/51742856/sorting-react-native-flatlist

- Formas de almacenar y mostrar la fecha utilizando <code>javascript</code><br>
https://desarrolloweb.com/articulos/mostrar-fecha-actual-javascript.html

- Documentación de Flatlist <br>
https://reactnative.dev/docs/flatlist
