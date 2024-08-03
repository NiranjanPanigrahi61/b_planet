import React from 'react';
import ButtonLink from './ButtonLink';
import "../css/nav.css";
import Contact from './Contact';
import { Link } from "react-router-dom";
function Nav() {
    const head={
      fontSize:'45px'
      
    };
    const linkStyle = {
      textDecoration: 'none',
      color: 'inherit'
    };
    const para={
      fontSize:'55px',
      color: 'green',
      // marginLeft: '80px'
      
    };
    return (
      <div>
       <div className='homepagecontent1'>
       <Link to="/" style={linkStyle}>
        <h1 style={head}>B.Planet</h1>
      </Link>
          <div className='homepagecontent1'>
          <ButtonLink text="Contact us" link="/contact" />
          </div>
          </div>
          </div>
          );
          }
          export default Nav;