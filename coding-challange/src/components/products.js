import React, { useEffect, useReducer } from 'react';
import rootReducer from '../redux/reducer/userReducer';

// Define action types
const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

function Products() {
  const [productList, dispatch] = useReducer(rootReducer, []);

  useEffect(() => {
    fetch('./sample.json')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: SET_PRODUCT_LIST, payload: data });
      })
      .catch(error => {
        console.error('Error fetching product list:', error);
      });
  }, []);

  const deleteProduct = productId => {
    dispatch({ type: DELETE_PRODUCT, payload: productId });
  };

  const renderProductList = () => {
    if (productList.length === 0) {
      return <div>No products found.</div>;
    }

    return productList?.map(product => (
      <tr key={product?.id}>
        <td>{product?.id}</td>
        <td>{product?.name}</td>
        <td>
          <div className="media align-items-center">
            <div className="product_thumb">
              <img src={product.variation[0].productImage} alt="Product" />
            </div>
            <div className="media-body product_des">
              <h6 className="product_name">{product.productName}</h6>
            </div>
          </div>
        </td>
        <td>{product.category}</td>
        <td>{product.variation[0].price}</td>
        <td>{product.variation[0].stock}</td>
        <td>{product.status}</td>
        <td className="actions">
          <div className="dropdown dropdown_wrapper">
            <button className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src="delete_icon.png" alt="Delete" /> {/* Replace with your delete icon */}
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderProductList()}</tbody>
      </table>
    </div>
  );
}

export default Products;
