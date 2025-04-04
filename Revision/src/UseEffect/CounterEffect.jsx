import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

export default CounterEffect;
