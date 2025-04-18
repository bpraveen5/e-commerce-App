import React from 'react';
import './UserDashboard.css';

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="user-dashboard-container">
      <div className="user-dashboard-card">
        <h2>Welcome to User, {user?.name} 👋</h2>
        <ul>
          <li><a href="/products">🛍️ View Available Products</a></li>
          <li><a href="/my-orders">📦 My Orders</a></li>
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;
