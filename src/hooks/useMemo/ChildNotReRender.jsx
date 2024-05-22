/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from 'react';

// Memoize the ChildComponent to prevent re-rendering
const ChildComponent = React.memo(({ value }) => {
  console.log("ChildComponent renderinggg...");
  return <div>Child Component Value: {value}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <div>Parent Component Count: {count}</div>
      <ChildComponent value={count} />
    </div>
  );
};

export default ParentComponent;
