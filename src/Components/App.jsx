import { useState } from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import { PackingList } from "./PackingList.jsx";
import { Stats } from "./Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItems(itemId) {
    setItems((items) => items.filter((item) => itemId !== item.id));
  }

  function handleToggleItem(itemId) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    if (!items.length) {
      alert("Your list is already empty!");
    } else {
      const confirmed = window.confirm(
        "Are you sure you want to remove all items from your list?"
      );
      if (confirmed) {
        setItems([]);
        alert("All items have been cleared from your list.");
      }
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
