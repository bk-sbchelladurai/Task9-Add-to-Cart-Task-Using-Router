import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setCartCount(cartCount - product.quantity);
  };

  const handleIncreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    setCartCount(cartCount + 1);
  };

  const handleDecreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    setCartCount(cartCount - 1);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                cartCount={cartCount}
                handleRemoveFromCart={handleRemoveFromCart}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
