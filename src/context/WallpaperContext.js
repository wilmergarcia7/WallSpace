import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de los wallpapers
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

  // Refresca la base de datos
  const refreshWallpapers = () => {
    return database.getWallpapers(setWallpapers);
  };

  // Llama la función update de la base de datos
  const editWallpaper = async (name, tag, id) => {
    await database.editWallpaper(name, tag, id, refreshWallpapers);
    return refreshWallpapers();
  };

  // Elimina wallpaper por id
  const deleteWallpaperById = async (id) => {
    await database.deleteWallpaperById(id, refreshWallpapers);
    return refreshWallpapers();
  };

  // Añade un nuevo wallpaper
  const addNewWallpaper = async (name, code, tag) => {
    await database.addWallpapers(name,  code, tag, refreshWallpapers);
    return refreshWallpapers();
  };

  // Elimina la base de datos
  const dropWallpaper = async () =>{
  await database.dropDatabaseTableAsync();
  return refreshWallpapers();
  };

  // Obtiene toda la base datos
  const getAllWallpapers = async () =>{
    await database.getWallpapers(refreshWallpapers);
    return refreshWallpapers();
  }

  // Obtiene el wallpaper por código
  const getWallpaperById = async (code) =>{
    await database.getWallpaperById(code, setWallpaper);
    return refreshWallpapers();
  };

  //Obtiene un wallpaper por nombre
  const getWallpaperByName = async (name) =>{
    await database.getWallpaperByName(name, setWallpaper);
    return refreshWallpapers();
  };

  // Crear el objeto de contexto
  const wallpaperContext = {
    wallpapers,
    wallpaper,
    addNewWallpaper,
    dropWallpaper,
    editWallpaper,
    deleteWallpaperById,
    getWallpaperById,
    getAllWallpapers,
    setWallpaper,
    refreshWallpapers,
    getWallpaperByName,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <WallpaperContext.Provider value={wallpaperContext}>
      {children}
    </WallpaperContext.Provider>
  );
};
