import { useState } from 'react';

const ThrottledComponent = () => {
  const [count, setCount] = useState(0);

  // Throttle the incrementCount function to execute at most once every 500ms
  const incrementCountThrottled = () => {
    console.log("throttleTimeout ", throttleTimeout);
    if (!throttleTimeout) {
      setCount(prevCount => prevCount + 1);
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, 50000);
    }
  };

  // Store reference to the timeout
  let throttleTimeout = null;

  return (
    <div>
      <button onClick={incrementCountThrottled}>Increment Count (Throttled)</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default ThrottledComponent;
