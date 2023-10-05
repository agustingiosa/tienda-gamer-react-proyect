import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "./context/CartContext";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <CartContext>
      <Navigation />
    </CartContext>
  );
}

export default App;
