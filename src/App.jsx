import { useState } from "react";

/* eslint-disable react/prop-types */

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

/* <--------------------- Logo component ---------------------> */

function Logo() {
  return <h1>🌴Far Away🧳</h1>;
}

/* <--------------------- Form component (for adding new items) ---------------------> */

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // Creating a new item based on current value of state variables of form
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItems(newItem);

    setQuantity(1);
    setDescription("");

    //console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>✈What do you need for your Trip ?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="add Item here..."
      ></input>
      <button>Add</button>
    </form>
  );
}

/* <--------------------- PackingList component (to display the list of items) ---------------------> */

function PackingList({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}

/* <--------------------- Stats component (to display packing statistics) ---------------------> */

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

/* <--------------------- Item component (to display individual items) ---------------------> */

function Item({ item, onDeleteItems, onToggleItems }) {
  //Style to strike through packe items
  const style = { textDecoration: "line-through" };
  return (
    <li className={item.packed ? "toogle" : null}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? style : null}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>🗑️</button>
    </li>
  );
}
