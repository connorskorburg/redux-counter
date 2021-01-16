import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/actions/counterActions'; 

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => dispatch(increaseCounter())}
      >
        + 1
      </button>
      <button
        onClick={() => dispatch(decreaseCounter())}
      >
        - 1
      </button>
    </>
  );
};

export default Counter;