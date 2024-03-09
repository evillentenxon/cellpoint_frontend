import React from 'react';
import { useData } from '../DataContext';
import styled from 'styled-components';
import Footer from './Footer';

function Cart() {
  const { selectedProducts } = useData();

  // Use array.reduce to calculate the total price
  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);

  return (
    <Div>
      <h2>Cart items</h2>
      <table width="50%">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>
                <img src={`/images/${product.image}`} alt="" />
                {product.title}
              </td>
              <td>{product.brand}</td>
              <td>Rs.{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><b>Total Price: Rs.{totalPrice.toFixed(2)}</b></p>

      <Footer />
    </Div>
  );
}

export default Cart;

const Div = styled.div`
  text-align: center;
  table {
    margin: 0 auto 100px auto;
    th {
      background-color: #000;
      color: #fff;
      height: 35px;
    }
    td {
      border-bottom: 1px solid #999;
      vertical-align: center;
    }
  }

  img {
    width: 50px;
  }
`;
