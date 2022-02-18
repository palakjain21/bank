import React from "react";
 import { Link, Navigate, useNavigate } from "react-router-dom";
 import "./navbar.css";



 const Navbar = () => {
      const Navigate= useNavigate();

    const handleClick=()=>{
        Navigate("/Login");
        console.log("clicked");
    }

    return (
        <div className="header">
        <h1 className="logo">MyBank</h1>
          <div className="header__bar">
            <Link
              to="/accounts"
              className="header__nav"
              activeClassName="is-active"
            >
              <h3 style={{color:"white", textDecoration:"none"}}>Accounts</h3>
            </Link>
            <Link
              to="/loans"
              className="header__nav"
              activeClassName="is-active"
            >
              <h3 style={{color:"white", textDecoration:"none"}}>Personal Loans</h3>
            </Link>
            <Link
              to="/investment"
              className="header__nav"
              activeClassName="is-active"
            >
              <h3 style={{color:"white", textDecoration:"none"}}>Investment</h3>
            </Link>
            <Link
              to="/business"
              className="header__nav"
              activeClassName="is-active"
            >
             <h3 style={{color:"white", textDecoration:"none"}} >Business</h3>
            </Link>
            <Link
              to="/support"
              className="header__nav"
              activeClassName="is-active"
            >
            <h3 style={{color:"white", textDecoration:"none"}}> Support</h3>
            </Link>
            <Link
              to="/our_deals"
              className="header__nav"
              activeClassName="is-active"
            >
             <h3 style={{color:"white", textDecoration:"none"}}>Our Deals</h3>
            </Link>
        </div>
        <button className="button2" type="submit" onClick={handleClick}>
        
            
              Login
            </button>
      </div>
    );
  }
export default Navbar;

