// Module using Module Pattern
const MyComponent = (function() {
    // Private variables and functions
    let privateVariable = 0;
  
    function increment() {
      privateVariable++;
      console.log("Incremented: " + privateVariable);
    }
  
    function decrement() {
      privateVariable--;
      console.log("Decremented: " + privateVariable);
    }
  
    // Public API
    return {
      render: function() {
        return (
          <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>Counter: {privateVariable}</p>
          </div>
        );
      }
    };
  })();
  
  export default MyComponent;
  