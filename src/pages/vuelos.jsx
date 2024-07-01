// src/Vuelos.js
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchVuelos } from './VuelosProvider';


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};


const Vuelos = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const query = useQuery();
    const history = useHistory();


    const origen = query.get('origen');
    const destino = query.get('destino');
    const fecha = query.get('fecha');
    const [orden, setOrden] = useState(query.get('orden') || 'tiempo');
    const escalas = query.get('escalas');


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await fetchVuelos({
                    origen,
                    destino,
                    fecha,
                    orden,
                    escalas,
                });
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        fetchData();
    }, [origen, destino, fecha, orden, escalas]);


    const handleOrdenChange = (e) => {
        setOrden(e.target.value);
        const newQuery = new URLSearchParams({
            origen,
            destino,
            fecha,
            orden: e.target.value,
            escalas,
        }).toString();
        history.push(`/resultados?${newQuery}`);
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>
            <h1>Resultados de Vuelos</h1>
            <div>
                <label>Ordenar por:</label>
                <select value={orden} onChange={handleOrdenChange}>
                    <option value="tiempo">Tiempo</option>
                    <option value="precio">Precio</option>
                </select>
            </div>
            {data ? (
                <ul>
                    {data.map((vuelo, index) => (
                        <li key={index}>
                            <p>Origen: {vuelo.origen}</p>
                            <p>Destino: {vuelo.destino}</p>
                            <p>Hora de Salida: {vuelo.hora_salida}</p>
                            <p>Duración: {vuelo.duracion_vuelo} horas</p>
                            <p>Precio: ${vuelo.precio_vuelo}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay vuelos disponibles.</p>
            )}
        </div>
    );
};


export default Vuelos;




