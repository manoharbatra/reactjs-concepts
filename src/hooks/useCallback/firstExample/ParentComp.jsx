/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import './parentComp.css'

// Child component representing a container
const Container = React.memo(({ id, title, value, handleChange }) => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);


  console.log(`Container ${id} rendering... ${todos.length}`);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>{title}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(id, e.target.value)}
      />
      <button onClick={fetchTodos}>Fetch Todos</button>
      {loading && <p>Loading todos...</p>}
      {todos.length > 0 && <h1>{todos.length}</h1>}
    </div>
  );
});

const ParentComp = () => {
  // State containing an array of 3 objects
  const [containers, setContainers] = React.useState([
    { id: 1, title: 'Container 1', value: '' },
    { id: 2, title: 'Container 2', value: '' },
    { id: 3, title: 'Container 3', value: '' },
  ]);

  // Function to handle changes in container values
  const handleChange = React.useCallback((id, newValue) => {
    setContainers((prevContainers) =>
      prevContainers.map((container) =>
        container.id === id ? { ...container, value: newValue } : container
      )
    );
  }, []);

  return (
    <div className="App">
      <h1>Containers</h1>
      <div className="container-wrapper">
        {/* Map through the array of containers and render each as a child component */}
        {containers.map((container) => (
          <Container
            key={container.id}
            id={container.id}
            title={container.title}
            value={container.value}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentComp;
