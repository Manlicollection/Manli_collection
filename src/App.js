import React, { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "محصول 1", description: "توضیحات محصول 1", price: 100000 },
    { id: 2, name: "محصول 2", description: "توضیحات محصول 2", price: 150000 },
    { id: 3, name: "محصول 3", description: "توضیحات محصول 3", price: 200000 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>مانلی کالکشن</h1>
      <div>
        <h2>محصولات</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price.toLocaleString()} تومان</p>
            <button onClick={() => addToCart(product)}>افزودن به سبد خرید</button>
          </div>
        ))}
      </div>

      <div>
        <h2>سبد خرید</h2>
        {cart.length === 0 ? (
          <p>سبد خرید خالی است</p>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.price.toLocaleString()} تومان</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
