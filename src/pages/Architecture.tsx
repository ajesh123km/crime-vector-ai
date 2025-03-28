
import React from 'react';
import Navbar from '@/components/Navbar';
import ArchitectureSection from '@/components/ArchitectureSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Architecture = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              How <span className="text-cyber-gradient">ModusMapping</span> Works
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              A comprehensive look at the technology stack and system architecture that powers our AI-driven crime analysis platform.
            </p>
          </div>
        </div>
      </div>
      
      <ArchitectureSection />
      
      <div className="py-10 text-center">
        <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
          <Link to="/benefits" className="inline-flex items-center">
            Explore Benefits
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Architecture;
