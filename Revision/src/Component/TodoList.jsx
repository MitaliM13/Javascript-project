import { useState } from "react";

function TodoList() {
  const [listItems, setListItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editIndex !== null) {
        const updateList = [...listItems];
        updateList[editIndex] = input;
        setListItems(updateList);
        setEditIndex(null);
      } else {
        setListItems([...listItems, input]);
      }
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const removeTask = (idx) => {
    const removed = listItems.filter((_, index) => index !== idx);
    setListItems(removed);
  };

  const updateTask = (idx) => {
    setInput(listItems[idx]);
    setEditIndex(idx);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <button type="submit"> {editIndex !== null ? "Update" : "Add"} </button>
      </form>

      <ul>
        {listItems.map((list, index) => (
          <li key={index}>
            {list}
            <button onClick={() => removeTask(index)}>Remove</button>
            <button onClick={() => updateTask(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
