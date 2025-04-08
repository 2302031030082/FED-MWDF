import React from 'react';

function UserCard({ name, age, location }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default UserCard;
