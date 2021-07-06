import React from 'react';
import './About.css';
import aboutImage from '../images/about_image.PNG';

function About(props) {
  console.log(props);
  return (
    <section className="aboutContainer">
      <img src={aboutImage} title="about" alt="about"/>
      <p>Find movies that you're interested in by referring to the descriptions in the movie list!</p>
    </section>
  );
}

export default About;