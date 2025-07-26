import React, { useRef, useState, useEffect } from 'react';

function RefCounter() {
  const renderCount = useRef(1);       // stores render count
  const nameRef = useRef('');          // stores input value without re-render
  const [dummyState, setDummyState] = useState(0); // dummy state to force rerender

  useEffect(() => {
    renderCount.current += 1;
  });

  const handleInputChange = (e) => {
    nameRef.current = e.target.value;
    // Not using setState here avoids re-render
  };

  const forceReRender = () => {
    setDummyState(dummyState + 1); // used only to test re-rendering
  };

  return (
    <div>
      <h2>useRef Example to Avoid Re-renders</h2>
      <input type="text" onChange={handleInputChange} placeholder="Type your name" />
      <p>Name stored in ref: <strong>{nameRef.current}</strong></p>
      <p>Component Rendered: <strong>{renderCount.current}</strong> times</p>
      <button onClick={forceReRender}>Force Re-render</button>
    </div>
  );
}

export default RefCounter;
