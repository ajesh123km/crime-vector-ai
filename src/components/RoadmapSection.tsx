
import React from 'react';
import { 
  CheckCircle, 
  Circle, 
  Clock,
  Database,
  Layers,
  Users,
  Shield,
  ArrowRightCircle
} from 'lucide-react';

const RoadmapSection = () => {
  const phases = [
    {
      number: 1,
      title: "Prototype Development",
      description: "Database architecture and user interface design for law enforcement needs.",
      status: "completed",
      date: "Q2 2023",
      items: [
        { text: "Neo4j graph database integration", completed: true },
        { text: "Document processing pipeline", completed: true },
        { text: "Core UI components and dashboards", completed: true },
        { text: "User authentication system", completed: true }
      ],
      icon: <Database size={28} className="text-cyber-blue" />
    },
    {
      number: 2,
      title: "AI-Driven Crime Mapping",
      description: "Implementation of AI models for text analysis and criminal network visualization.",
      status: "in-progress",
      date: "Q4 2023",
      items: [
        { text: "NLP model training and fine-tuning", completed: true },
        { text: "Entity extraction and relationship mapping", completed: true },
        { text: "Pattern recognition algorithms", completed: true },
        { text: "Crime visualization dashboard", completed: false }
      ],
      icon: <Layers size={28} className="text-cyber-blue" />
    },
    {
      number: 3,
      title: "Police Trials & Feedback",
      description: "Deployment with select police departments for real-world testing and validation.",
      status: "upcoming",
      date: "Q2 2024",
      items: [
        { text: "Pilot program with 3 police departments", completed: false },
        { text: "Officer training and documentation", completed: false },
        { text: "Performance metrics gathering", completed: false },
        { text: "Iterative improvements based on feedback", completed: false }
      ],
      icon: <Users size={28} className="text-cyber-blue" />
    },
    {
      number: 4,
      title: "Secure Deployment",
      description: "Final hardening and secure on-premise deployment for law enforcement agencies.",
      status: "upcoming",
      date: "Q4 2024",
      items: [
        { text: "Security audit and penetration testing", completed: false },
        { text: "CJIS compliance certification", completed: false },
        { text: "On-premise deployment system", completed: false },
        { text: "Maintenance and support infrastructure", completed: false }
      ],
      icon: <Shield size={28} className="text-cyber-blue" />
    }
  ];

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-amber-500 animate-pulse" />;
      case 'upcoming':
        return <Circle className="h-6 w-6 text-cyber-gray" />;
      default:
        return <Circle className="h-6 w-6 text-cyber-gray" />;
    }
  };

  return (
    <div id="roadmap" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 left-1/4 top-1/3 rounded-full bg-cyber-purple/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 right-1/4 bottom-1/3 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Development <span className="text-cyber-gradient">Roadmap</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Our timeline for developing and deploying ModusMapping to law enforcement agencies around the world.
          </p>
        </div>
        
        {/* Timeline visualization */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center ${
                    phase.status === 'completed' ? 'border-green-500 bg-green-500/20' : 
                    phase.status === 'in-progress' ? 'border-amber-500 bg-amber-500/20 animate-pulse' : 
                    'border-white/30 bg-white/5'
                  }`}>
                    <span className="text-white text-xs font-bold">{phase.number}</span>
                  </div>
                </div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className="w-full md:w-1/2 p-6 glass-panel rounded-lg border border-white/10 md:self-start">
                    <div className="flex items-start gap-4">
                      <div className="glass-panel p-2 rounded-lg">
                        {phase.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                            {renderStatusIcon(phase.status)}
                            <span className="text-xs text-cyber-lightGray">{phase.date}</span>
                          </div>
                        </div>
                        
                        <p className="text-cyber-gray mb-4">{phase.description}</p>
                        
                        <div className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2">
                              <div className={`rounded-full p-0.5 ${item.completed ? 'text-green-500' : 'text-cyber-gray'}`}>
                                {item.completed ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                              </div>
                              <span className={`text-sm ${item.completed ? 'text-cyber-lightGray' : 'text-cyber-gray'}`}>
                                {item.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-6 glass-panel rounded-lg border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-white">Future Directions</h3>
              <p className="text-cyber-gray mb-4">
                Beyond our current roadmap, we're exploring additional capabilities to enhance ModusMapping's value to law enforcement:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <ArrowRightCircle className="text-cyber-blue h-5 w-5 mt-0.5" />
                  <span className="text-cyber-lightGray text-sm">Mobile application for field officers</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRightCircle className="text-cyber-blue h-5 w-5 mt-0.5" />
                  <span className="text-cyber-lightGray text-sm">Cross-jurisdictional data sharing capabilities</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRightCircle className="text-cyber-blue h-5 w-5 mt-0.5" />
                  <span className="text-cyber-lightGray text-sm">Predictive policing risk assessment</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRightCircle className="text-cyber-blue h-5 w-5 mt-0.5" />
                  <span className="text-cyber-lightGray text-sm">Integration with body camera and IoT devices</span>
                </div>
              </div>
              
              <p className="text-cyber-gray text-sm">
                Our development priorities are guided by feedback from law enforcement professionals and emerging technological capabilities.
              </p>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="glass-panel p-5 rounded-lg h-full">
                <h4 className="text-lg font-semibold mb-4 text-white">Development Timeline</h4>
                
                <div className="space-y-4">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-amber-500"></div>
                    <div className="absolute left-0 top-0 w-0.5 h-1/2 bg-green-500"></div>
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-green-500 -translate-x-1 transform"></div>
                    <div className="absolute left-0 top-1/2 w-3 h-3 rounded-full bg-amber-500 -translate-x-1 transform"></div>
                    <div className="pt-1 pb-6">
                      <p className="text-xs text-cyber-blue">Q2 2023</p>
                      <p className="text-sm text-white">Project Start</p>
                    </div>
                    <div className="pb-6">
                      <p className="text-xs text-cyber-blue">Q4 2023</p>
                      <p className="text-sm text-white">Current Phase</p>
                    </div>
                    <div className="pb-6">
                      <p className="text-xs text-cyber-gray">Q2 2024</p>
                      <p className="text-sm text-cyber-lightGray">Police Trials</p>
                    </div>
                    <div>
                      <p className="text-xs text-cyber-gray">Q4 2024</p>
                      <p className="text-sm text-cyber-lightGray">Full Release</p>
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

export default RoadmapSection;
