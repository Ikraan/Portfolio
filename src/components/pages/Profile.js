import React from "react";
import '../../App.css';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted /> 
        
        <section id="profile">
            <div className="profileContent">
            
                <span className="hello">Hello,</span>
                <span className="introText"> I'm <span className="introName"> Ikraan</span> <br /> Developer </span>
                <p className="introPara"> I am a full stack developer with experience in creating visually appealing and user friendly websites. I am a proud graduate of the Black Codher Bootcamp, a transformative experience where I delved deep into the world of coding, 
            refining my skills in both front-end and back-end development. On the front-end, I'm proficient in HTML, CSS, React, and JavaScript. 
            Meanwhile, on the back-end, my expertise lies in Node.js and MongoDB. 
            My passion for coding is profound; with a keyboard at my fingertips, I am dedicated to crafting digital experiences that truly resonate with users, bringing vibrant ideas to life on-screen. 
            But beyond my technical endeavors, I am a wanderlust at heart. I have an immense passion for traveling and sightseeing, always eager to explore and experience new horizons. 
            I genuinely believe that there's unparalleled joy in discovering novel places and experiences. If you're interested in reaching out, whether for collaborations, inquiries, or simply to connect, please don't hesitate to send me an email. 
            I'm always open for a chat. Thank you so much for stopping by. Together, let's embark on a journey towards building and coding a brighter, more innovative future! </p>
                {/* <Link to='mailto:Ikraan-Ahmed@outlook.com'><button className="btn1"> <img src="Images/message.png" alt="msgIcon" className="btnImg"/>Contact Me</button></Link> */}
            </div> 
            <div className="profileImg">
              <img src="Images/ikraanPhoto.png" alt="ProfilePic"></img>   
            </div>
           
        </section>
       
        </div>
    )
}
export default Profile;