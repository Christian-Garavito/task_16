/* // VuelosProvider.jsx


import React, { createContext, useState } from 'react';


export const VuelosContext = createContext();


const VuelosProvider = ({ children }) => {
    const [vuelos, setVuelos] = useState([]);


    const buscarVuelos = async (filtros) => {
        // Lógica para realizar la búsqueda de vuelos y actualizar el estado
        const url = construirURL(filtros); // Función para construir la URL con filtros
        const response = await fetch(url);
        const data = await response.json();
        setVuelos(data);
    };


    const construirURL = (filtros) => {
        // Lógica para construir la URL de la API según los filtros
        const { origen, destino, fecha } = filtros;
        const urlBase = 'http://127.0.0.1:5000/servicio-1/vuelos';
        const url = `${urlBase}?origen=${origen}&destino=${destino}&fecha=${fecha}`;
        return url;
    };


    return (
        <VuelosContext.Provider value={{ vuelos, buscarVuelos }}>
            {children}
        </VuelosContext.Provider>
    );
};


export default VuelosProvider;


// VuelosProvider.jsx


import React, { createContext, useState } from 'react';


export const VuelosContext = createContext();


const VuelosProvider = ({ children }) => {
    const [vuelos, setVuelos] = useState([]);


    const buscarVuelos = async (filtros) => {
        // Lógica para realizar la búsqueda de vuelos y actualizar el estado
        const url = construirURL(filtros); // Función para construir la URL con filtros
        const response = await fetch(url);
        const data = await response.json();
        setVuelos(data);
    };


    const construirURL = (filtros) => {
        // Lógica para construir la URL de la API según los filtros
        const { origen, destino, fecha } = filtros;
        const urlBase = 'http://127.0.0.1:5000/servicio-1/vuelos';
        const url = `${urlBase}?origen=${origen}&destino=${destino}&fecha=${fecha}`;
        return url;
    };


    return (
        <VuelosContext.Provider value={{ vuelos, buscarVuelos }}>
            {children}
        </VuelosContext.Provider>
    );
};


export default VuelosProvider;






 */