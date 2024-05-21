import { useState, useEffect } from 'react';

// Define the Higher-Order Component for authentication and loading spinner
const withAuthenticationAndLoading = (WrappedComponent) => {
  return function WithAuthenticationAndLoading(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simulate authentication check
    useEffect(() => {
      // Simulate fetching authentication status
      setTimeout(() => {
        setIsAuthenticated(true);
        setIsLoading(false);
      }, 2000);
    }, []);

    // If loading, render a loading spinner
    if (isLoading) {
      return <div>Loading...</div>;
    }

    // If not authenticated, render a message
    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    // If authenticated and not loading, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuthenticationAndLoading;
