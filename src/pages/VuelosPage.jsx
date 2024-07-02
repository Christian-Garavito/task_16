import { useParams } from 'react-router-dom';
import { useVuelos } from './VuelosProvider';


const VuelosPage = () => {
  const { origen, destino, fecha, orden } = useParams();
  const { vuelos } = useVuelos();


  if (!vuelos) {
    return <div>Cargando resultados...</div>;
  }


  return (
    <div>
      <h2>Resultados de vuelos:</h2>
      <ul>
        {vuelos.map((vuelo, index) => (
          <li key={index}>
            <strong>Vuelo {index + 1}:</strong> {vuelo.origen} a {vuelo.destino}
            <br />
            <strong>Hora de salida:</strong> {vuelo.hora_salida}
            <br />
            <strong>Precio:</strong> ${vuelo.precio_vuelo}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default VuelosPage;






