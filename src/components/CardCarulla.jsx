// Importación de React para usar JSX y crear componentes
import React, { useContext } from 'react';
import { CarullaContext } from '../context/CarullaContext';
import styles from './CardCarulla.module.css';



// Definición del componente funcional CardPokemon que recibe un objeto pokemon como prop
export const CardCarulla = ({ pelicula, agregar = true, index }) => {
    const { agregarAlCarrito, eliminarCarrito } = useContext(CarullaContext);
    return (
        // Uso de Link para crear un enlace a la ruta específica del Pokémon utilizando su ID
        <>
            <div className={styles['card']}>
                {/* Contenedor para la imagen del Pokémon */}
                <div className={styles['card-img']}>
                    {/* Etiqueta img para mostrar la imagen del Pokémon */}
                    <img
                        // Fuente de la imagen, accediendo a la propiedad específica del objeto pokemon
                        src={pelicula.Poster}
                        // Texto alternativo para la imagen, útil para accesibilidad
                        alt={`${pelicula.Title}`}
                    />
                </div>
                {/* Contenedor para la información del Pokémon */}
                <div className={styles['card-info']}>
                    {/* Muestra el ID del Peliculas*/}
                    <span className={styles['pokemon-id']}>N° {pelicula.imdbID}</span>
                    {/* Muestra el nombre del Pokémon */}
                    <h3>{pelicula.Title}</h3>
                </div>
                <div className={styles['card-boton']} >
                    <button  onClick={() => {
                        if (agregar) {
                            agregarAlCarrito(pelicula)
                        } else {
                            eliminarCarrito(index)
                        }
                    }}> {agregar ? "Agregar" : "Eliminar"}</button>
                </div>
            </div>
        </>
    );
};
