import { useRef } from "react";
import PropTypes from "prop-types";

// Custom hook for generating unique IDs
const useId = () => {
  const idRef = useRef(0);
  return () => {
    idRef.current += 1;
    return idRef.current;
  };
};

const ListComponent = ({ items }) => {
  // Use the useId hook to generate unique IDs
  const generateId = useId();

  return (
    <ul>
      {items.map((item) => (
        <li key={generateId()}>{item}</li>
      ))}
    </ul>
  );
};

// PropTypes validation for items prop
ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Test1 = () => {
  const items = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div>
      <h1>Fruits</h1>
      <ListComponent items={items} />
    </div>
  );
};

export default Test1;
