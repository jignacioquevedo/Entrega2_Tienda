import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent:"space-between", alignItems: 'center' }}>
      <h1>Tienda One Ball</h1>
      <section>
        <Link to="/category/zapatillas"> Zapatillas </Link>
        <Link to="/category/indumentaria"> Indumentaria </Link>
        <Link to="/category/accesorios"> Accesorios </Link>
      </section>
      <CartWidget />
    </nav>
  );
}

export default NavBar
