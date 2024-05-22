import { useState, useMemo } from 'react';

const CookDish = (ingredients) => {
    console.log("Cooking dish...");
    // Simulate cooking time
    // This could be a time-consuming computation
    return ingredients.toUpperCase(); // Just for demonstration
  };

  
const ParentComponent = () => {
  const [order, setOrder] = useState('pizza toppings');

  // Memoize the cookDish function
  const memoizedDish = useMemo(() => CookDish(order), [order]);

  console.log("order" , order, " memoizedDish ", memoizedDish)
  
  return (
    <div>
      <input
        type="text"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        placeholder="Enter your order"
      />
      <p>Current Order: {order}</p>
      <p>Prepared Dish: {memoizedDish}</p>
    </div>
  );
};

export default ParentComponent