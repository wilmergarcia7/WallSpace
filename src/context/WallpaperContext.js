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
  const [wallpaper, setWallpaper] = useState("");

  // Cargar u obtener los wallpapers
  useEffect(() => {
    refreshWallpapers();
  }, []);

  const refreshWallpapers = () => {
    return database.getWallpapers(setWallpapers);
  };

  const addNewWallpaper = async (name, route, tag) => {
    await database.addWallpapers(name, route, tag, refreshWallpapers);
    return refreshWallpapers();
  };

  const dropWallpaper = async () =>{
  await database.dropDatabaseTableAsync();
  return refreshWallpapers();
  };
  const getAllWallpapers = async () =>{
    await database.getWallpapers();
    return refreshWallpapers();
  }
  const getWallpaperById = (id) =>{
    return database.getWallpaperById(id, setWallpaper);
  };

  // Crear el objeto de contexto
  const wallpaperContext = {
    wallpapers,
    wallpaper,
    addNewWallpaper,
    dropWallpaper,
    getWallpaperById,
    getAllWallpapers,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <WallpaperContext.Provider value={wallpaperContext}>
      {children}
    </WallpaperContext.Provider>
  );
};
