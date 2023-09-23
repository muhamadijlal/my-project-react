import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import products from "./data/products";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const EMPTY_CART = {
  items: [],
  total: 0,
};

function App() {
  const [cart, setCart] = useState(EMPTY_CART);

  const addItemToCart = (item) => {
    const itemExist = cart.items.find((i) => i.id === item.id);

    if (!itemExist) {
      setCart((prevCart) => ({
        items: [...prevCart.items, { ...item, qty: 1 }],
        total: prevCart.total + item.price,
      }));

      return;
    }

    setCart((prevCart) => ({
      items: prevCart.items.map((i) => {
        if (i.id === item.id) {
          return { ...i, qty: i.qty + 1 };
        }

        return i;
      }),
      total: prevCart.total + item.price,
    }));
  };

  return (
    <>
      <Navbar items={cart.items} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/products"
          element={
            <Products
              addItemToCart={addItemToCart}
              products={products}
              cart={cart}
            />
          }
        ></Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>cd
      </Routes>
    </>
  );
}

export default App;
