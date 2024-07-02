import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusquedaVuelos from './pages/BusquedaVuelos';
/* import VuelosPage from './pages/VuelosPage'; */


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BusquedaVuelos />} />
      {/* <Route path="/resultados" element={<VuelosPage />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;