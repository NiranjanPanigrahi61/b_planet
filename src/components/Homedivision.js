import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import Product from '../pages/Product';
import userimg from '../resouse/user1.jpg';
import home1 from'../resouse/Hero image 1.png';
import home2 from'../resouse/hero image 2.png';
import LogoutButton from './LogoutButton';


function Homedivision() {
  const navigate = useNavigate();

  const handleUserImageClick = () => {
    navigate('/about');
  };
  const head={
    fontSize:'45px'
  };
  const para={
    fontSize:'55px',
    color: 'green',
    
  };
  return (
   
    <div className='homedivision'>
     
      <div className='homepagecontent'>
        <h1 style={head}>B.planet</h1>
        <div className='homepagecontent1'>
        <ButtonLink text="Contact us" link="/contact" />
        <img src={userimg} alt="User" className="userimg" onClick={handleUserImageClick} 
              style={{ cursor: 'pointer' }}  />
             </div>
        <LogoutButton />
      </div>
      <div className='homepagecontent'>
      <p style={para}> "As Interesting as a Plant"</p>
        <img src={home2} alt="User" className="homeimg" />
        <img src={home1} alt="User" className="homeimg" /> 
        </div>
    <Product />
   
    </div>
    
  );
}

export default Homedivision;
