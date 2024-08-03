import React from "react";
import Nav from "./Nav";
import "../css/about.css";
import user from "../resouse/user1.jpg";
function About(){
    const name="Priti";
    const email="puja@gmail.com";
    const pass="123456";
    const pno="7847993120";
    const addr="Patia,Bhubaneswar";
    const zip="751024";
    const state="Odisha";
    const states={
      float:'left'
    };
    const zips={
      float:'left',
      marginleft:'90px'
    };
    return(
       <div className="mainaboutdiv">
        <Nav />
        <div className="formdiv">
            <div className="topdiv">
                <div className="image-wrapper">
            <img src={user} alt="user" ></img>
            </div>
            </div>
            <div>
            <form className="aform">
              <label htmlFor="name">Name</label>
              <input 
                type="textfield"  
                value={name} readOnly
              />
              <label htmlFor="email">Email</label>
              <input 
                type="email"  
                value={email} readOnly
              />
              <label htmlFor="password">Password</label>
              <input 
                  type="password"
                  value={pass} readOnly
                />
                <label htmlFor="phno">Phone Number</label>
              <input 
                  type="number"
                  value={pno} readOnly
                />
                 <label htmlFor="address">Address</label>
              <input 
                  type="textfield"
                  value={addr} readOnly
                />
                <div className={states}>
                  <label htmlFor="state">State</label>
              <input 
                  type="textfield"
                  value={state} readOnly
                /></div>
                <div className={zips}>
                  <label htmlFor="zip">Zip Code</label>
              <input 
                  type="textfield"
                  value={zip} readOnly
                />
                </div>
                
                

                </form>
                </div>
        </div>

        </div>
       
    );
}
export default About;