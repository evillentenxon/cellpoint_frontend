import React, { useState } from 'react';
import { useData } from '../DataContext';
import styled from 'styled-components';
import Footer from './Footer';
import { KhaltiButton } from '../styles/Button';

function Cart() {
  const { selectedProducts } = useData();
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);// Use array.reduce to calculate the total price

  const handleClick = async () => {
    setLoading(true); // Set loading to true when the button is clicked
    try {
      const response = await fetch('http://localhost:4000/postData/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '831c7083d7f44fe280b3c15cce1dd053'
        },
        body: JSON.stringify({
          "return_url": "http://localhost:3000/success",
          "website_url": "https://example.com/",
          "amount": 2000,
          "purchase_order_id": "test12",
          "purchase_order_name": "test",
          "customer_info": {
            "name": "Khalti Bahadur",
            "email": "example@gmail.com",
            "phone": "9800000123"
          },
          "amount_breakdown": [
            {
              "label": "Mark Price",
              "amount": 1700
            },
            {
              "label": "Delivery Charge",
              "amount": 300
            }
          ],
          "product_details": [
            {
              "identity": "1234567890",
              "name": "Khalti logo",
              "total_price": 2000,
              "quantity": 1,
              "unit_price": 2000
            }
          ]
        })
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setPaymentUrl(responseData.payment_url); // Set the payment URL in state
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false); // Set loading to false after response is received
  };

  // Redirect to payment URL once it's available
  if (paymentUrl) {
    window.location.href = paymentUrl;
  }

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
      <KhaltiButton onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Pay with khalti'}
      </KhaltiButton>

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
