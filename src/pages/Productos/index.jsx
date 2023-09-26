import { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import ItemListContainer from "../../components/itemListContainer/ItemListContainer"



const Productos = () => {
    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const addToCart = (item) => {
        setCart([...cart, item]);
        setCartItemCount(cartItemCount + 1);
    };
    return (
        <Layout>
            <div className="App">
                <div className="estilosPrincipal">
                    <h2 className='subtitulo'>Productos</h2>
                    <ItemListContainer addToCart={addToCart} />
                </div>
            </div>
        </Layout>
    )
}

export default Productos