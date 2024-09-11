import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Catalogo from './Catalogo/Catalogo';
import Sobre from './Sobre/Sobre'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalogo />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;