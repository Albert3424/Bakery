import MenuItem from './components/MenuItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import MenuPage from './pages/MenuPage';

const menuItemsData = [
  { id: 1, name: 'Яблочный пирог', image: '/images/apple-pie.jpg', category: 'Пироги', price: 650 },
  { id: 2, name: 'Вишневый пирог', image: '/images/cherry-pie.jpg', category: 'Пироги', price: 720 },
  { id: 3, name: 'Тыквенный пирог', image: '/images/pumpkin-pie.jpg', category: 'Пироги', price: 500 },
  { id: 4, name: 'Мясной пирог', image: '/images/meat-pie.jpg', category: 'Пироги', price: 625 },

  { id: 5, name: 'Пирожок с яйцом', image: '/images/egg-pirozhok.jpg', category: 'Пирожки', price: 80 },
  { id: 6, name: 'Пирожок с вишней', image: '/images/cherry-pirozhok.jpg', category: 'Пирожки', price: 90 },
  { id: 7, name: 'Пирожок с смородиной', image: '/images/currant-pirozhok.jpg', category: 'Пирожки', price: 120 },

  { id: 8, name: 'Маргарита', image: '/images/pizza-margherita.jpg', category: 'Пицца', price: 450 },
  { id: 9, name: 'Пепперони', image: '/images/pizza-pepperoni.jpg', category: 'Пицца', price: 580 },
  { id: 10, name: 'Гавайская', image: '/images/pizza-cheese.jpg', category: 'Пицца', price: 490 },

  { id: 11, name: 'Эспрессо', image: '/images/espresso.jpg', category: 'Кофе', price: 150 },
  { id: 12, name: 'Капучино', image: '/images/cappuccino.jpg', category: 'Кофе', price: 200 },
  { id: 13, name: 'Латте', image: '/images/latte.jpg', category: 'Кофе', price: 220 },
];

function App() {
  const groupedMenuItems = menuItemsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <CartProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar /> 

          <Routes>
            <Route path="/" element={
              <>
                <header className="App-header">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bakeryicon.jpg"}
                    alt="Логотип пекарни"
                    className="bakery-logo"
                  />
                  <h1>Добро пожаловать в нашу пекарню!</h1>
                  <p>Насладитесь свежей выпечкой и ароматным кофе.</p>
                </header>
                <main>
                  <section className="featured-categories">
                    <h2>Наши хиты</h2>
                    {Object.entries(groupedMenuItems).slice(0, 3).map(([category, items]) => (
                      <div key={category} className="category-section">
                        <h3>{category}</h3>
                        <div className="menu-items-grid">
                          {items.slice(0, 3).map(item => (
                            <MenuItem 
                              key={item.id}
                              name={item.name}
                              image={item.image}
                              price={item.price}
                              item={item}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </section>
                </main>
                <Footer />
              </>
            } />

            <Route path="/menu" element={
              <>
                <MenuPage menuItems={menuItemsData} />
                <Footer />
              </>
            } />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={
              <>
                <Cart />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;