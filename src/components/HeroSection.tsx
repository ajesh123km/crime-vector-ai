
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen pt-16 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 -right-48 -top-48 rounded-full bg-cyber-blue/10 blur-3xl"></div>
        <div className="absolute h-96 w-96 -left-48 top-1/3 rounded-full bg-cyber-purple/10 blur-3xl"></div>
        <div className="absolute grid grid-cols-8 gap-8 opacity-20 w-full h-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-full h-full border-t border-l border-white/5"></div>
          ))}
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-6 mt-10 lg:mt-0 lg:pr-10 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue text-sm border border-cyber-blue/20">
              AI-Powered Crime Analysis
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">ModusMapping: </span>
              <span className="text-cyber-gradient glow-blue">AI-Driven Crime Mapping & Analysis</span>
            </h1>
            
            <p className="text-lg text-cyber-gray my-6">
              Revolutionizing law enforcement with AI-driven insights and criminal network mapping. 
              Transform unstructured data into actionable intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white px-6 py-6 rounded-md">
                <Link to="/solution">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 px-6 py-6 rounded-md">
                <Link to="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-right">
            <div className="glass-panel p-1 rounded-lg glow-border">
              <div className="relative overflow-hidden rounded-lg aspect-video w-full glass-panel">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-cyber-darkPurple via-cyber-darkPurple/90 to-cyber-darkPurple/80 p-4">
                    {/* Crime network visualization mockup */}
                    <div className="relative h-full w-full rounded-lg glass-panel p-4 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 rounded-full bg-cyber-blue mr-2 animate-pulse-glow"></div>
                        <div className="text-xs text-cyber-lightGray">Crime Analysis Dashboard</div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-6 gap-2">
                        {/* Network nodes */}
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute rounded-full bg-cyber-blue/30"
                            style={{
                              width: `${Math.random() * 2 + 0.5}rem`,
                              height: `${Math.random() * 2 + 0.5}rem`,
                              left: `${Math.random() * 90}%`,
                              top: `${Math.random() * 80}%`,
                              opacity: Math.random() * 0.5 + 0.2,
                            }}
                          ></div>
                        ))}
                        
                        {/* Network lines */}
                        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                          {[...Array(25)].map((_, i) => (
                            <line 
                              key={i}
                              x1={`${Math.random() * 90}%`} 
                              y1={`${Math.random() * 90}%`} 
                              x2={`${Math.random() * 90}%`} 
                              y2={`${Math.random() * 90}%`} 
                              stroke="#1EAEDB" 
                              strokeWidth="0.5" 
                              strokeOpacity="0.3"
                            />
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
