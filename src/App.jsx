// MyComponent.js

import { useState } from 'react';
import axios from './axiosService'; // Import the Axios instance

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    axios.get('/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message || 'An error occurred');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>My Component</h2>
      <button onClick={fetchData} disabled={loading}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
