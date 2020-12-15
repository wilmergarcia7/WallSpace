import React from "react";
import * as SQLite from "expo-sqlite";
//import DeviceInfo from "react-native-device-info";
// https://docs.expo.io/versions/latest/sdk/sqlite/
// Crea y abre la base de datos
const db = SQLite.openDatabase("wallpapers.db");

// Variable para guardar la fecha
let getDate = new Date();
    getDate = getDate.getDate() + "/" + (getDate.getMonth()+1) + "/"+ getDate.getFullYear();

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
const addWallpapers = (name, code, tag, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into wallpapers (name, code, tag, date, status) values (?,?,?,?,?);", [
        name,
        code,
        tag,
        getDate,
        "Nueva" 
      ]);
    },
    (_t, error) => {
      console.log("Error al agregar el wallpaper");
      console.log(error);
    },
    (_t, _success) => {
      console.log("¡Wallpaper añadido correctamente!")
      successFunc;
    }
  );
};

// editar Wallpapers
const editWallpaper = (name, tag, id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("update wallpapers set name = ?, tag = ?, date = ?, status = ? where id = ?", [
        name,
        tag,
        getDate,
        "EDITADA",
        id,
      ]);
    },
    (_t, error) => {
      console.log("Error al editar el wallpaper");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// obtener wallpaper por código
const getWallpaperById = (code,setWallpapersFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from wallpapers where code = ?",
      [code],
      (_, { rows: { _array } }) => {
        setWallpapersFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los wallpaper");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Wallpaper obtenidos");
      }
    );
  });
};

// obtener wallpaper por nombre
const getWallpaperById = (name,setWallpapersFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from wallpapers where name = ?",
      [name],
      (_, { rows: { _array } }) => {
        setWallpapersFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los wallpaper");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Wallpaper obtenidos");
      }
    );
  });
};


// Eliminar Wallpapers por id
const deleteWallpaperById = (id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("DELETE FROM wallpapers WHERE id = ?", [
        id,
      ]);
    },
    (_t, error) => {
      console.log("Error al Eliminar el wallpaper");
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
        console.log("¡Tabla eliminada correctamente!");
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
          "create table if not exists wallpapers (id integer primary key autoincrement, name text not null, code integer not null, tag text not null, date text not null, status text not null);"
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
        tx.executeSql("insert into wallpapers (name, code, tag, date, status) values (?,?,?,?,?)", [
          "gato",
                1,
          "gato,felino,gatito",
          "12/11/2020",
          "NUEVA",
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("¡Datos por defecto añadidos!");
        resolve(success);
      }
    );
  });
};

export const database = {
  getWallpapers,
  addWallpapers,
  editWallpaper,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupWallpapersAsync,
  deleteWallpaperById,
  getWallpaperById,
};
