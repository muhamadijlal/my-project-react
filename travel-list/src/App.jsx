import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import initialItems from "./data/data";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleNextItem = (item) => {
    setItems([...items, item]);
  };

  const handleClearItems = () => {
    setItems([]);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onNextItem={handleNextItem} />
      <PackingList
        onHandleRemoveItem={handleRemoveItem}
        ListItem={items}
        onHandleToggleItem={handleToggleItem}
        onHandleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
