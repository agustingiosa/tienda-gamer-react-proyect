import './listItemsDestacados.css'

const ListItemDestacados = (props) => {
    return (
    <div className="items">
        <img src={props.url} alt={props.name} />
        <h2 class='tituloProducto'>{props.name}</h2>
        <p class='precioProducto'> ${props.price}</p>
    </div>
    );
};

export default ListItemDestacados;