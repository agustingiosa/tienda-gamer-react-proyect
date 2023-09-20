import './CartWidget.css'

function CartWidget({ itemCount }) {
    return (
    <div className="cart-widget">
        <span role="img" aria-label="Cart">🛒</span>
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>}
    </div>
    );
}

export default CartWidget;