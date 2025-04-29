import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../Layout';
import phoneImage from '../../assets/image/personalcare-category.png';
import consoleImage from '../../assets/image/painrelief-category.png';
import accImage from '../../assets/image/sheet-catagory.png';
import headphoneImage from '../../assets/image/bedroom-catagory.png';
import './Catagory.css';

const Category: FC = () => {
  return (
    <Container>
      <div className='catagory'>
        <Link className='catagory__link' to='personalcare'>
          <img className='catagory__image' src={phoneImage} alt="PersonalCare category" />
          <h4 className='catagory__text'>Personal Care</h4>
        </Link>
        <Link className='catagory__link' to='painrelief'>
          <img className='catagory__image' src={headphoneImage} alt="Painrelief category" />
          <h4 className='catagory__text'>Pain Relief</h4>
        </Link>
        <Link className='catagory__link' to='sheetmask'>
          <img className='catagory__image' src={accImage} alt="Sheetmasks category" />
          <h4 className='catagory__text'>Sheet Masks</h4>
        </Link>
        <Link className='catagory__link' to='bedroom'> {/* Fixed typo */}
          <img className='catagory__image' src={consoleImage} alt="Bedroom category" />
          <h4 className='catagory__text'>Bedroom Essentials</h4>
        </Link>
      </div>
    </Container>
  );
};

export default Category;
