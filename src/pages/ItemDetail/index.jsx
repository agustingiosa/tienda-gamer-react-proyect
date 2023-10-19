import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import Layout from "../../components/Layout/Layout";
import { CartCtx } from "../../context/CartContext";
import NavbarSide from "../../components/SideNavbar/SideNavbar";
import './ItemDetail.css';
import { db } from "../../dataBase/db"; // Import your Firestore reference

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null); // Use null to indicate loading
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartCtx);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "productos", idProduct); // Reference to the product by ID
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          // Check if the product exists
          setProduct(productSnapshot.data());
        } else {
          console.log("Product not found");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [idProduct]);

  return (
    <Layout>
      <NavbarSide mostrarInicio={true} />
      {isLoading ? (
        <p>Cargando . .</p>
      ) : product ? (
        <>
          <div className="detailBox">
            <img className="imagenDetail" src={product.imagen} alt={product.nombre} />
            <div className="detailBoxP1">
              <h1>{product.nombre}</h1>
              <p>{product.descripcion}</p>
            </div>
            <div className="detailBoxP2">
              <button onClick={() => addToCart(idProduct)}>Añadir al carrito</button>
            </div>
          </div>
          <h3 ><Link className="botonVolver" to={"/"}>Volver</Link></h3>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </Layout>
  );
};

export default ItemDetail;