import { useState } from 'react';


const BusquedaVuelos = () => {
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');
    const [orden, setOrden] = useState('precio');
    const [escalas, setEscalas] = useState(3);
    const [resultados, setResultados] = useState(null); // Cambiado a null para indicar que la búsqueda está pendiente


    const handleBuscarVuelos = async () => {
        const url = construirURL();
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.status && data.obj && data.obj.ruta_optima) {
                setResultados(data.obj.ruta_optima);
            } else {
                console.error('Respuesta de API no válida:', data);
                setResultados([]);
            }
        } catch (error) {
            console.error('Error al buscar vuelos:', error);
            setResultados([]);
        }
    };


    const construirURL = () => {
        const urlBase = 'http://127.0.0.1:5000/servicio-1/vuelos';
        const url = `${urlBase}?origen=${origen}&destino=${destino}&fecha=${fecha}&orden=${orden}&escalas=${escalas}`;
        return url;
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'origen') {
            setOrigen(value);
        } else if (name === 'destino') {
            setDestino(value);
        } else if (name === 'fecha') {
            setFecha(value);
        } else if (name === 'orden') {
            setOrden(value);
        } else if (name === 'escalas') {
            setEscalas(value);
        }
    };


    const mostrarResultados = () => {
        if (resultados === null) {
            return <p>Realiza una búsqueda para ver los resultados.</p>;
        } else if (resultados.length === 0) {
            return <p>Es nesesario que rellene todos los campos o el campo de destino tiene que ser diferente al de llegada.</p>;
        } else {
            return (
                <div>
                    <h2>Resultados</h2>
                    <label htmlFor="">Precio total del vuelo en pesos:</label>
                    <p>{resultados[1]}</p> {/* Precio total */}
                    <label htmlFor="">Tiempo total del vuelo horas:</label>
                    <p>{resultados[2]}</p> {/* Tiempo total */}
                    <ul>
                    <label htmlFor="">Detalles del vuelo:</label>
                        {resultados[0].map((vuelo, index) => (
                            <li key={index}>
                                Vuelo de {vuelo.origen} a {vuelo.destino}, Precio: {vuelo.precio}, Duración: {vuelo.duracion} horas, Salida: {vuelo.hora_salida}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    };


    return (
        <div>
            <h2>Buscar Vuelos</h2>
            <form>
                <label>
                    Origen:
                    <input type="text" name="origen" value={origen} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Destino:
                    <input type="text" name="destino" value={destino} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Fecha:
                    <input type="text" name="fecha" value={fecha} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Orden:
                    <select name="orden" value={orden} onChange={handleChange}>
                        <option value="precio">Precio</option>
                        <option value="tiempo">Tiempo</option>
                    </select>
                </label>
                <br />
                <label>
                    Máximo de escalas:
                    <input type="number" name="escalas" value={escalas} onChange={handleChange} />
                </label>
                <br />
                <button type="button" onClick={handleBuscarVuelos}>
                    Buscar Vuelos
                </button>
            </form>
            {mostrarResultados()}
        </div>
    );
};


export default BusquedaVuelos;






