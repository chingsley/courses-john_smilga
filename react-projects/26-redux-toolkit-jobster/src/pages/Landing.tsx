import { Link } from 'react-router-dom';
import main from '../assets/images/main3.svg';
import { LandingPageWrapper } from '../assets/wrappers';
import { Logo } from '../components';

const Landing = () => {
  return (
    <LandingPageWrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </LandingPageWrapper>
  );
};

export default Landing;