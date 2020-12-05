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
} from "native-base";

// Utilizar el contexto de notas
import { WallpaperContext } from "../context/WallpaperContext";

const Prueba = ({ navigation }) => {
  const { wallpapers } = useContext(WallpaperContext);

  
  // después de borrar todos los datos de la tabla ir a la pantalla useDatabase
  // y quitar las barras // para la funcion await database.setupDatabaseTableAsync();
  // presionar CTRL + S, eso para crear la tabla desde 0
  // Después ir a db y actualizar presionando CTRL + s para que se borren los datos de la tabla
  console.log(wallpapers);

  return (
    <Container>
      <Content>
        <List>
          {wallpapers
            ? wallpapers.map((wallpaper) => (
                <ListItem key={wallpaper.id.toString()}>
                  <Text style={styles.text}>{wallpaper.name}:</Text>
                  <Text style={styles.text}>{wallpaper.tag}</Text>
                  <Text style={styles.text}>{wallpaper.status}</Text>
                </ListItem>
              ))
            : null}
        </List>
        <Fab
          active={true}
          position="bottomRight"
          style={{ backgroundColor: "#ff0023" }}
          direction="up"
          onPress={() => {
            navigation.navigate("addWallpaperScreen");
          }}
        >
          <Icon name="plus" type="FontAwesome" />
        </Fab>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    text:{
        marginLeft:"1%",
    }
});

export default Prueba;

/*
import React from "react";
import * as SQLite from "expo-sqlite";

// https://docs.expo.io/versions/latest/sdk/sqlite/
// Crea y abre la base de datos
const db = SQLite.openDatabase("wallpapers.db");

// Funcionalidades de la base de datos

// Obtener las notas del usuario
const getWallpapers = (setWallpapersFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from wallpapers",
      [],
      (_, { rows: { _array } }) => {
        setWallpapersFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los wallpapers");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Wallpaper obtenidos");
      }
    );
  });
};

// Agregar Wallpapers
const addWallpapers = (id, name, route, tag, resolution, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into wallpapers (id, name, route, tag, resolution, status) values (?,?,?,?,?,?);", [
        id,
        name,
        route,
        tag,
        resolution,
        "NUEVA" 
      ]);
    },
    (_t, error) => {
      console.log("Error al agregar el wallpaper");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table wallpapers");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de wallpapers");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
    );
  });
};

// Creación de la tabla de notas
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists wallpapers (id integer primary key autoincrement, name text not null, route text not null, tag text not null, resolution text not null, status text not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("¡Tabla creada!");
        resolve(success);
      }
    );
  });
};

// Agrega una nota por defecto
const setupWallpapersAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into wallpapers (id, name, route, tag, resolution, status) values (?,?,?,?,?,?)", [
          1,
          "gato",
          "../../assets/testImages/gato.jpg",
          "gato,felino,gatito",
          "1080x720",
          "NUEVA",
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

export const database = {
  getWallpapers,
  addWallpapers,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupWallpapersAsync,
};
*/

/*

import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const WallpaperContext = createContext({});

export const WallpaperContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { wallpapers: initialWallpapers, children } = props;

  // Almacenar los valores en el estado
  const [wallpapers, setWallpapers] = useState(initialWallpapers);

  // Cargar u obtener los wallpapers
  useEffect(() => {
    refreshWallpapers();
  }, []);

  const refreshWallpapers = () => {
    return database.getWallpapers(setWallpapers);
  };

  const addNewWallpaper = (id, name, route, tag, resolution, successFunc) => {
    return database.addWallpapers(id, name, route, tag, resolution, refreshWallpapers);
  };
  const dropWallpaper = () =>{
  return database.dropDatabaseTableAsync();
  };

  const chargeDB = () =>{
    return database.getWallpapers();
  };
  // Crear el objeto de contexto
  const wallpaperContext = {
    wallpapers,
    addNewWallpaper,
    dropWallpaper,
    chargeDB
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <WallpaperContext.Provider value={wallpaperContext}>
      {children}
    </WallpaperContext.Provider>
  );
};
*/