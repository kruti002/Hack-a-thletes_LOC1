import React, { useState, useEffect } from "react";
import { product } from "./data";

const Ai = () => {
  const [selectedItem1, setSelectedItem1] = useState(0);
  const [selectedItem2, setSelectedItem2] = useState(0);

  const handleItem1Change = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value !== selectedItem2) {
      setSelectedItem1(value);
    } else {
      setSelectedItem1(0);
    }
  };

  const handleItem2Change = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value !== selectedItem1) {
      setSelectedItem2(value);
    } else {
      setSelectedItem2(0);
    }
  };

  const product1 =
    selectedItem1 !== 0
      ? product[selectedItem1]
      : { image: "", price: "N/A", description: "N/A", brand: "N/A" };
  const product2 =
    selectedItem2 !== 0
      ? product[selectedItem2]
      : { image: "", price: "N/A", description: "N/A", brand: "N/A" };

  return (
    <div>
      <div className="container">
        <div className="col-md-9 mx-auto">
          <table className="table">
            <tr>
              <th>Select Product</th>
              <th width="250px">
                <select
                  className="form-control"
                  value={selectedItem1}
                  onChange={handleItem1Change}
                >
                  <option value={0}>-- Select Anyone --</option>
                  {product.map((item, index) => (
                    <option key={index} value={index}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </th>
              <th width="250px">
                <select
                  className="form-control"
                  value={selectedItem2}
                  onChange={handleItem2Change}
                >
                  <option value={0}>-- Select Anyone --</option>
                  {product.map((item, index) => (
                    <option key={index} value={index}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
            <tr>
              <th>Product Image</th>
              <td>
                <img src={product1.image} alt="" />
              </td>
              <td>
                <img src={product2.image} alt="" />
              </td>
            </tr>
            <tr>
              <th>Product Price</th>
              <td>INR {product1.price}</td>
              <td>INR {product2.price}</td>
            </tr>
            <tr>
              <th>Product Description</th>
              <td>{product1.description}</td>
              <td>{product2.description}</td>
            </tr>
            <tr>
              <th>Product Brand</th>
              <td>{product1.brand}</td>
              <td>{product2.brand}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ai;