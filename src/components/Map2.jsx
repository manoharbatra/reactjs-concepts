import {products} from '../constants'

const Map2 = () => {
  return (
    <div>
        <h2>Product Items</h2>
        <table>
            <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product) => (
                  <tr key={product.id}>
                  <th>{product.id}</th>
                  <th>{product.name}</th>
                  <th>{product.price}</th>
                  </tr>
                ))
              }
            </tbody>
        </table>

    </div>
  )
}

export default Map2