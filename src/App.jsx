/* eslint-disable react/prop-types */
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

/* <--------------------- Logo component ---------------------> */

function Logo() {
  return <h1>🌴Far Away🧳</h1>;
}

/* <--------------------- Form component (for adding new items) ---------------------> */

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>✈What do you need for your Trip ?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input type="text" placeholder="add Item here..."></input>
      <button>Add</button>
    </form>
  );
}

/* <--------------------- PackingList component (to display the list of items) ---------------------> */

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
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

function Item({ item }) {
  //Style to strike through packe items
  const style = { textDecoration: "line-through" };
  return (
    <li>
      <span style={item.packed ? style : null}>
        {item.quantity} {item.description}
      </span>
      <button>🗑️</button>
    </li>
  );
}
