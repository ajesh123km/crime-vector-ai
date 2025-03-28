
import React from 'react';
import Navbar from '@/components/Navbar';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Core <span className="text-cyber-gradient">Functionalities</span> of ModusMapping
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              Discover the powerful features that make ModusMapping an essential tool for modern law enforcement agencies.
            </p>
          </div>
        </div>
      </div>
      
      <FeaturesSection />
      
      <div className="py-10 text-center">
        <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
          <Link to="/technology" className="inline-flex items-center">
            Explore Technology
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
