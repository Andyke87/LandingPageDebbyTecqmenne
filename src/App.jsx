/* eslint-disable no-unused-vars */
import React from 'react';
import './css/App.css';

const App = () => {
  return (
    <main className="landing-page">

      <section className="hero-section">
        <h1 >Welkom </h1>
          <section className="services-section">
            <h2>Mijn Diensten</h2>
            <div className="services-grid">
              <div className="service">
                <h3>Klinisch psycholoog</h3>
                <p>Individuele begeleiding voor kinderen, jongeren en volwassenen.</p>
              </div>
              <div className="service">
                <h3>Psychotherapie</h3>
                <p>Gesprekstherapie voor kinderen, jongeren en volwassenen.</p>
              </div>
              <div className="service">
                <h3>Psychoanalyse </h3>
                <p>Psychoanalyse voor kinderen, jongeren en volwassenen.</p>
              </div>
            </div>
            <a href="/about">Wie ben ik?</a>
          </section>
      </section>
    </main>
  );
};

export default App;
