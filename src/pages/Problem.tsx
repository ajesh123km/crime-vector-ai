
import React from 'react';
import Navbar from '@/components/Navbar';
import ProblemSection from '@/components/ProblemSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Problem = () => {
  return (
    <div className="min-h-screen bg-cyber-darkPurple text-white">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="py-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-cyber-gradient">Challenges</span> in Crime Data Analysis
            </h1>
            <p className="text-cyber-gray max-w-2xl mx-auto">
              Understanding the complex problems facing modern law enforcement agencies is the first step toward effective solutions.
            </p>
          </div>
        </div>
      </div>
      
      <ProblemSection />
      
      <div className="py-10 text-center">
        <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
          <Link to="/solution" className="inline-flex items-center">
            Explore Our Solution
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Problem;
