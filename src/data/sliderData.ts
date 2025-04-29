import slider1 from '../assets/image/slider-1.png';
import slider2 from '../assets/image/slider-2.png';
import slider3 from '../assets/image/slider-3.png';

interface ISliderData {
  imgUrl: string;
  title: string;
  description: string;
  shopUrl: string;
  productUrl: string;
}
const sliderData: ISliderData[] = [
  {
    imgUrl: slider1,
    title: 'The Massage Gun.',
    description:
      'Boost your retail sales with our top-selling massage guns! High-demand, premium quality, and perfect for wellness-focused customers. Partner with The FeminineGirl Hub for exclusive B2B deals.',
    shopUrl: '#',
    productUrl: '#',
  },
  {
    imgUrl: slider2,
    title: 'Beauty of self care, one product at a time',
    description:
      'Amazing deals for B2B and B2C customers.  ',
    shopUrl: '#',
    productUrl: '#',
  },
  {
    imgUrl: slider3,
    title: ' Stock up on face, hand, foot, and lip care.',
    description:
      'Premium quality for spa-like experiences. Join our B2B network for consistent supply and competitive rates.',
    shopUrl: '#',
    productUrl: '#',
  },
];

export default sliderData;
