import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`http://localhost:8080/api/cart/user/${user.id}`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handlePlaceOrder = () => {
    const total = cartItems.reduce((sum, item) => sum + item.product.price, 0);

    const order = {
      user,
      cartItems,
      totalAmount: total
    };

    axios.post('http://localhost:8080/api/orders/place', order)
      .then(() => alert('Order placed successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.product.name} - ₹{item.product.price}
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default OrderForm;
