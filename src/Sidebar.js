// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => (
  <div id="sidebar">
    <div className="inner">
      <nav id="menu">
        <header className="major">
          <h2>Menu</h2>
        </header>
        <ul>
          <li><a href="/">Homepage</a></li>
          <li><a href="generic.html">RESUME</a></li>
        </ul>
      </nav>
      <section>
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <ul className="contact">
          <li className="icon solid fa-envelope"><a href="mailto:zhangj917business@gmail.com">zhangj917business@gmail.com</a></li>
          <li className="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/jackyzhang802/">My LinkedIn</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Sidebar;
