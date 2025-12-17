import React from 'react';
import MenuItem from '../components/MenuItem';
import '../App.css';

const MenuPage = ({ menuItems }) => {

  const groupedMenuItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <main className="App-main">
      <h2>Наше меню</h2>
      {Object.entries(groupedMenuItems).map(([categoryName, items]) => (
        <section key={categoryName} className="menu-category-section">
          <h3 className="category-title">{categoryName}</h3>
          <div className="menu-container">
            {items.map(item => (
              <MenuItem
                key={item.id}
                item={item} 
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default MenuPage;