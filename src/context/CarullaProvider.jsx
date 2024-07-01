import { useEffect, useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({ children }) => {
  // esto es un estado
  const [allContenido, setAllContenido] = useState([]);
  const [allTipo, setAllTipo] = useState([]);
  const [allGenero, setAllGenero] = useState([]);

  // Trear el cotenido de la la tabla de contenido ibm---------------------------------------------------------------------
  const getAllContenido = async (filtros) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/contenidos";

    const strFilters = Object.entries(filtros || {})
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

    // js
    // [].join("@");
    // python
    // "@".join([]);

    const res = await fetch(`${baseURL}?${strFilters}`);
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;

    if (data?.status) {
      console.log("Ok", data?.msg);
      setAllContenido([...(data?.obj?.results ?? [])]);
      return data?.obj?.hay_sigiente
    } else {
      console.log("Error", data?.msg);
    }
  };

  // buscar por id
  const getContenido = async (id_pelicula) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/contenidos";

    const res = await fetch(`${baseURL}?pk_id_peliculas=${id_pelicula}`);
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;

    if (data?.status) {
      console.log("Ok", data?.msg);
      // guardar la data para utilizarla despues
      return [...(data?.obj?.results ?? [])]
    } else {
      console.log("Error", data?.msg);
    }
  };

  const setContenidoBack = async (
    valoresCambiar = {},
    // por que puede que el id de la pelicula exista o no 
    pk_id_peliculas = undefined
  ) => {                                                           //si es diferente de null que nos traiga esto 
    const baseURL = `http://127.0.0.1:5000/servicio-1/contenidos${pk_id_peliculas != null ? `/${pk_id_peliculas}` : ""
      }`;

    // js
    // [].join("@");
    // python
    // "@".join([]);

    const res = await fetch(baseURL, {
      // si peliculas no es null la crea con el post y si ya existe es put
      method: pk_id_peliculas != null ? "PUT" : "POST",
      // el body es lo mismo de postn y cambia el objeto de javascrip a texto
      body: JSON.stringify(valoresCambiar),
      headers: {
        // este es el que me dice el tipo de texto que voy a enviar por el body
        "Content-Type": "application/json"
      }
    });
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;
    if (!("status" in data)) {
      throw new Error("Error llamando el fetch");
    }

    if (data?.status) {
      console.log("Ok", data?.msg);
    } else {
      console.log("Error", data?.msg);
    }
    return data?.status
  };



  // Trear el tipo de la la tabla de tipo contenido---------------------------------------------------------------
  const getAllTipo = async (filtros) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/tipo_contenido";

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
    } else {
      console.log("Error", data?.msg);
    }
  };

  const getTipoContenido = async (id_tipo_contenido) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/tipo_contenido";

    const res = await fetch(`${baseURL}?pk_id_tipo_contenido=${id_tipo_contenido}`);
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;

    if (data?.status) {
      console.log("Ok", data?.msg);
      return [...(data?.obj ?? [])]
    } else {
      console.log("Error", data?.msg);
    }
  };

  const setTipoBack = async (
    valoresCambiar = {},
    pk_id_tipo_contenido = undefined
  ) => {
    const baseURL = `http://127.0.0.1:5000/servicio-1/tipo_contenido${pk_id_tipo_contenido != null ? `/${pk_id_tipo_contenido}` : ""
      }`;

    // js
    // [].join("@");
    // python
    // "@".join([]);

    const res = await fetch(baseURL, {
      method: pk_id_tipo_contenido != null ? "PUT" : "POST",
      body: JSON.stringify(valoresCambiar),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;
    if (!("status" in data)) {
      throw new Error("Error llamando el fetch");
    }

    if (data?.status) {
      console.log("Ok", data?.msg);
    } else {
      console.log("Error", data?.msg);
    }
  };

  // Trear el gebero de la la tabla ---------------------------------------------------------------
  const getAllTablaGeneros = async (filtros) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/tabla_generos";

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
      setAllGenero([...(data?.obj ?? [])]);
    } else {
      console.log("Error", data?.msg);
    }
  };

  const getTablaGeneros = async (id_tipo_contenido) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/tabla_generos";

    const res = await fetch(`${baseURL}?pk_genero=${id_tipo_contenido}`);
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;

    if (data?.status) {
      console.log("Ok", data?.msg);
      return [...(data?.obj ?? [])]
    } else {
      console.log("Error", data?.msg);
    }
  };

  const setGenerosBack = async (
    valoresCambiar = {},
    pk_id_tipo_contenido = undefined
  ) => {
    const baseURL = `http://127.0.0.1:5000/servicio-1/tabla_generos${pk_id_tipo_contenido != null ? `/${pk_id_tipo_contenido}` : ""
      }`;

    // js
    // [].join("@");
    // python
    // "@".join([]);

    const res = await fetch(baseURL, {
      method: pk_id_tipo_contenido != null ? "PUT" : "POST",
      body: JSON.stringify(valoresCambiar),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;
    if (!("status" in data)) {
      throw new Error("Error llamando el fetch");
    }

    if (data?.status) {
      console.log("Ok", data?.msg);
    } else {
      console.log("Error", data?.msg);
    }
    return data?.status
  };






  return (
    <CarullaContext.Provider
      value={{
        allContenido,
        getAllContenido,
        setContenidoBack,
        getContenido,
        allTipo,
        getAllTipo,
        getTipoContenido,
        setTipoBack,
        allGenero,
        setAllGenero,
        getAllTablaGeneros,
        getTablaGeneros,
        setGenerosBack,
      }}
    >
      {children}
    </CarullaContext.Provider>
  );
};
