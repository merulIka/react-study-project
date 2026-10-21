import { useState, useEffect } from 'react';

function Header({ onCartClick, cartCount }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <h3>Дикие Ягодки</h3>
      <span className="header-time">Время: {time}</span>
      
      <button className="cart-btn" onClick={onCartClick}>
        <span>Корзина</span>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>
    </header>
  );
}

export default Header;