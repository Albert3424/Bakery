import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../contexts/CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.qty, 0);

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