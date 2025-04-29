import { FC } from 'react';
import './Footer.css';
import logo from '../../assets/image/fem-logo.png'; // Adjust the path as necessary

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={logo} alt='Afforgadgetables Logo' className='footer__logo' />
        <p className='footer__discription'>
          
        </p>
      </div>
      <div className='sub-footer'>
        <span className='footer__copyright'>
          Copyright 2024{' '}
          <a
            className='footer__link'
            href='https://spur.ng'
            target='_blank'
            rel='noopener noreferrer'
          >
         spurNG
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
