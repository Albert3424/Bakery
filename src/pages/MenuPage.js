import React from 'react';
import MenuItem from '../components/MenuItem';
import '../App.css';

function MenuPage({ menuItems, groupedMenuItems, onAddToCart }) {
    return (
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
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        </section>
              ))}
    </main>
      );
    }

    export default MenuPage;