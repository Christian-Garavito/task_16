import { useContext, useEffect, useState } from "react";
import ButtonCuerpo from "../components/ButtonCuerpo";
import { CarullaContext } from "../context/CarullaContext";
import styles from "../components/CrearContenido/CrearContenido.module.css"
import TablaItems from "../components/TablaItems";


export const CrearContenido = () => {
  const { setContenidoBack, getContenido } = useContext(CarullaContext);
  const { setGenerosBack, getTablaGeneros } = useContext(CarullaContext);
  const { getAllContenido, allContenido } = useContext(CarullaContext);
  const { getAllTablaGeneros, allGenero } = useContext(CarullaContext);
  const [textoBusqueda1, setTextoBusqueda1] = useState("");
  const [textoBusqueda2, setTextoBusqueda2] = useState("");
  const [textoBusqueda3, setTextoBusqueda3] = useState("");
  const [textoBusqueda4, setTextoBusqueda4] = useState("");
  const [textoBusqueda5, setTextoBusqueda5] = useState("");
  const [textoBusqueda6, setTextoBusqueda6] = useState("");
  const [textoBusqueda7, setTextoBusqueda7] = useState("");
  const [textoBusqueda8, setTextoBusqueda8] = useState("");
  const [textoBusqueda9, setTextoBusqueda9] = useState("");
  const [datoEncontrado, setdatoEncontrado] = useState(null);
  const [datoEncontrado1, setdatoEncontrado1] = useState(null);
  const [agragadoContenido, setAgragadoContenido] = useState(false);
  const [guardarGenero, setGuardarGenero] = useState({});


  useEffect(() => {
    const filtros = [];


    getContenido(textoBusqueda1).then((infEncontrada) => {
      if (infEncontrada && infEncontrada.length) {
        setdatoEncontrado(infEncontrada[0].pk_id_peliculas);
        setTextoBusqueda2(infEncontrada[0].titulo_pelicula);
        setTextoBusqueda3(infEncontrada[0].ano_pelicula);
        setTextoBusqueda4(infEncontrada[0].fk_id_tipo_contenido);
        setTextoBusqueda5(infEncontrada[0].director_pelicula);
        setTextoBusqueda6(infEncontrada[0].valor_pelicula);
      } else {
        setdatoEncontrado(null);
        setTextoBusqueda2("")
        setTextoBusqueda3("")
        setTextoBusqueda4("")
        setTextoBusqueda5("")
        setTextoBusqueda6("")

      }
    }).catch((error) => {
      console.error(error);
      setdatoEncontrado(null);
      setTextoBusqueda2("")
      setTextoBusqueda3("")
      setTextoBusqueda4("")
      setTextoBusqueda5("")
      setTextoBusqueda6("")
    });

    getTablaGeneros(textoBusqueda7).then((infEncontrada1) => {
      if (infEncontrada1 && infEncontrada1.length) {
        setdatoEncontrado1(infEncontrada1[0].pk_genero);
        setTextoBusqueda8(infEncontrada1[0].nombre_genero);
        setTextoBusqueda9(infEncontrada1[0].descripcion_genero);

      } else {
        setdatoEncontrado1(null);
        setTextoBusqueda8("")
        setTextoBusqueda9("")
      }
    }).catch((error) => {
      console.error(error);
      setdatoEncontrado1(null);
      setTextoBusqueda8("")
      setTextoBusqueda9("")
    });

    if (filtros.length) {
      getAllContenido(Object.fromEntries(filtros));
    } else {
      getAllContenido();
      getAllTablaGeneros();
    }

  }, [textoBusqueda1, textoBusqueda7]);

  return (
    <>
      <div>
        <div>
          <h1>Crear Contenido</h1>
        </div>
        <div >
          <div className="botones_contenido">
            <ButtonCuerpo
              title={"Tabla de Contenido"}
              href="/tabla-contenido"
            />
            <ButtonCuerpo
              title={"Tabla Tipo de Cotenido"}
              href="/tabla-tipo-contenido"
            />
            <ButtonCuerpo
              title={"Tabla Tipo de Genero"}
              href="/tabla-tipo-generos"
            />
          </div>
        </div>
      </div>
      <div className={styles['inico_input_contenido']}>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Id del contenido:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda1}
            onChange={(ev) => {
              setTextoBusqueda1(ev.target.value);
            }}
            placeholder="Id del contenido"
          />
        </div>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Nombre del contenido:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda2}
            onChange={(ev) => {
              setTextoBusqueda2(ev.target.value);
            }}
            placeholder="Nombre del contenido"
          />
        </div>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Año del Contenido:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda3}
            onChange={(ev) => {
              setTextoBusqueda3(ev.target.value);
            }}
            placeholder="Año del Contenido"
          />
        </div>
        <div className={styles['modulo_selector']}>
          <label htmlFor="">Tipo contenido</label>
          <select value={textoBusqueda4} onChange={(ev) => {
            setTextoBusqueda4(ev.target.value);
          }}>
            <option value={""}>Agregar Tipo Contenido</option>
            <option value={1}>pelicula</option>
            <option value={2}>seria</option>
            <option value={3}>juego</option>
          </select>
        </div>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Director Contenido:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda5}
            onChange={(ev) => {
              setTextoBusqueda5(ev.target.value);
            }}
            placeholder="Director Contendio"
          />
        </div>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Presupuesto en USD: $</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda6}
            onChange={(ev) => {
              setTextoBusqueda6(ev.target.value);
            }}
            placeholder="Presupuesto en USD: $"
          />
        </div>
        <div className={styles['boton_crear']}>
          <button onClick={() => {
            setContenidoBack({
              "pk_id_peliculas": textoBusqueda1,
              "titulo_pelicula": textoBusqueda2,
              "ano_pelicula": textoBusqueda3,
              "fk_id_tipo_contenido": textoBusqueda4,
              "director_pelicula": textoBusqueda5,
              "valor_pelicula": textoBusqueda6
            }, datoEncontrado).then((estado) => {
              if (estado === true) {
                getAllContenido();
              }
            }).catch((error) => {
              console.error(error);
            })
          }}>Crear / Editar</button>
        </div>
      </div>
      {/* tablas ----------------------------------------------------------------------*/}
      <div className={styles['modulo_tablas']}>
        <div>
          <TablaItems
            itemsMostrar={(allGenero || []).map(
              ({ pk_genero, nombre_genero, descripcion_genero }) => ({
                check:<input type="checkbox" name={pk_genero} checked={agragadoContenido} 
                onChange={(ev) => {
                  //setAgragadoContenido((anterior)=>!anterior);
                  //console.log(ev.target.name)
                  //setGuardarGenero({[ev.target.name] : (anterior)=> (anterior === false ? false : true)})
                  setGuardarGenero((generoAnterior)=>{generoAnterior,[ev.target.name] })
                   
                }}/>,
                pk_genero,
                nombre_genero,
                descripcion_genero,
              })
            )}
            headers={["","ID tipo", "Nombre Genero", "Descripcion"]}
          />
        </div>
      </div>
      <div className={styles['inico_input_contenido']}>
        {/* <div className={styles['modulo_input']}>
          <label htmlFor="">Id Genero:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda7}
            onChange={(ev) => {
              setTextoBusqueda7(ev.target.value);
            }}
            placeholder="Id Genero"
          />
        </div>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Nombre Genero:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda8}
            onChange={(ev) => {
              setTextoBusqueda8(ev.target.value);
            }}
            placeholder="Nombre Genero"
          />
        </div>
        <div className={styles['modulo_input']}>
          <label htmlFor="">Descripcion:</label>
          <input
            type="text"
            autoComplete="off"
            value={textoBusqueda9}
            onChange={(ev) => {
              setTextoBusqueda9(ev.target.value);
            }}
            placeholder="Descripcion"
          />
        </div>
        <div className={styles['boton_crear']}>
          <button onClick={() => {
            setGenerosBack({
              "pk_genero": textoBusqueda7,
              "nombre_genero": textoBusqueda8,
              "descripcion_genero": textoBusqueda9,
            }, datoEncontrado1).then((estado) => {
              if (estado === true) {
                getAllTablaGeneros()
              }
            }).catch((error) => {
              console.error(error);
            })
          }}>Crear / Editar</button>
          </div> */}
          <div className={styles['boton_crear']}>
          <button onClick={() => {
            
            console.log(guardarGenero)
            
          }}>Agregar Genero</button>
          </div>
        </div>

    </>
  );
};
