import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header.jsx';
import Main from './component/Main/Main.jsx';
import Footer from './component/Footer/Footer.jsx';
import Cart from './component/Cart/Cart.jsx';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };


  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header 
        onCartClick={() => setShowCart(!showCart)} 
        cartCount={totalItems} 
      />
      
      {showCart ? (
        <Cart 
          items={cartItems} 
          onBack={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      ) : (
        <Main onAddToCart={addToCart} />
      )}
      
      <Footer />
    </>
  );
}

export default App;