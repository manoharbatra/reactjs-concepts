import './filterPrototype'
import { products } from "../constants"
const Filter1 = () => {

  const filteredproducts = products.myFilter((product) => product.price > 300);
  return (
    <div>
        <ul>
            {filteredproducts.map((product) => 
            <li key={product.id}>{product.name} - ${product.price}</li>)}
        </ul>
    </div>
  )
}

export default Filter1