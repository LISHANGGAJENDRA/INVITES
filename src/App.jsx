import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Countdown />
      <Footer />
    </div>
  );
};

export default App;