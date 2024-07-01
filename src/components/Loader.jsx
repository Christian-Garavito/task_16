// Importación del componente DotSpinner desde la biblioteca @uiball/loaders
import { DotSpinner } from '@uiball/loaders';

// Definición del componente funcional Loader
export const Loader = () => {
    return (
        // Contenedor principal del loader
        <div className="container-loader">
            {/* Uso del componente DotSpinner con propiedades de tamaño, velocidad y color */}
            <DotSpinner size={40} speed={0.9} color='black' />;
        </div>
    )
};
