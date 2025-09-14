import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VisionMission from './components/VisionMission/VisionMission';
import WhyUs from './components/WhyUs/WhyUs';
import CallToAction from './components/CallToAction/CallToAction';
import AtAGlance from './components/AtAGlance/AtAGlance';
import Members from './components/Members/Members';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <WhyUs />
        <CallToAction />
        <AtAGlance />
        <Members />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
