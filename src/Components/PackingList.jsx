import { useState } from "react";
import { Item } from "./Item";

/* <--------------------- PackingList component (to display the list of items) ---------------------> */
export function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // No sorting, use input order
  if (sortBy === "input") sortedItems = items;

  // Sort by description in alphabetical order
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // Sort by packed status (false before true)
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">📝 Sort by Input Order</option>
          <option value="description">🗂️ Sort by Description</option>
          <option value="packed">✔️ Sort by Packed Status</option>
        </select>

        <button onClick={onClearItems}>Clear List 🚮</button>
      </div>
    </div>
  );
}
