import { useState } from 'react';

const ChildComponent = ({ value }) => {
  console.log("ChildComponent rendering...");
  return <div>Child Component Value: {value}</div>;
};

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
