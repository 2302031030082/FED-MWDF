import React from 'react';

function FruitList() {
  const fruits = ['Apple 🍎', 'Banana 🍌', 'Grapes 🍇', 'Orange 🍊', 'Pineapple 🍍'];

  return (
    <div>
      <h2>Fruit List 🍓</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}> {fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
