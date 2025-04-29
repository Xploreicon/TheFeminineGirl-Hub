import { Button } from '../../components';
import { Container } from '../../Layout';
import './About.css';

const About: React.FC = () => {
  return (
    <Container>
      <div className='about'>
        <h2 className='about__title'>FeminineGirlHub</h2>
        
        <p className='about__discription'>Our mission is to enhance your self-care experience by offering you a wide range of high-quality, thoughtfully selected and pampering self-care treats.

</p>
        <Button className='about__button secoundry'>
          <a href="https://wa.me/+2347015885055" >Customer Care</a>
        </Button>
      </div>
      <h4 className='about__autur'>developed By Spur.ng</h4>
    </Container>
  );
};

export default About;
