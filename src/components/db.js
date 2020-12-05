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
const addWallpapers = (wallpaper, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into wallpapers (name, route, tag, resolution, date) values (?,?,?,?,?)", [
        wallpaper,
        "NUEVO",
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
          "create table if not exists wallpapers (id integer primary key autoincrement, name text not null, route text not null, tag text not null, resolution text not null,date text not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Tabla creada!");
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
        tx.executeSql("insert into wallpapers (name, route, tag, resolution, date) values (?,?,?,?,?)", [
          "Bienvenido a WallSpace",
          "NUEVO",
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
