import { FC } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { Container } from '../../Layout';
import './Thanks.css';

const Thanks: FC = () => {
  const location: any = useLocation();
  const navigate = useNavigate();

  if (!location.state?.inApp || location.state?.orderId === undefined) {
    return <Navigate replace to='/' />;
  }

  const handlePaystackPayment = () => {
    // Placeholder Paystack URL; replace with actual Paystack payment link
    const paystackUrl = `https://paystack.com/pay/${location.state.orderId}`;
    window.location.href = paystackUrl;
  };

  return (
    <Container className='thanks-page__container'>
      <div className='thanks-page'>
        <h2 className='thanks-page__title'>Thanks for your purchase</h2>
        <p className='thanks-page__discription'>The order will be sent to you</p>
      </div>
      <hr className='thanks-page__line' />
      <div className='thanks-page__order'>
        <h4 className='thanks-page__order-title'>Your order ID: {location.state.orderId}</h4>
        <p className='thanks-page__order-discription'>You can see your order in the profile section</p>
        <div className='thanks-page__buttons'>
          <Button onClick={handlePaystackPayment}>Pay with Paystack</Button>
          <Button onClick={() => navigate('/profile/order')}>Go To My Order</Button>
        </div>
      </div>
    </Container>
  );
};

export default Thanks;