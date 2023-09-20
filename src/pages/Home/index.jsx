import { Link } from "react-router-dom";

const Home = () => {
    return (
        <h1>
            Home
            ir a <Link to={'/Checkout'}>Checkout</Link>
        </h1>
    )
}

export default Home