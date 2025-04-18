import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // Assuming you have some CSS for styling

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/getall')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-container">
    <h2>Available Products</h2>
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-card-content">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">₹{product.price}</p>
          <div className="rating">
  <span className="star">★</span>
  <span className="star">★</span>
  <span className="star">★</span>
  <span className="star">★</span>
  <span className="star gray">★</span>
</div>
<a href='/my-orders' className="add-to-cart">Add to Cart</a>
        </div>
      </div>
      
      ))}
    </div>
  </div>
  );
}

export default ProductList;
