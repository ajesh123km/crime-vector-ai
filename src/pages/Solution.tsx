
import React from 'react';
import Navbar from '@/components/Navbar';
import SolutionSection from '@/components/SolutionSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Solution = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              ModusMapping: <span className="text-cyber-gradient">AI-Powered Crime Analysis</span>
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              A comprehensive solution that transforms how law enforcement agencies analyze, visualize, and act on crime data.
            </p>
          </div>
        </div>
      </div>
      
      <SolutionSection />
      
      <div className="py-10 text-center">
        <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
          <Link to="/features" className="inline-flex items-center">
            Explore Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Solution;
