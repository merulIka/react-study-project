function Cart({ items, onBack, onUpdateQuantity, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="main">
      <h1 className="cart-title">Корзина</h1>

      {items.length === 0 ? (
        <p className="cart-empty">Ваша корзина пуста</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price} ₽</p>
                </div>
                
                <div className="cart-item-controls">
                  <button 
                    className="qty-btn" 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="qty-count">{item.quantity}</span>
                  <button 
                    className="qty-btn" 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  {item.price * item.quantity} ₽
                </div>

                <button 
                  className="remove-btn" 
                  onClick={() => onRemove(item.id)}
                  title="Удалить товар"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Итого:</span>
            <strong>{total} ₽</strong>
          </div>
        </>
      )}

      <button className="cart-back" onClick={onBack}>
        ← Вернуться к покупкам
      </button>
    </main>
  );
}

export default Cart;