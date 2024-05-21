import { useState, useEffect } from 'react';
import withLoadingSpinner from './withLoadingSpinner.jsx';

const UserInfo = ({ isLoading }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUserData({ name: 'John Doe', age: 30 });
    }, 2000);
  }, []);

  return (
    <div>
      <h2>User Data:</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

// Enhance UserData with loading spinner using the withLoadingSpinner HOC
const UserDataWithLoadingSpinner = withLoadingSpinner(UserInfo);

export default UserDataWithLoadingSpinner;
