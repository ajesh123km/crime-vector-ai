
import React from 'react';
import { 
  FileText, 
  Brain, 
  Network, 
  Database, 
  Shield, 
  Server
} from 'lucide-react';

const ArchitectureSection = () => {
  const architectureSteps = [
    {
      icon: <FileText size={32} className="text-cyber-blue" />,
      title: "Text Extraction",
      description: "AI extracts structured text from police records, case files, and witness statements using OCR and NLP techniques."
    },
    {
      icon: <Brain size={32} className="text-cyber-blue" />,
      title: "Pattern Analysis",
      description: "NLP models analyze text to identify modus operandi patterns and crime characteristics across multiple cases."
    },
    {
      icon: <Network size={32} className="text-cyber-blue" />,
      title: "Relationship Mapping",
      description: "Graph algorithms detect hidden connections between criminals, locations, and events to reveal criminal networks."
    },
    {
      icon: <FileText size={32} className="text-cyber-blue" />,
      title: "Case Summarization",
      description: "AI models generate concise case briefs from extensive documentation for quick review by investigators."
    },
    {
      icon: <Server size={32} className="text-cyber-blue" />,
      title: "Secure Storage",
      description: "All data is securely stored and processed on on-premise servers, never leaving the police department's network."
    }
  ];

  return (
    <div id="architecture" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 left-1/4 top-1/3 rounded-full bg-cyber-purple/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 right-1/4 bottom-1/3 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            System <span className="text-cyber-gradient">Architecture</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            ModusMapping integrates advanced AI components in a secure, privacy-focused architecture designed specifically for law enforcement requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="glass-panel p-6 rounded-lg border border-white/10 h-full">
              <h3 className="text-xl font-semibold mb-4 text-white">System Components</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 glass-panel rounded-lg">
                    <Database className="text-cyber-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Document Database</h4>
                    <p className="text-xs text-cyber-lightGray">Stores original case files and extracted text</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 glass-panel rounded-lg">
                    <Network className="text-cyber-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Graph Database</h4>
                    <p className="text-xs text-cyber-lightGray">Maps relationships between entities and cases</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 glass-panel rounded-lg">
                    <Brain className="text-cyber-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">AI Processing Engine</h4>
                    <p className="text-xs text-cyber-lightGray">Analyzes text and identifies patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 glass-panel rounded-lg">
                    <Shield className="text-cyber-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Security Layer</h4>
                    <p className="text-xs text-cyber-lightGray">Ensures data protection and access control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-panel p-6 rounded-lg border border-white/10 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-white">Data Flow & Processing</h3>
              
              <div className="flex-1 relative">
                {/* Flow diagram visualization */}
                <div className="absolute inset-0">
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-2xl">
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 400">
                        <path d="M150,80 C250,80 250,160 350,160" stroke="#1EAEDB" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        <path d="M450,160 C550,160 550,240 650,240" stroke="#1EAEDB" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        <path d="M150,240 C250,240 250,160 350,160" stroke="#1EAEDB" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        <path d="M450,160 C550,160 550,80 650,80" stroke="#1EAEDB" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                        <path d="M150,320 C250,320 250,160 350,160" stroke="#1EAEDB" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                      </svg>
                      
                      {/* Nodes */}
                      <div className="relative z-10 grid grid-cols-3 gap-4">
                        <div className="space-y-4">
                          <div className="glass-panel p-3 rounded-lg border border-cyber-blue/20 text-center">
                            <div className="bg-cyber-blue/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                              <FileText className="text-cyber-blue h-5 w-5" />
                            </div>
                            <p className="text-xs text-cyber-lightGray">Case Files</p>
                          </div>
                          
                          <div className="glass-panel p-3 rounded-lg border border-cyber-blue/20 text-center">
                            <div className="bg-cyber-blue/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                              <Database className="text-cyber-blue h-5 w-5" />
                            </div>
                            <p className="text-xs text-cyber-lightGray">Crime Records</p>
                          </div>
                          
                          <div className="glass-panel p-3 rounded-lg border border-cyber-blue/20 text-center">
                            <div className="bg-cyber-blue/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                              <FileText className="text-cyber-blue h-5 w-5" />
                            </div>
                            <p className="text-xs text-cyber-lightGray">Witness Statements</p>
                          </div>
                        </div>
                        
                        <div>
                          <div className="glass-panel p-4 rounded-lg border border-cyber-purple/30 text-center h-full flex flex-col items-center justify-center">
                            <div className="bg-cyber-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <Brain className="text-cyber-purple h-8 w-8" />
                            </div>
                            <h4 className="text-sm font-medium text-white mb-2">AI Processing Engine</h4>
                            <p className="text-xs text-cyber-lightGray">Text analysis, pattern recognition, and relationship mapping</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="glass-panel p-3 rounded-lg border border-cyber-blue/20 text-center">
                            <div className="bg-cyber-blue/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                              <Network className="text-cyber-blue h-5 w-5" />
                            </div>
                            <p className="text-xs text-cyber-lightGray">Criminal Networks</p>
                          </div>
                          
                          <div className="glass-panel p-3 rounded-lg border border-cyber-blue/20 text-center">
                            <div className="bg-cyber-blue/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                              <FileText className="text-cyber-blue h-5 w-5" />
                            </div>
                            <p className="text-xs text-cyber-lightGray">Case Summaries</p>
                          </div>
                          
                          <div className="glass-panel p-3 rounded-lg border border-cyber-blue/20 text-center">
                            <div className="bg-cyber-blue/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                              <Shield className="text-cyber-blue h-5 w-5" />
                            </div>
                            <p className="text-xs text-cyber-lightGray">Secure Insights</p>
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
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">How It Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {architectureSteps.map((step, index) => (
              <div 
                key={index} 
                className="glass-panel p-5 rounded-lg border border-white/10 hover:border-cyber-blue/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyber-blue/10 p-3 rounded-lg w-fit mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{step.title}</h4>
                  <div className="text-cyber-gray text-sm">{step.description}</div>
                  
                  {index < architectureSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-cyber-blue/30 transform rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSection;
