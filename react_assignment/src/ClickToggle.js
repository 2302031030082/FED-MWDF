import React, { useState } from 'react';

function ClickToggle() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>{clicked ? 'Clicked!' : 'Not Clicked'}</h2>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
}

export default ClickToggle;
