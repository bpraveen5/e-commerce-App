import React from 'react';
import './AdminDashboard.css';
function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  return (
    <div className="admin-dashboard">
  <h2>Welcome Admin, {user?.name} 👋</h2>
  <ul>
    <li><a href="/add-product">Add Product</a></li>
    <li><a href="/view-orders">View User Orders</a></li>
    <li><a href="/release-orders">Release Orders</a></li>
  </ul>
</div>
  );
}

export default AdminDashboard;
