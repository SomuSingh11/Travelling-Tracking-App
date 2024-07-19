/* <--------------------- Stats component (to display packing statistics) ---------------------> */
export function Stats({ items }) {
  // If the items list is empty, display a prompt to add items
  if (!items.length) {
    return (
      <footer className="stats">
        <p>🧺 Your list is empty. Start adding some items! 🧺</p>
      </footer>
    );
  }

  // Calculate the total number of items
  const total = items.length;

  // Calculate the number of packed items
  const packed = items.reduce((acc, item) => (item.packed ? acc + 1 : acc), 0);

  // Calculate the percentage of items that are packed
  const percentage = Math.round((packed / total) * 100);

  // Conditional rendering based on the percentage of packed items
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>📦 Everything is packed! Ready to take off! ✈️ </em>
      ) : (
        <em>
          💼 You have a total of {total} items in your list, and {packed} of
          them are packed ({percentage}%).
        </em>
      )}
    </footer>
  );
}
