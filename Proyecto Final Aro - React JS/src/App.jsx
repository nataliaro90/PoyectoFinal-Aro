import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from "./layout/BaseLayout";
import Home from './pages/Home';
import Store from './pages/Store';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import CartPage from './pages/Cartpage';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/store' element={<Store />} />
            <Route exact path='/detalle/:id' element={<Detail />} />
            <Route exact path='/contacto' element={<Contact />} />
            <Route exact path='/carrito' element={<CartPage />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
