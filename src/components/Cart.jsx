function Cart({
  cart,
  cartCount,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  if (cart.length === 0) {
    return (
      <div className="noCart-details">
        <h2>Cart List:</h2>
        <p>No item in the cart</p>
      </div>
    );
  } else {
    const calculateTotal = () => {
      return cart.reduce(
        (acc, item) => acc + item.price * item.quantity * 50,
        0
      );
    };

    const calculateDiscount = (total) => {
      return total * 0.1;
    };

    const calculateFinalPrice = (total) => {
      return total - calculateDiscount(total);
    };

    return (
      <div className="cart-page">
        <div className="cartPage-header">
          <h2>Cart List:</h2>
          <div>
            <h4>Final Price ({cartCount}):</h4>
            <h4> ₹{calculateFinalPrice(calculateTotal())} </h4>
          </div>
        </div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-details">
              <h2>{item.title}</h2>
              <div>
                {item.quantity === 1 ? (
                  <div className="buttons">
                    <button
                      className="button"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="button"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                ) : (
                  <div className="buttons">
                    <button
                      className="button"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <p className="text-gray-600">{item.quantity}</p>
                    <button
                      className="button"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button
                      className="button"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="item-price">
              <h3> Price ₹{item.price * item.quantity * 50} </h3>
            </div>
          </div>
        ))}
        <div className="total">
          <h4>Discount: 10%</h4>
          <div>
            <h4>Final Price ({cartCount}):</h4>
            <h4>&nbsp;₹ {calculateFinalPrice(calculateTotal())} </h4>
          </div>
          <div>
            <p>Subtotal: </p>
            <p className="striked-text">&nbsp;₹&nbsp;{calculateTotal()} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
