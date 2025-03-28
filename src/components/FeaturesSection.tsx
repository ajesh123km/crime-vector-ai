
import React from 'react';
import { 
  FileText, 
  Brain, 
  Network, 
  Database, 
  Shield, 
  Search, 
  FileDigit, 
  Fingerprint,
  Lightbulb
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: <FileText className="text-cyber-blue h-10 w-10" />,
      title: "Real-time Text Processing",
      description: "Automatically extract structured information from unstructured police records and case files."
    },
    {
      icon: <Brain className="text-cyber-blue h-10 w-10" />,
      title: "AI-powered Modus Operandi Analysis",
      description: "Identify criminal patterns and methodologies across cases to detect serial offenders."
    },
    {
      icon: <Network className="text-cyber-blue h-10 w-10" />,
      title: "Graph Visualization",
      description: "Interactive network visualization reveals hidden connections between criminals, cases, and events."
    },
    {
      icon: <Database className="text-cyber-blue h-10 w-10" />,
      title: "Smart Database Search",
      description: "Semantic search capabilities for instant case retrieval based on concepts, not just keywords."
    },
    {
      icon: <Shield className="text-cyber-blue h-10 w-10" />,
      title: "Secure Offline Deployment",
      description: "On-premise installation ensures sensitive law enforcement data never leaves your secure environment."
    }
  ];

  const additionalFeatures = [
    {
      icon: <Search className="text-cyber-blue h-6 w-6" />,
      title: "Advanced Pattern Recognition",
      description: "Detect subtle criminal patterns across jurisdictions and time periods."
    },
    {
      icon: <FileDigit className="text-cyber-blue h-6 w-6" />,
      title: "Automated Case Summaries",
      description: "Generate concise briefings from extensive case files, saving hours of manual work."
    },
    {
      icon: <Fingerprint className="text-cyber-blue h-6 w-6" />,
      title: "Biometric Integration",
      description: "Seamlessly integrate with existing biometric identification systems."
    },
    {
      icon: <Lightbulb className="text-cyber-blue h-6 w-6" />,
      title: "Predictive Insights",
      description: "Leverage historical data to suggest potential locations or patterns for proactive policing."
    }
  ];

  return (
    <div id="features" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 left-1/4 -top-48 rounded-full bg-cyber-purple/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 right-1/4 bottom-1/3 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Core <span className="text-cyber-gradient">Functionalities</span> of ModusMapping
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Our comprehensive suite of features empowers law enforcement agencies to transform raw data into actionable intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg border border-white/10 hover:border-cyber-blue/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-cyber-blue/10 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-cyber-gray flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <Separator className="bg-white/10 my-16" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-white">Advanced Capabilities</h3>
            <p className="text-cyber-gray mb-6">
              ModusMapping goes beyond basic analysis to provide cutting-edge features that set it apart from traditional crime analysis tools.
            </p>
            <div className="glass-panel p-1 rounded-lg glow-border">
              <div className="aspect-video rounded-lg overflow-hidden">
                <div className="glass-panel h-full w-full p-4 flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-cyber-blue mr-2 animate-pulse"></div>
                    <div className="text-xs text-cyber-lightGray">System Activity</div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto text-left">
                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="text-cyber-blue">// AI Engine Processing</div>
                      <div className="text-cyber-lightGray">Analyzing case #27845: <span className="text-white">complete</span></div>
                      <div className="text-cyber-lightGray">Extracting entities: <span className="text-white">complete</span></div>
                      <div className="text-cyber-lightGray">Building graph relationships: <span className="text-white">complete</span></div>
                      <div className="text-cyber-lightGray">Pattern matching in progress: <span className="text-green-400">93%</span></div>
                      <div className="text-cyber-lightGray">Potential match found in cases: <span className="text-white">#18372, #23094</span></div>
                      <div className="text-cyber-blue mt-2">// Graph Database Status</div>
                      <div className="text-cyber-lightGray">Nodes: <span className="text-white">1,482</span></div>
                      <div className="text-cyber-lightGray">Relationships: <span className="text-white">3,946</span></div>
                      <div className="text-cyber-lightGray">Last updated: <span className="text-white">2 minutes ago</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-5 rounded-lg border border-white/10 hover:border-cyber-blue/30 transition-all duration-300 flex gap-4"
                >
                  <div className="bg-cyber-blue/10 p-2 rounded-lg h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                    <p className="text-cyber-gray text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-6 glass-panel rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-white">System Requirements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass-panel p-3 rounded-lg">
                  <div className="text-xs text-cyber-lightGray mb-1">Processing</div>
                  <div className="text-sm text-white">Intel i7/AMD Ryzen 7 or better</div>
                </div>
                <div className="glass-panel p-3 rounded-lg">
                  <div className="text-xs text-cyber-lightGray mb-1">Memory</div>
                  <div className="text-sm text-white">32GB RAM min.</div>
                </div>
                <div className="glass-panel p-3 rounded-lg">
                  <div className="text-xs text-cyber-lightGray mb-1">Storage</div>
                  <div className="text-sm text-white">1TB SSD min.</div>
                </div>
                <div className="glass-panel p-3 rounded-lg">
                  <div className="text-xs text-cyber-lightGray mb-1">Network</div>
                  <div className="text-sm text-white">Secure isolated VPN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
