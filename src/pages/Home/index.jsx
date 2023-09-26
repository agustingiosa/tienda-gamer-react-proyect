import { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import ItemListContainer from "../../components/itemListContainer/ItemListContainer"



const Home = () => {
    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const addToCart = (item) => {
        setCart([...cart, item]);
        setCartItemCount(cartItemCount + 1);
    };
    
    const mostrarCategorias = false;

    return (
        <Layout>
            <div className="App">
                <div className="estilosPrincipal">
                    <h2 className='subtitulo'>Productos destacados</h2>
                    <ItemListContainer addToCart={addToCart} mostrarCategorias={mostrarCategorias} />
                </div>
            </div>
        </Layout>
    )
}

export default Home;