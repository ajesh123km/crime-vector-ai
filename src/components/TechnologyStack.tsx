
import React from 'react';
import { CheckCircle } from 'lucide-react';

const TechnologyStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      description: "Interactive, responsive user interface",
      technologies: [
        { name: "React.js", description: "Component-based UI library" },
        { name: "Angular", description: "Enterprise-ready framework", optional: true }
      ]
    },
    {
      category: "Backend",
      description: "Powerful, secure API services",
      technologies: [
        { name: "Python", description: "Core language" },
        { name: "Flask/FastAPI", description: "API framework" },
        { name: "Docker", description: "Containerization" }
      ]
    },
    {
      category: "Database",
      description: "Optimized data storage and retrieval",
      technologies: [
        { name: "MongoDB", description: "Document storage" },
        { name: "Neo4j", description: "Graph database" },
        { name: "PostgreSQL", description: "Relational data" }
      ]
    },
    {
      category: "AI & NLP",
      description: "Advanced analysis and learning",
      technologies: [
        { name: "OpenAI GPT", description: "Text analysis" },
        { name: "BERT", description: "Entity recognition" },
        { name: "Spacy", description: "NLP processing" },
        { name: "TensorFlow", description: "ML models" }
      ]
    },
    {
      category: "Text Extraction",
      description: "Transform documents to data",
      technologies: [
        { name: "Tesseract OCR", description: "Optical character recognition" },
        { name: "PyPDF2", description: "PDF processing" }
      ]
    },
    {
      category: "Security",
      description: "Enterprise-grade protection",
      technologies: [
        { name: "OAuth 2.0", description: "Authentication" },
        { name: "AES-256", description: "Encryption" },
        { name: "JWT", description: "Secure tokens" }
      ]
    }
  ];

  return (
    <div id="technology" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 -right-48 top-1/3 rounded-full bg-cyber-blue/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 left-1/4 -bottom-32 rounded-full bg-cyber-purple/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Technologies Behind <span className="text-cyber-gradient">ModusMapping</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Our solution leverages cutting-edge technologies to deliver powerful, secure, and efficient crime analysis capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg border border-white/10 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{category.category}</h3>
              <p className="text-cyber-gray text-sm mb-4">{category.description}</p>
              
              <div className="space-y-3 flex-1">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className={`flex items-start gap-3 p-2 rounded-md ${tech.optional ? 'bg-transparent' : 'glass-panel'}`}
                  >
                    <CheckCircle className={`h-5 w-5 ${tech.optional ? 'text-cyber-gray' : 'text-cyber-blue'}`} />
                    <div>
                      <h4 className="text-sm font-medium text-white">{tech.name}</h4>
                      <p className="text-xs text-cyber-gray">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 glass-panel rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Technology Architecture</h3>
          
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {/* Layer 1: User Interface */}
              <div className="glass-panel p-4 rounded-lg border border-cyber-blue/30">
                <h4 className="text-sm font-medium text-cyber-blue mb-2">User Interface Layer</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Dashboard</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Graph Visualizer</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Search Interface</span>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-cyber-blue/30"></div>
              </div>
              
              {/* Layer 2: API Layer */}
              <div className="glass-panel p-4 rounded-lg border border-cyber-blue/20">
                <h4 className="text-sm font-medium text-cyber-blue mb-2">API & Processing Layer</h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">REST API</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Authentication</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Processing</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Caching</span>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-cyber-blue/30"></div>
              </div>
              
              {/* Layer 3: Service Layer */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-lg border border-cyber-purple/20">
                  <h4 className="text-sm font-medium text-cyber-purple mb-2">AI Processing Services</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="glass-panel p-2 rounded text-center">
                      <span className="text-xs text-cyber-lightGray">NLP Engine</span>
                    </div>
                    <div className="glass-panel p-2 rounded text-center">
                      <span className="text-xs text-cyber-lightGray">Pattern Recognition</span>
                    </div>
                    <div className="glass-panel p-2 rounded text-center">
                      <span className="text-xs text-cyber-lightGray">Entity Extraction</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-4 rounded-lg border border-cyber-purple/20">
                  <h4 className="text-sm font-medium text-cyber-purple mb-2">Data Services</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="glass-panel p-2 rounded text-center">
                      <span className="text-xs text-cyber-lightGray">OCR Processing</span>
                    </div>
                    <div className="glass-panel p-2 rounded text-center">
                      <span className="text-xs text-cyber-lightGray">PDF Processing</span>
                    </div>
                    <div className="glass-panel p-2 rounded text-center">
                      <span className="text-xs text-cyber-lightGray">Data Normalization</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-cyber-blue/30"></div>
              </div>
              
              {/* Layer 4: Database Layer */}
              <div className="glass-panel p-4 rounded-lg border border-white/10">
                <h4 className="text-sm font-medium text-cyber-blue mb-2">Data Storage Layer</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Graph Database</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Document Store</span>
                  </div>
                  <div className="glass-panel p-2 rounded text-center">
                    <span className="text-xs text-cyber-lightGray">Relational Database</span>
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

export default TechnologyStack;
