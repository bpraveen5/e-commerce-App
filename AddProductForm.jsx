import { useState } from 'react';
import axios from 'axios';

function AddProductForm() {
    const [product, setProduct] = useState({
        name: '', description: '', price: '', imageUrl: '', rating: ''
      });
      

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/products/add', product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Product added!');
      setProduct({ name: '', description: '', price: '', imageUrl: '', rating: '' }); // Reset form
    } catch (err) {
      alert('Failed to add product');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="Image URL" required />
        <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
        <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
        <input name="rating" value={product.rating} onChange={handleChange} placeholder="Rating" required />
        <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProductForm;
