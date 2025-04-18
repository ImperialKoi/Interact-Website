import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import GetInvolved from './components/GetInvolved';
import ImpactStats from './components/ImpactStats';
import Testimonials from './components/Testimonials';
import NewsletterSection from './components/NewsletterSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // Smooth scroll effect

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <ImpactStats />
      <GetInvolved />
      <Testimonials />
      <NewsletterSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;