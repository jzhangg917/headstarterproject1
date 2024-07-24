// src/components/FunFact.js
import React from 'react';

const FunFact = () => (
  <section>
    <header className="major">
      <h2>Fun Fact About Me!</h2>
    </header>
    <div className="features">
      <article>
        <span className="image object">
          <img src="assets/images/integra.jpg" width="800" height="400" alt="Integra" />
        </span>
      </article>
      <div className="content">
        <h3>Car Guy</h3>
        <p>I love cars!! Growing up I've always had an obsession with Japanese and German cars. I currently drive an Acura Integra and I've enjoyed this car since the day I got it! This isn't my picture. It's stock currently. Only mod is my front bumper but I will be adding a front splitter, rear diffuser and blacked out emblems soon! (As the picture is reference!) </p>
      </div>
    </div>
  </section>
);

export default FunFact;
