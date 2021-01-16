import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/actions/counterActions'; 

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
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