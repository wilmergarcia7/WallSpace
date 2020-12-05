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
