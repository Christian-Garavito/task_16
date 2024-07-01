// src/BusquedaVuelos.js
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const BusquedaVuelos = () => {
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [escalas, setEscalas] = useState(3);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const fechaCompleta = `${fecha} ${hora}`;
        history.push(`/resultados?origen=${origen}&destino=${destino}&fecha=${fechaCompleta}&orden=tiempo&escalas=${escalas}`);
    };


    return (
        <div>
            <h1>Buscar Vuelos</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Origen:</label>
                    <input type="text" value={origen} onChange={(e) => setOrigen(e.target.value)} required />
                </div>
                <div>
                    <label>Destino:</label>
                    <input type="text" value={destino} onChange={(e) => setDestino(e.target.value)} required />
                </div>
                <div>
                    <label>Fecha:</label>
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                </div>
                <div>
                    <label>Hora:</label>
                    <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
                </div>
                <div>
                    <label>Escalas:</label>
                    <input type="number" value={escalas} onChange={(e) => setEscalas(e.target.value)} min="0" max="3" required />
                </div>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};


export default BusquedaVuelos;




