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

function Logo() {
  return <h1>🌴Far Away🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>✈What do you need for your Trip ?</h3>
    </div>
  );
}

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

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

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
