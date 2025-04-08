import React, { useState } from 'react';

function LiveInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          style={{ padding: '10px', fontSize: '16px', width: '250px' }}
        />
      </form>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        You typed: {inputValue}
      </p>
    </div>
  );
}

export default LiveInput;
