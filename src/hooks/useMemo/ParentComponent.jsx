import { useState, useMemo } from 'react';

// ChildComponent memoizes a computation based on its own state
const ChildComponent = () => {
  const [counter, setCounter] = useState(0);

  // Expensive computation function
  const computeExpensiveValue = (counter) => {
    console.log("Computing expensive value in child...", counter);
    // Simulating a heavy computation
    let result = 0;
    for (let i = 0; i < counter * 1000000; i++) {
      result += i;
    }
    return result;
  };

  // Memoize the expensive computation function
  const memoizedValue = useMemo(() => computeExpensiveValue(counter), [counter]);

  return (
    <div>
      <p>Counter in Child: {counter}</p>
      <p>Computed Value in Child: {memoizedValue}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment Child</button>
    </div>
  );
};

// ParentComponent only maintains its own state
const ParentComponent = () => {
  const [number, setNumber] = useState(0);

  console.log("Computing expensive value in parent...", number);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>{`Value in parent component ${number}`}</div>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
