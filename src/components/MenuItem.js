import React from 'react';
import './MenuItem.css';
<img src="/images/apple-pie.jpg" alt="Яблочный пирог" />

function MenuItem({ name, image, price, onAddToCart, item }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <h3 className="menu-item-name">{name}</h3>
      <div className="menu-item-details">
        <p className="menu-item-price">{price} ₽</p>
        {}
        <button className="add-to-cart-button" onClick={() => onAddToCart(item)}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
