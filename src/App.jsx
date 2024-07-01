// Importar AppRouter desde './AppRouter' para definir las rutas de la aplicación
import { AppRouter } from './AppRouter';
import { CarullaProvider } from './context/CarullaProvider';

// Componente principal de la aplicación
function App() {
    return (
        // Proveer el contexto de Pokémon a la aplicación
        <CarullaProvider>
            {/* Utilizar el enrutador principal de la aplicación */}
            <AppRouter />
        </CarullaProvider>
    );
}

// Exportar el componente principal de la aplicación
export default App;
