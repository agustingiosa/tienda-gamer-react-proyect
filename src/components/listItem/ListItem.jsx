import './ListItem.css'

const ListItem = (props) => {
    const handleAddToCart = () => {
        props.addToCart({ name: props.name, price: props.price });
    };

    return (
    <div className="items">
        <img src={props.url} alt={props.name} />
        <h2 class='tituloProducto'>{props.name}</h2>
        <p class='precioProducto'> ${props.price}</p>
        <button onClick={handleAddToCart} class='boton'>Agregar al carrito</button>
    </div>
    );
};

export default ListItem;