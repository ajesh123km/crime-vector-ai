
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-cyber-gradient">Get in Touch</span>
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              Request a demonstration or reach out to discuss how ModusMapping can transform your law enforcement agency.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Contact;
