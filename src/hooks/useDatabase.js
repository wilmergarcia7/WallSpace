import React, { useEffect, useState } from "react";
import { database } from "../components/db";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {
       //await database.dropDatabaseTableAsync();
       await database.setupDatabaseTableAsync();
       //await database.setupWallpapersAsync();

      // Finaliza la carga de la DB
      setIsLoadingComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};

export default useDatabase;
