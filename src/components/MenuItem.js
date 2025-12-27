import React, { useContext } from 'react';
import './MenuItem.css';
import { CartContext } from '../contexts/CartContext';

function MenuItem({ name, image, price, item }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCartClick = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
    }, 1);

    console.log(`${item.name} добавлен в корзину.`);
  };

  return (
    <div className="menu-item">
      <img src={process.env.PUBLIC_URL + image} alt={name} className="menu-item-image" />
      <h3 className="menu-item-name">{name}</h3>
      <div className="menu-item-details">
        <p className="menu-item-price">{price} ₽</p>
        <button className="add-to-cart-button" onClick={handleAddToCartClick}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default MenuItem;