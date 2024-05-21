import { useState } from 'react';
import UserDataWithLoadingSpinner from './components/userSpinner/UserInfo';

const UserSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      <h1>UserSpinner</h1>
      <UserDataWithLoadingSpinner isLoading={isLoading} />
    </div>
  );
};

export default UserSpinner;
