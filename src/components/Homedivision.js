import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import Product from '../pages/Product';
import userimg from '../resouse/user.png';
import home1 from '../resouse/Hero image 1.png';
import home2 from '../resouse/hero image 2.png';


function Homedivision() {
  const navigate = useNavigate();

  const handleUserImageClick = () => {
    navigate('/about');
  };
  const head = {
    fontSize: '45px'
  };
  const para = {
    fontSize: '55px',
    color: 'green',

  };
  return (

    <div className='homedivision'>

      <div id='homepageNavBar'>
        <h1 style={head}>B.planet</h1>
        <div className='homepagecontent1'>
          <ButtonLink text="Contact us" link="/contact" />
          <img src={userimg} alt="User" className="userimg" onClick={handleUserImageClick}
            style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className='homepagecontent'>
        <p style={para}> "As Interesting <br/>as a Plant"</p>
        <div>
        <img src={home2} alt="User" className="homeimg" />
        <img src={home1} alt="User" className="homeimg" />
        </div>
      </div>
      <Product />

    </div>

  );
}

export default Homedivision;
