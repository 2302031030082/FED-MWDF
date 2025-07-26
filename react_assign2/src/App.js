import React from 'react';
import FruitList from './components/FruitList';
import UserList from './components/UserList';
import Counter from './components/Counter';
import UserFetcher from './components/UserFetcher';
import Counter1 from './components/Counter1';
import RefCounter from './components/RefCounter';
function App() {
  return (
    <div className="App">
      <h1>Lists and Keys Assigmnent</h1>
      <h2>Task_1:</h2>
      <FruitList /> <hr/>
      <h2>Task_2:</h2>
      <UserList /> <hr/>
     

     <h1>Hooks (useState, useEffect, useReducer, useMemo, useRef, useCallback) </h1>
     <h2>Task_1:</h2>
     <Counter/> <hr/>
     <h2>Task_2:</h2>
     <UserFetcher/> <hr/>
     <h2>Task_3:</h2>
      <Counter1 /> <hr/>
      <h2>Task_4:</h2>
      <RefCounter /> <hr/>

    </div>
  );
}

export default App;
