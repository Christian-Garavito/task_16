import {  useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({ children }) => {
  // esto es un estado
  const [allTipo, setAllTipo] = useState([]);
  const [allGenero, setAllGenero] = useState([]);

  // Trear el cotenido de la la tabla de contenido ibm---------------------------------------------------------------------
  const getAllTipo = async (filtros) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/vuelos";

    const strFilters = Object.entries(filtros || {})
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

    const res = await fetch(`${baseURL}?${strFilters}`);
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;

    if (data?.status) {
      console.log("Ok", data?.msg);
      setAllTipo([...(data?.obj ?? [])]);
      console.log(data)
    } else {
      console.log("Error", data?.msg);
    }
  };

 
  



 

 






  return (
    <CarullaContext.Provider
      value={{
        
        allTipo,
        getAllTipo,
        
        allGenero,
        setAllGenero,
        
      }}
    >
      {children}
    </CarullaContext.Provider>
  );
};
