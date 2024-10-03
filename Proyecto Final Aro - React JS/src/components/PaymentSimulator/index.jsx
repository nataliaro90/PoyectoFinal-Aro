import React, { useState } from 'react';
import Button from '../Button';

const PaymentSimulator = ({ onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = () => {
    const cardNumberRegex = /^\d{16}$/; 
    const cvvRegex = /^\d{3}$/; 
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; 

    if (!cardNumberRegex.test(cardNumber)) {
      setErrorMessage('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    if (!expiryDateRegex.test(expiryDate)) {
      setErrorMessage('La fecha de vencimiento no es válida. Usa el formato MM/AA.');
      return;
    }

    if (!cvvRegex.test(cvv)) {
      setErrorMessage('El CVV debe tener 3 dígitos.');
      return;
    }

    setErrorMessage(''); 
    onPaymentSuccess(); 
  };

  return (
    <div className="payment-simulator">
      <h2>REALICE SU PAGO</h2>
      <form>
        <div>
          <label>Número de tarjeta</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div>
          <label>Fecha de vencimiento</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/AA"
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            placeholder="123"
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <Button 
          eventHandler={handlePayment} 
          label="Pagar" 
          className="payment-button" 
          type="button" 
        />
      </form>
    </div>
  );
};

export default PaymentSimulator;


