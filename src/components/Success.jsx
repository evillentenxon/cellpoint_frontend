import React from 'react';
import { Button } from '../styles/Button'; // Assuming Button component is in a separate file
import { NavLink } from 'react-router-dom';

const PaymentSuccessPage = () => {
  return (
    <div style={styles.container}>
      <h1>Your payment is successful!</h1>
      <p>Thank you for choosing us.</p>
      <NavLink to="../products"><Button>Continue Shopping</Button></NavLink>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
};

export default PaymentSuccessPage;
