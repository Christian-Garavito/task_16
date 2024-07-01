import { useContext, useEffect, useState } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';
import { CarullaContext } from "../context/CarullaContext";
import TablaItems from "../components/TablaItems";


export const TablaTipoContenido = () => {
    const { getAllTipo, allTipo } = useContext(CarullaContext);
    const [buscarIdGenero, setBuscarIdGenero] = useState("");
    const [buscarNombreGenero, setBuscarNombreGenero] = useState("");
    const [buscarDescripcionGenero, setBuscarDescripcionGenero] = useState("");

 useEffect(() => {
    const filtros = [];
    if (buscarIdGenero) {
        filtros.push(["pk_id_tipo_contenido", buscarIdGenero]);
    }
    if (buscarNombreGenero) {
        filtros.push(["tipo_contenido", buscarNombreGenero]);
    }
    if (buscarDescripcionGenero) {
        filtros.push(["decripcion_contenido", buscarDescripcionGenero]);
    }

    if (filtros.length) {
        getAllTipo(Object.fromEntries(filtros));
    } else {
        getAllTipo();
    }
        //textoBusqueda toca agregaerlo cualdo esten los filtos
 }, [buscarIdGenero, buscarNombreGenero, buscarDescripcionGenero]);

    return (
        <>
            <div>
                <div>
                    <h1>TablaTipoContenido</h1>

                </div>
                <div className='botones_inicio_contenido' >
                    <div className='botones_contenido'>
                        <ButtonCuerpo title={"Volver"} href='/inicio-contenido' />
                        <ButtonCuerpo title={"Crear Tipo Contenido"} href='/crear-contenido' />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="">Id Genero:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={buscarIdGenero}
                            onChange={(ev) => {
                                setBuscarIdGenero(ev.target.value);
                            }}
                            placeholder="Filtar por ID Genero"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Nombre Genero:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={buscarNombreGenero}
                            onChange={(ev) => {
                                setBuscarNombreGenero(ev.target.value);
                            }}
                            placeholder="Filtar por Nombre de Genero"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Descripcion Genero:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={buscarDescripcionGenero}
                            onChange={(ev) => {
                                setBuscarDescripcionGenero(ev.target.value);
                            }}
                            placeholder="Filtar por Descripcion Genero"
                        />
                    </div>
                </div>

                <TablaItems
                    itemsMostrar={(allTipo || []).map(
                        ({ pk_id_tipo_contenido, tipo_contenido, decripcion_contenido, valor_generado }) => ({
                            pk_id_tipo_contenido,
                            tipo_contenido,
                            decripcion_contenido,
                            valor_generado,
                        })
                    )}
                    headers={["ID tipo", "Tipo contenido", "Decripcion", "Valor generado"]}
                />
            </div>
        </>
    );
};