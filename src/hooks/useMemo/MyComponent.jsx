import { useState, useMemo } from 'react';

const MyComponent = () => {
  const [number, setNumber] = useState(0 || undefined);

  // Expensive computation function
  const computeExpensiveValue = (number) => {
    console.log("Computing expensive value...", number);
    // Simulating a heavy computation
    let result = 0;
    for (let i = 0; i < number * 1000000; i++) {
      result += i;
    }
    return result;
  };

  // Memoize the expensive computation function
  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Computed Value: {memoizedValue}</p>
    </div>
  );
};

export default MyComponent;
