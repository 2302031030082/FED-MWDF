import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
