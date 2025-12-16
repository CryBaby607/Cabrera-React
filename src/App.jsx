import React from 'react';
import Header from './components/Layout/Header';
import WhatsAppFloat from './components/Layout/WhatsAppFloat';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Process from './components/Sections/Process';
import Trust from './components/Sections/Trust';
import ContactInfo from './components/Sections/ContactInfo';
import FinalCTA from './components/Sections/FinalCTA';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Trust />
        <ContactInfo />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;