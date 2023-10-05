import { Link } from "react-router-dom";
import './item.css'

const Item = ({ id, nombre, precio, descripcion, imagen }) => {

  const handleClick = (event) => {
    //parametro event captura el evento sintetico
    //Detiene el comportamiento por default
    event.preventDefault()
    // Detiene la propagacion de los eventos por defaults de sus padres
    event.stopPropagation()

    console.log(id, nombre, precio, descripcion, imagen)
  }

  return (
    <div className="card items">
      <img className="imagenProducto" src={imagen} alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{precio}</p>
      </div>
      <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
    </div>
  );
};

export default Item;
