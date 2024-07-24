// src/components/Banner.js
import React from 'react';

const Banner = () => (
  <section id="banner">
    <div className="content">
      <header>
        <p>I am a 4th year Computer Science major with a data science minor at Champlain College. Throughout my academic years I have taken courses, utilized my resources to get where I am. Applying my knowledge from projects and countless hours of practice I completed 4 internships. Below is my resume to highlight my best work!</p>
      </header>
      <ul className="actions">
        <li><a href="generic.html" className="button big">MY RESUME</a></li>
      </ul>
    </div>
    <span className="image object">
      <img src="assets/images/pic10.jpg" alt="Campus" />
    </span>
  </section>
);

export default Banner;
