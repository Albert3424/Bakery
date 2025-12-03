import React from 'react';
import './Navbar.css';

function Navbar({ totalItemsInCart }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">The Bakery Shop</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Главная</a></li>
        <li><a href="/menu">Меню</a></li>
        <li><a href="/about">О нас</a></li>
        <li><a href="/contacts">Контакты</a></li>
        {}
        <li className="cart-icon-container">
          <a href="/cart" className="cart-icon-link">
            🛒 Корзина
            {totalItemsInCart > 0 && (
              <span className="cart-count">{totalItemsInCart}</span>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
