import React from 'react';
import '../styles/About.css';
import 'animate.css'
import profileImage from '../assets/image.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


const About = () => {
  return (
    <section id="home">
      {/* <h1>Vikram Badesara</h1> */}
      <div className="profile-image animate__fadeIn slow-animation">
        <img src={profileImage} alt="Vikram's profile" />
      </div>
      <h2 className="profession">Software Engineer</h2>
      <div className="contact-info">
        <a href="mailto:08.vikrambadesara@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/vikrambadesara/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Vikybad/">
          <i className="fab fa-github"></i>
        </a>
        <a id="contactLink" href="http://tel:9499424304">
          <i className="fas fa-phone"></i>
        </a>
      </div>

      <h1>About Me</h1>
      <p>Skilled Software Engineer with 2 years of experience. Proficient in JavaScript, Node.js, Express.js, React, MongoDB, Google Apps Script,
        and various other technologies. Proven track record of successful feature development, bug fixes, and product enhancements to drive
        stability and improvements. Committed to writing clean, efficient code and delivering high-quality solutions.</p>
    </section>
  );
};

export default About;