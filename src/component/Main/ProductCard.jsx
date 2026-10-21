function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <img className="prod" src={product.image} alt={product.name} />
      <h2 className="name">{product.name}</h2>
      <p className="info">{product.description}</p>
      <button className="button" onClick={() => onAddToCart(product)}>
        Купить
      </button>
    </div>
  );
}

export default ProductCard;