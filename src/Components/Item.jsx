/* <--------------------- Item component (to display individual items) ---------------------> */

export function Item({ item, onDeleteItems, onToggleItems }) {
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
