
import React from 'react';
import Navbar from '@/components/Navbar';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Next Steps & <span className="text-cyber-gradient">Roadmap</span>
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              Our development plan and timeline for bringing ModusMapping to law enforcement agencies worldwide.
            </p>
          </div>
        </div>
      </div>
      
      <RoadmapSection />
      
      <div className="py-10 text-center">
        <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
          <Link to="/contact" className="inline-flex items-center">
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Roadmap;
