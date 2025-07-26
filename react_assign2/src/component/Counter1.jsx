import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';

function Counter1() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>➖</button>
      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(reset())}>🔄 Reset</button>
    </div>
  );
}

export default Counter1;
