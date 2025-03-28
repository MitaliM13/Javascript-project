import React, { useState } from "react";

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  }); //Any code return inside this will only run at the first render

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleOne;
