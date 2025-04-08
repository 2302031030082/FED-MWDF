import React from 'react';

function JSXIntro() {
  const topic = 'JSX';
  const description = 'a syntax extension for JavaScript used with React';

  return (
    <div>
      <h1>Welcome to {topic}</h1>
      <p>
        {topic} stands for JavaScript XML and is {description}. It allows you to write HTML-like code inside JavaScript!
      </p>
    </div>
  );
}

export default JSXIntro;
