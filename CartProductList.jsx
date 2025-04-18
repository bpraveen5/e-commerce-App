import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartProduct.css';

function CartProductList() {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:8080/api/cart/user/${user.id}`)
        .then(res => setCartItems(res.data))
        .catch(err => console.error(err));
    }
  }, []);

  const removeItem = (id) => {
    axios.delete(`http://localhost:8080/api/cart/remove/${id}`)
      .then(() => setCartItems(cartItems.filter(item => item.id !== id)));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>
      <div className="cart-grid">
        {cartItems.map(item => (
          <div key={item.id} className="cart-card">
            <img src={item.imageUrl} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>₹{item.productPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartProductList;
