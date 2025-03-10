import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Apple Special Event</h1>
      <p>Join us on October 10th, 2023</p>
      <Button text="Learn More" />
    </section>
  );
};

export default Hero;