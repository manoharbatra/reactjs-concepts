// Define the Higher-Order Component
const withLoadingSpinner = (WrappedComponent) => {
  return function WithLoadingSpinner({ isLoading, ...props }) {
    // If loading, render a loading spinner, otherwise render the wrapped component
    return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };
};

export default withLoadingSpinner;