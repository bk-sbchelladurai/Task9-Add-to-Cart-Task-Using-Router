import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="header">
      <h2>...Welcome to online shopping...</h2>
      <nav className="navbar">
        <Link to="/" className="home">
          <i className="fa-solid fa-house" /> &nbsp;Home
        </Link>
        <Link to="/cart" className="cart">
          <i className="fa-solid fa-cart-shopping" /> &nbsp;Cart {cartCount}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
