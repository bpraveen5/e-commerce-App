import React from 'react';
import './ClothingCollection.css';

const ClothingCollection = () => {
  const collections = [
    {
      category: 'Men',
      description: 'Bold • Modern • Classic',
      brands: ['Nike', 'Adidas', 'Zara', 'H&M'],
      image: 'https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-black-jacket-jeans-fashion-male-posing-studio-near-grey-wall_158538-24006.jpg?t=st=1744822264~exp=1744825864~hmac=d2d066eaceb4baa3ffaa2f180fa33e8b8577631190861f8e5cfd64211899094c&w=1060',
    },
    {
      category: 'Women',
      description: 'Elegant • Chic • Strong',
      brands: ['Forever 21', 'Gucci', 'Zara', 'H&M'],
      image: 'https://img.freepik.com/free-photo/adorable-ladies-dancing-pink-background-studio-shot-joyful-friends-having-fun-together_197531-17392.jpg?ga=GA1.1.308886809.1744821727&semt=ais_hybrid&w=740',
    },
    {
      category: 'Kids',
      description: 'Fun • Colorful • Cozy',
      brands: ['Carter\'s', 'GAP Kids', 'H&M', 'Mothercare'],
      image: 'https://img.freepik.com/free-photo/full-shot-kids-posing-together_23-2149853383.jpg?t=st=1744822506~exp=1744826106~hmac=46c04f3b32b0cb8dbd79beb49030034426b14537394fa74d7fe15d00ecfeead5&w=740',
    },
  ];

  return (
    <div className="collection-page">
      <header className="collection-header">
        <h1>Our Clothing Collection</h1>
        <p>Explore the latest from top brands in fashion</p>
      </header>

      <div className="collections-wrapper">
        {collections.map((item, index) => (
          <div className="collection-card" key={index}>
            <img src={item.image} alt={`${item.category} fashion`} />
            <div className="collection-info">
              <h2>{item.category}'s Collection</h2>
              <p className="desc">{item.description}</p>
              <div className="brands">
                <strong>Top Brands:</strong>
                <ul>
                  {item.brands.map((brand, i) => (
                    <li key={i}>{brand}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="collection-footer-list">
  <div className="footer-container">
    <div className="footer-column">
      <h4>Company</h4>
      <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Press</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Customer Service</h4>
      <ul>
        <li>Contact Us</li>
        <li>Returns</li>
        <li>Order Status</li>
        <li>FAQs</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Categories</h4>
      <ul>
        <li>Men's Fashion</li>
        <li>Women's Fashion</li>
        <li>Kids Collection</li>
        <li>Accessories</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Connect</h4>
      <ul>
        <li>Email: support@trendvibe.com</li>
        <li>Phone: +91 9014512446</li>
        <li>Instagram</li>
        <li>Facebook</li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 TrendVibe. All rights reserved.</p>
  </div>
</footer>

       
    </div>
  );
};

export default ClothingCollection;
