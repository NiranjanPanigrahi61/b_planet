import React from "react";
import { Link } from "react-router-dom";
import '../css/contact.css';

function Contact() {
  const textf = {
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #c8a092',
    borderRadius: '4px',
    with:'400px',
  };

  const formStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    marginLeft:'20px',
    justifyContent: 'space-between', /* Ensure form elements are evenly spaced */
  };

  const texta = {
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #c8a092',
    borderRadius: '4px',
    resize: 'none',
    
  };

  const but = {
    padding: '10px',
    backgroundColor: '#c8a092',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <div className="maincontactdiv">
     
     <Link to="/" style={linkStyle}>
        <h1>B.Planet</h1>
      </Link>
      <div className="contactdiv">
        
        <div className="actform">
          <div className="msg">
            <h2>Stay Updated</h2>
            <p>Need to get in touch with us?</p>
            <p><a href="https://facebook.com">Facebook</a></p>
            <p><a href="https://instagram.com">Instagram</a></p>
          </div>
          <div style={formStyle}>
            <form className="cform">
              <input type="text" placeholder="Name" style={textf} />
              <input type="email" placeholder="Email" style={textf} />
              <textarea rows="5" placeholder="Message" style={texta} />
              <button type="submit" style={but}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
