import React from 'react';
import { useSelector } from 'react-redux';

const Tracker = () => {
  const count = useSelector(state => state.count);
  return <h1>Count: {count}</h1>
};

export default Tracker;