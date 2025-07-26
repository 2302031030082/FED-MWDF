import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initial count is 0

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={increment}>➕ Increment</button>
    </div>
  );
}

export default Counter;
