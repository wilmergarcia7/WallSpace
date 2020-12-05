import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const WallpaperContext = createContext({});

export const WallpaperContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { wallpapers: initialWallpapers, children } = props;

  // Almacenar los valores en el estado
  const [walpapers, setWallpapers] = useState(initialWallpapers);

  // Cargar u obtener las notas
  useEffect(() => {
    refreshWallpapers();
  }, []);

  const refreshWallpapers = () => {
    return database.getWallpapers(setWallpapers);
  };

  const addNewWallpaper = (wallpaper) => {
    return database.addWallpapers(wallpaper, refreshWallpapers);
  };

  // Crear el objeto de contexto
  const wallpaperContext = {
    wallpapers,
    addNewWallpaper,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <WallpaperContext.Provider value={wallpaperContext}>
      {children}
    </WallpaperContext.Provider>
  );
};
