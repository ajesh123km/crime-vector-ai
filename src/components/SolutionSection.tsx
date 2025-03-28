
import React from 'react';
import { Brain, Network, Server, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SolutionSection = () => {
  return (
    <div id="solution" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 -right-48 top-1/4 rounded-full bg-cyber-blue/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 left-1/4 bottom-1/3 rounded-full bg-cyber-purple/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ModusMapping: <span className="text-cyber-gradient">AI-Powered Crime Analysis</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            An innovative AI-driven solution that transforms how law enforcement agencies analyze, visualize, and act on crime data.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-8 rounded-lg border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">The ModusMapping Approach</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 glass-panel rounded-lg self-start">
                    <Brain size={32} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">AI-Driven Analysis</h4>
                    <p className="text-cyber-gray">Advanced natural language processing extracts key information from unstructured police reports and case files.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 glass-panel rounded-lg self-start">
                    <Network size={32} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Graph-Based Mapping</h4>
                    <p className="text-cyber-gray">Sophisticated graph database technology reveals hidden connections between criminals, cases, and events.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 glass-panel rounded-lg self-start">
                    <Server size={32} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Secure, On-Premise Deployment</h4>
                    <p className="text-cyber-gray">The entire system operates on secure, local infrastructure, ensuring sensitive law enforcement data never leaves your premises.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 glass-panel rounded-lg self-start">
                    <Shield size={32} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Role-Based Access Control</h4>
                    <p className="text-cyber-gray">Granular permission systems ensure that sensitive information is only accessible to authorized personnel.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-white">
                  <Link to="/features">
                    Explore Features
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-1 rounded-lg h-full">
              <div className="rounded-lg h-full glass-panel flex flex-col">
                <div className="p-4 border-b border-white/10 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="text-xs text-cyber-lightGray ml-4">ModusMapping System Flow</div>
                </div>
                
                <div className="flex-1 p-6 flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* System flow diagram */}
                    <div className="grid grid-cols-1 gap-4">
                      {/* Input */}
                      <div className="glass-panel p-4 border border-white/10 rounded-lg">
                        <h4 className="text-sm font-medium text-cyber-blue mb-2">1. Data Ingestion</h4>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-cyber-lightGray">Police Reports</span>
                          <span className="text-xs text-cyber-lightGray">Case Files</span>
                          <span className="text-xs text-cyber-lightGray">Incident Data</span>
                        </div>
                        <div className="w-full h-2 mt-2 bg-cyber-blue/20 rounded">
                          <div className="w-3/4 h-full bg-cyber-blue rounded animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Processing with arrow */}
                      <div className="flex justify-center">
                        <div className="h-8 w-0.5 bg-cyber-blue/30"></div>
                      </div>
                      
                      {/* AI Processing */}
                      <div className="glass-panel p-4 border border-white/10 rounded-lg relative">
                        <h4 className="text-sm font-medium text-cyber-blue mb-2">2. AI Processing</h4>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="glass-panel p-2 rounded text-center">
                            <span className="text-xs text-cyber-lightGray">NLP</span>
                          </div>
                          <div className="glass-panel p-2 rounded text-center">
                            <span className="text-xs text-cyber-lightGray">ML Models</span>
                          </div>
                          <div className="glass-panel p-2 rounded text-center">
                            <span className="text-xs text-cyber-lightGray">Pattern Recognition</span>
                          </div>
                        </div>
                        <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-cyber-blue animate-pulse"></div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center">
                        <div className="h-8 w-0.5 bg-cyber-blue/30"></div>
                      </div>
                      
                      {/* Graph Database */}
                      <div className="glass-panel p-4 border border-white/10 rounded-lg">
                        <h4 className="text-sm font-medium text-cyber-blue mb-2">3. Knowledge Graph</h4>
                        <div className="h-20 relative">
                          {/* Simple graph visualization */}
                          <svg className="w-full h-full">
                            <circle cx="30%" cy="30%" r="8" fill="rgba(30, 174, 219, 0.7)" />
                            <circle cx="70%" cy="40%" r="8" fill="rgba(30, 174, 219, 0.7)" />
                            <circle cx="50%" cy="70%" r="8" fill="rgba(30, 174, 219, 0.7)" />
                            <circle cx="20%" cy="60%" r="8" fill="rgba(30, 174, 219, 0.7)" />
                            <circle cx="80%" cy="65%" r="8" fill="rgba(30, 174, 219, 0.7)" />
                            
                            <line x1="30%" y1="30%" x2="70%" y2="40%" stroke="rgba(30, 174, 219, 0.5)" strokeWidth="1" />
                            <line x1="70%" y1="40%" x2="50%" y2="70%" stroke="rgba(30, 174, 219, 0.5)" strokeWidth="1" />
                            <line x1="50%" y1="70%" x2="20%" y2="60%" stroke="rgba(30, 174, 219, 0.5)" strokeWidth="1" />
                            <line x1="50%" y1="70%" x2="80%" y2="65%" stroke="rgba(30, 174, 219, 0.5)" strokeWidth="1" />
                            <line x1="20%" y1="60%" x2="30%" y2="30%" stroke="rgba(30, 174, 219, 0.5)" strokeWidth="1" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center">
                        <div className="h-8 w-0.5 bg-cyber-blue/30"></div>
                      </div>
                      
                      {/* Output */}
                      <div className="glass-panel p-4 border border-white/10 rounded-lg">
                        <h4 className="text-sm font-medium text-cyber-blue mb-2">4. Intelligence Output</h4>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-cyber-lightGray">Visual Analysis</span>
                          <span className="text-xs text-cyber-lightGray">Case Briefs</span>
                          <span className="text-xs text-cyber-lightGray">Actionable Insights</span>
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
    </div>
  );
};

export default SolutionSection;
