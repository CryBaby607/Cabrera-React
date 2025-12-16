import React from 'react';
import Header from './components/Layout/Header';
import WhatsAppFloat from './components/Layout/WhatsAppFloat';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Process from './components/Sections/Process';
import ContactInfo from './components/Sections/ContactInfo';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <ContactInfo />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;