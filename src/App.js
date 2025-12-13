import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MenuItem from './components/MenuItem';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import MenuPage from './pages/MenuPage';

function App() {
  const menuItems = [
    { id: 1, name: 'Яблочный пирог', image: '/images/apple-pie.jpg', category: 'Пироги', price: 650 },
    { id: 2, name: 'Вишневый пирог', image: '/images/cherry-pie.jpg', category: 'Пироги', price: 720 },
    { id: 3, name: 'Тыквенный пирог', image: '/images/pumpkin-pie.jpg', category: 'Пироги', price: 500 },

    { id: 4, name: 'Пирожок с яйцом', image: '/images/egg-pirozhok.jpg', category: 'Пирожки', price: 80 },
    { id: 5, name: 'Пирожок с вишней', image: '/images/cherry-pirozhok.jpg', category: 'Пирожки', price: 90 },
    { id: 6, name: 'Пирожок с смородиной', image: '/images/currant-pirozhok.jpg', category: 'Пирожки', price: 120 },

    { id: 7, name: 'Маргарита', image: '/images/pizza-margherita.jpg', category: 'Пицца', price: 450 },
    { id: 8, name: 'Пепперони', image: '/images/pizza-pepperoni.jpg', category: 'Пицца', price: 580 },
    { id: 9, name: 'Гавайская', image: '/images/pizza-cheese.jpg', category: 'Пицца', price: 490 },

    { id: 10, name: 'Эспрессо', image: '/images/espresso.jpg', category: 'Кофе', price: 150 },
    { id: 11, name: 'Капучино', image: '/images/cappuccino.jpg', category: 'Кофе', price: 200 },
    { id: 12, name: 'Латте', image: '/images/latte.jpg', category: 'Кофе', price: 220 },
  ];

const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (itemToAdd) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(cartItem => cartItem.item.id === itemToAdd.id);

      if (existingItem) {
        return prevCartItems.map(cartItem =>
          cartItem.item.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { item: itemToAdd, quantity: 1 }];
      }
    });
  };

  const totalCartQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  const groupedMenuItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
  
    <Router>
      <div className="App">
        <Navbar totalItemsInCart={totalCartQuantity} />

        <Routes>
          
          <Route path="/" element={
            <>
              <header className="App-header">
                <img
                  src="/images/bakeryicon.jpg"
                  alt="Логотип пекарни"
                  className="bakery-logo"
                />
                <h1>Добро пожаловать в нашу пекарню!</h1>
                <p>Насладитесь свежей выпечкой и ароматным кофе.</p>
              </header>

              <main className="App-main">
                <h2>Наше меню</h2>
                {Object.keys(groupedMenuItems).map(categoryName => (
                  <section key={categoryName} className="menu-category-section">
                    <h3 className="category-title">{categoryName}</h3>
                    <div className="menu-container">
                      {groupedMenuItems[categoryName].map(item => (
                        <MenuItem
                          key={item.id}
                          item={item}
                          name={item.name}
                          image={item.image}
                          price={item.price}
                          onAddToCart={handleAddToCart} 
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </main>
            </>
          } />

          <Route path="/menu" element={
            <MenuPage 
              groupedMenuItems={groupedMenuItems} 
              onAddToCart={handleAddToCart} 
            />} 
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />

          <Route path="*" element={<h1>404: Страница не найдена</h1>} />

        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;