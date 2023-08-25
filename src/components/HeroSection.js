import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Ikraan Ahmed </h1>
      <p> Full-Stack Developer </p>
      <div className="hero-btns">
      <Link to='/Profile' className="btn-mobile">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Me
          
        </Button></Link>
        <Link to='/Projects' className="btn-mobile">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Projects <i className="far far-play-circle "></i>
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
