
import React from 'react';
import Navbar from '@/components/Navbar';
import BenefitsSection from '@/components/BenefitsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Benefits = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Transforming Crime Investigation <span className="text-cyber-gradient">with AI</span>
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              Discover how ModusMapping revolutionizes law enforcement operations and delivers measurable improvements in investigation efficiency.
            </p>
          </div>
        </div>
      </div>
      
      <BenefitsSection />
      
      <div className="py-10 text-center">
        <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
          <Link to="/roadmap" className="inline-flex items-center">
            View Development Roadmap
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Benefits;
