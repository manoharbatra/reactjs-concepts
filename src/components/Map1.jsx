import {numbers} from '../constants';
import './mapPrototype';

const Map1 = () => {
  return (
    <div>
      <ul> 
        {numbers.myMap((number) => (
         <li key={number}>{number * 2}</li> ))}
      </ul>
    </div>
  )
}

export default Map1