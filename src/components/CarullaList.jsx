// Importaciones necesarias desde React y componentes específicos
import React, { useContext } from 'react';
import { CarullaContext } from '../context/CarullaContext';
import { CardCarulla } from './CardCarulla';
import { Loader } from './Loader';
import styles from './CarullaList.module.css'


// Definición del componente funcional PokemonList
export const CarullaList = ({ listaPeliculas, loading = false, agregar = true }) => {
    // Uso del contexto PokemonContext para obtener datos y estado
    // const { allCarulla, loading } = useContext(CarullaContext);

    // Renderizado condicional basado en el estado de carga
    return (
        <>
            {loading ? (
                // Mostrar el componente Loader si está en estado de carga
                <Loader />
            ) : (
                // Mostrar la lista de peliculas cuando no está en estado de carga
                <div className={styles['card-list']}>
                    {/* Mostrar los Pokémon filtrados si existen */}
                            {listaPeliculas.map((pelicula,index) => (
                                // Renderizar el componente CardPokemon para cada Pokémon
                                // index nunca cambia y asi los puede editar la llave de cada pelicula
                                <CardCarulla pelicula={pelicula} agregar={agregar} index={index} key={index} />
                            ))}
                </div>
            )}
        </>
    );
};
