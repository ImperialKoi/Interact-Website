import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import GetInvolved from './components/GetInvolved';
import ImpactStats from './components/ImpactStats';
import NewsletterSection from './components/NewsletterSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Interact Food Donations";
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <ImpactStats />
      <GetInvolved />
      <ContactForm />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;