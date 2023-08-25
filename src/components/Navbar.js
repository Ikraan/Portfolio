import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Button } from "./Button";

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo"onClick={closeMenu}>
            <img src="Images/IALogo.png" alt="Logo"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMenu}>
                    Home
                    <img src="Images/home.png" alt="home icon"></img>
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/profile' className="nav-links" onClick={closeMenu}>
                    Profile
                    <img src="Images/avatar.png" alt="profile icon"></img>
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/projects' className="nav-links" onClick={closeMenu}>
                    Projects
                    <img src="Images/projects.png" alt="project icon"></img>
                </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
