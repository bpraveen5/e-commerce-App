import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get('http://localhost:8080/api/orders/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setOrders(res.data);
  };

  const handleRelease = async (id) => {
    await axios.put(`http://localhost:8080/api/orders/release/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    fetchOrders(); // Refresh list
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User Email</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.userEmail}</td>
              <td>{order.productName}</td>
              <td>₹{order.productPrice}</td>
              <td>{order.released ? 'Released' : 'Pending'}</td>
              <td>
                {!order.released && (
                  <button onClick={() => handleRelease(order.id)}>Release</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewOrders;
