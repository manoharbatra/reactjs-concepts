/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

// Memoize the ChildComponent to prevent re-rendering
const ChildComponent = React.memo(({ value }) => {
  console.log("ChildComponent rendering...");
  return <div>Child Component Value: {value}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoize the event handler using useCallback
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <button onClick={incrementCount}>Increment Parent</button>
      <div>Parent Component Count: {count}</div>
      <ChildComponent value={count} />
    </div>
  );
};

export default ParentComponent;
