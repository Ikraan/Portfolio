import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='foot-subcription'></section>
      <p className='footer-sub-heading'>
      You can contact me via: </p>
      <section className='links'>
      <Link><a href='https://www.linkedin.com/in/ikraanahmed/'> <img src="Images/linkedin.jpg" alt="inIcon" className="btnImg"/></a></Link>
      <Link><a href="https://github.com/Ikraan"> <img src="Images/github.png" alt="gitIcon" className="btnImg"/></a></Link> 
      <Link> <a href='mailto:Ikraan-Ahmed@outlook.com/'> <img src="Images/email.jpg" alt="msgIcon" className="btnImg" /></a></Link>
      </section>
    </div>
  )
}

export default Footer;