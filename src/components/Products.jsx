function Products({
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  return (
    <div className="product-list">
      {products.map((product) => {
        const isItemInCart = cart.find((item) => item.id === product.id);
        if (!isItemInCart) {
          return (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <div className="product-title">
                  <h2>{product.title}</h2>
                </div>
                <p>Price: ₹ {product.price * 50}</p>
                <div className="buttons">
                  <button
                    className="add-button"
                    onClick={() => handleAddToCart(product)}
                  >
                    {" "}
                    Add to Cart{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        }
        if (isItemInCart.quantity === 1) {
          return (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <div className="product-title">
                  <h2>{product.title}</h2>
                </div>
                <p>Price: ₹ {product.price * 50}</p>
                <div className="buttons">
                  <button
                    className="button"
                    onClick={() => handleRemoveFromCart(isItemInCart)}
                  >
                    {" "}
                    <i className="fa-sharp fa-solid fa-trash"></i>{" "}
                  </button>
                  <h4>{isItemInCart.quantity}</h4>
                  <button
                    className="button"
                    onClick={() => handleIncreaseQuantity(isItemInCart)}
                  >
                    {" "}
                    <i className="fa-solid fa-plus"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <div className="product-title">
                  <h2>{product.title}</h2>
                </div>
                <p>Price: ₹ {product.price * 50}</p>
                <div className="buttons">
                  <button
                    className="button"
                    onClick={() => handleDecreaseQuantity(isItemInCart)}
                  >
                    {" "}
                    <i className="fa-solid fa-minus"></i>{" "}
                  </button>
                  <h4>{isItemInCart.quantity}</h4>
                  <button
                    className="button"
                    onClick={() => handleIncreaseQuantity(isItemInCart)}
                  >
                    {" "}
                    <i className="fa-solid fa-plus"></i>{" "}
                  </button>
                  <button
                    className="button"
                    onClick={() => handleRemoveFromCart(isItemInCart)}
                  >
                    {" "}
                    <i className="fa-sharp fa-solid fa-trash"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Products;
