import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
// Placeholder for next steps
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import ViewOrders from './components/ViewOrders';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingCOllection from './components/brands/ClothingCollection';
import ProtectedRoute from './components/ProtectedRoute';
import CartProductList from './components/cartProduct/CartProductList';

const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Hero />
    <ClothingCOllection />
      <Routes>
        
      <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/view-orders" element={<ViewOrders />} />
        <Route path="/my-orders" element={<CartProductList />} />
        {/* <Route path="/clothing" element={<ClothingCOllection />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
