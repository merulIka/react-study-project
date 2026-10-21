import ProductCard from './ProductCard';
import img95 from '../img/95.jpg';
import img90 from '../img/90.jpg';
import cortez from '../img/cortez.jpg';
import msc from '../img/msc.jpg';

function Main({ onAddToCart }) {
  const products = [
    {
      id: 1,
      image: img95,
      name: 'Nike Air Max 95',
      price: 12990, // Ориентир по цене на Poizon [citation:1][citation:9]
      description: 'Nike Air Max 95 — это легендарные кроссовки, созданные дизайнером Серхио Лозано и выпущенные в 1995 году. Отличный выбор для тех, кто ценит удобство и качество.',
    },
    {
      id: 2,
      image: img90,
      name: 'Nike Air Max 90',
      price: 11990, // Средняя цена по предложениям Poizon [citation:2]
      description: 'Nike Air Max 90 — это легендарные кроссовки, созданные дизайнером Серхио Лозано и выпущенные в 1995 году. Отличный выбор для тех, кто ценит удобство и качество.',
    },
    {
      id: 3,
      image: cortez,
      name: 'Nike Cortez',
      price: 7500, // Популярная цена на Poizon [citation:3][citation:7]
      description: 'Nike Cortez — это культовая модель кроссовок, с которой началась история бренда Nike как самостоятельного производителя обуви. Отличный выбор для тех, кто ценит удобство и качество.',
    },
    {
      id: 4,
      image: msc,
      name: 'Adidas Moscow',
      price: 10500, // Усреднённая цена по линейке Adidas Originals [citation:4]
      description: 'Adidas Moscow — это культовая линейка спортивной обуви от немецкого бренда adidas, посвящённая Москве и имеющая долгую историю в России. Отличный выбор для тех, кто ценит удобство и качество.',
    },
  ];

  return (
    <main className="main">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;