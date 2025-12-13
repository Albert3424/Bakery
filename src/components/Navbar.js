import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar({ totalItemsInCart }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">The Bakery Shop</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/menu">Меню</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link> 
        </li>
        
        <li className="cart-icon-container">
          <Link to="/cart" className="cart-icon-link">
            🛒 Корзина
            {totalItemsInCart > 0 && (
              <span className="cart-count">{totalItemsInCart}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

