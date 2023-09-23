import "./App.css";
import { useState } from "react";
import ListItems from "./components/ListItems";
import InputListItem from "./components/InputListItem";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [items, setItems] = useState([]);

  const handleNextItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Header />

      <InputListItem onNextItem={handleNextItem} />

      <ListItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />

      <Footer items={items} />
    </div>
  );
};

export default App;
