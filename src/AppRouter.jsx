// Importar Navigate, Route y Routes desde 'react-router-dom' para definir las rutas de la aplicación
import { Navigate, Route, Routes } from 'react-router-dom';
// Importar HomePage, PokemonPage y SearchPage desde './pages' para definir las páginas de la aplicación
import { BusquedaVuelos, vuelos } from './pages';

// Componente que define las rutas de la aplicación
export const AppRouter = () => {
    return (
        <Routes>
       
            <Route path='/'>
                <Route index element={<BusquedaVuelos />} />
                <Route path='resultados' element={<vuelos />}/>       
            </Route>

          
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};


