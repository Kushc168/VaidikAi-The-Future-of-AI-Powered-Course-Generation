import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default LandingPage;
