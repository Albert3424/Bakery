import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, updateQty, removeFromCart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return <div>Ваша корзина пуста.</div>;
  }

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: 12 }}>
            <div>
              <strong>{item.name}</strong>
            </div>
            <div>Цена: {item.price} ₽</div>
            <div>
              Количество:
              <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ marginLeft: 8 }}>-</button>
              <span style={{ margin: '0 8px' }}>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <div>
              Подитог: {item.price * item.qty} ₽
            </div>
            <button onClick={() => removeFromCart(item.id)} style={{ marginTop: 6 }}>Удалить</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Итого: {total} ₽</h3>
        <button onClick={clearCart}>Очистить корзину</button>
        <button style={{ marginLeft: 8 }}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Cart;