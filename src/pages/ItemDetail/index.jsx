// ItemDetail.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";
import { CartCtx } from "../../context/CartContext";
import NavbarSide from "../../components/SideNavbar/SideNavbar";
import './ItemDetail.css'

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartCtx);

  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchProduct);
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      <NavbarSide mostrarInicio={true} /> {/* Pasar la prop mostrarInicio como true */}
      {isLoading ? (
        <p>Cargando . .</p>
      ) : (
        <>
          <div className="detailBox">
          <img className="imagenDetail" src={product.imagen} />
            <div className="detailBoxP1">
              <h1>{product.nombre}</h1> <br />
              <p>{product.descripcion}</p>
            </div>
            <div className="detailBoxP2">
              <button onClick={() => addToCart(product.id)}>Añadir al carrito</button>
            </div>
          </div>
          <h3 ><Link className="botonVolver" to={"/"}>Volver</Link></h3>
        </>
      )}
    </Layout>
  );
};

export default ItemDetail;
