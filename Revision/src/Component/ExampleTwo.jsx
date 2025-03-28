import { useEffect, useState } from "react";

const ExampleTwo = () => {
  const [name, setName] = useState(() => {
    const saveName = localStorage.getItem("name");
    return saveName ? JSON.parse(saveName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const clearName = () => {
    setName("");
  };

  return (
    <div>
      <h1>Enter Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter Your Name..."
      />
      <button onClick={clearName}>Clear</button>
    </div>
  );
};

export default ExampleTwo;
