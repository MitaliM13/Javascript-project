import { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setList((prev) => [...prev, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Item Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="quantity"
          value={quantity}
          placeholder="Item quantity..."
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
