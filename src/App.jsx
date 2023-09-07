import { useState } from 'react'
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Función para agregar un producto al carrito
  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className="App">
      <Navbar cartItemCount={cartItemCount} />
      <div className="estilosPrincipal">
        <h2 className='subtitulo'>Productos destacados</h2>
        <ItemListContainer addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App
