import { useContext, useEffect, useState } from "react";
import ButtonCuerpo from "../components/ButtonCuerpo";
import { CarullaContext } from "../context/CarullaContext";
import TablaItems from "../components/TablaItems";
import styles from "../components/TabkaContenido/TabkaContenido.module.css"

export const TablaContenido = () => {
  const { getAllContenido, allContenido } = useContext(CarullaContext);
  const [buscarIdContenido, setBuscarIdContenido] = useState("");
  const [buscarNombrePelicula, setBuscarNombrePelicula] = useState("");
  const [buscarDirectorPelicula, setBuscarDirectorPelicula] = useState("");
  const [sigienePagina, setSigienePagina] = useState(1);
  const [numeroItensMostrar, setNumeroItensMostrar] = useState(5);
  const [existeSiguiente, setExisteSiguiente] = useState(false);



  useEffect(() => {
    const filtros = [];
    if (buscarIdContenido) {
      filtros.push(["pk_id_peliculas", buscarIdContenido]);
    }
    if (buscarNombrePelicula) {
      filtros.push(["titulo_pelicula", buscarNombrePelicula]);
    }
    if (buscarDirectorPelicula) {
      filtros.push(["director_pelicula", buscarDirectorPelicula]);
    }

    filtros.push(["pagina", sigienePagina]);
    filtros.push(["limit", numeroItensMostrar]);


    if (filtros.length) {

      getAllContenido(Object.fromEntries(filtros)).then((existeSiguiente) =>{
        // !! doble negado convertirlo del tipo de variable que sea a booleano
        setExisteSiguiente(!!existeSiguiente);
      }).catch((error)=>{
        console.error(error);
        setExisteSiguiente(false)
      });
      
    } else {
      getAllContenido();
    }
    //buscarIdContenido toca agregaerlo cualdo esten los filtos
  }, [buscarIdContenido, buscarNombrePelicula, buscarDirectorPelicula, sigienePagina,numeroItensMostrar]);

  return (
    <>
      <div>
        <h1>Tabla Contenido</h1>
      </div>
      <div className="botones_inicio_contenido">
        <div className="botones_contenido">
          <ButtonCuerpo title={"Volver"} href="/inicio-contenido" />
          <ButtonCuerpo title={"Crear contenido"} href="/crear-contenido" />
        </div>
      </div>
      <div>
        {/** Agregar filtros */}
        <div className={styles['inico_input_contenido']}>
          <div className={styles['modulo_input']}>
            <label htmlFor="">Id pelicula:</label>
            <input
              type="text"
              autoComplete="off"
              value={buscarIdContenido}
              onChange={(ev) => {
                setBuscarIdContenido(ev.target.value);
              }}
              placeholder="Filtar por ID pelicula"
            />
          </div>
          <div className={styles['modulo_input']}>
            <label htmlFor="">Nombre pelicula:</label>
            <input
              type="text"
              autoComplete="off"
              value={buscarNombrePelicula}
              onChange={(ev) => {
                setBuscarNombrePelicula(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
          </div>
          <div className={styles['modulo_input']}>
            <label htmlFor="">Director:</label>
            <input
              type="text"
              autoComplete="off"
              value={buscarDirectorPelicula}
              onChange={(ev) => {
                setBuscarDirectorPelicula(ev.target.value);
              }}
              placeholder="Filtar por director pelicula"
            />
          </div>
          <div className={styles['modulo_tabla']}>
            <TablaItems
              itemsMostrar={(allContenido || []).map(
                ({ pk_id_peliculas, titulo_pelicula, ano_pelicula, tipo_contenido, director_pelicula, valor_pelicula }) => ({
                  pk_id_peliculas,
                  titulo_pelicula,
                  ano_pelicula,
                  tipo_contenido,
                  director_pelicula,
                  valor_pelicula,
                })
              )}
              headers={["ID pelicula", "Nombre pelicula", "Año de la pelicula", "tipo contenido", "Director pelicula", "Presupuesto en USD"]}
            />
          </div>

        </div>
      </div>
      <div className="botones_contenido">
        <button onClick={() =>
          setSigienePagina((oldPage) => (oldPage > 1 ? oldPage - 1 : oldPage))
        }>Atras</button>
        <div>
          <label htmlFor="">Cantidad a traer</label>
          <select value={numeroItensMostrar} onChange={(ev) => {
            setNumeroItensMostrar(ev.target.value);
            setSigienePagina(1);
          }}>
            <option value={""}></option>
            <option value={5}>5 Items por paginas</option>
            <option value={10}>10 Items por paginas</option>
            <option value={20}>20 Items por paginas</option>
          </select>
        </div>
        <button onClick={() => {
          setSigienePagina((oldPage) => (existeSiguiente ? oldPage + 1 : oldPage))
        }}>Sigiente</button>
      </div>
    </>
  );
};
