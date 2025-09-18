import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import Theme from './components/Theme';
import Venue from './components/Venue';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Stats />
      <Theme />
      <Venue />
      <Schedule />
      <Speakers />
      <Testimonials />
      <Sponsors />
      <FAQ />
      <Registration />
      <Contact />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
