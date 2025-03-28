
import React from 'react';
import { AlertTriangle, Clock, Search, FileText } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <FileText size={32} className="text-cyber-blue" />,
      title: "Unstructured Data",
      description: "Law enforcement agencies struggle with vast amounts of unstructured text data in police reports, making it difficult to extract meaningful patterns."
    },
    {
      icon: <Search size={32} className="text-cyber-blue" />,
      title: "Hidden Connections",
      description: "Critical relationships between criminal entities often remain hidden in disconnected reports, limiting investigators' ability to see the full picture."
    },
    {
      icon: <Clock size={32} className="text-cyber-blue" />,
      title: "Time-Intensive Analysis",
      description: "Manual review of case files and reports consumes valuable time that could be spent on active investigation and crime prevention."
    },
    {
      icon: <AlertTriangle size={32} className="text-cyber-blue" />,
      title: "Delayed Response",
      description: "Without efficient data analysis tools, decision-making and tactical response times are delayed, reducing the effectiveness of law enforcement."
    }
  ];

  return (
    <div id="problem" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 left-1/4 top-1/3 rounded-full bg-cyber-purple/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 right-1/4 bottom-1/3 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Challenges in <span className="text-cyber-gradient">Crime Data Analysis</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Law enforcement agencies worldwide face significant challenges in processing and analyzing crime data effectively. 
            These obstacles impede investigations and limit the potential for proactive crime prevention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg border border-white/10 hover:border-cyber-blue/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 glass-panel rounded-lg self-start">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{problem.title}</h3>
                  <p className="text-cyber-gray">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 glass-panel rounded-lg border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20">
                <div className="aspect-square rounded-lg glass-panel flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Abstract data visualization representing the problem */}
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-4">
                      {[...Array(100)].map((_, i) => (
                        <div 
                          key={i} 
                          className="bg-white/5 rounded-sm"
                          style={{
                            opacity: Math.random() * 0.6 + 0.1,
                            height: `${Math.random() * 100}%`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AlertTriangle size={48} className="text-cyber-blue/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-white">The Cost of Manual Analysis</h3>
              <p className="text-cyber-gray mb-4">
                Traditional methods of crime analysis rely heavily on manual processes, resulting in:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyber-blue/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyber-blue text-sm">1</span>
                  </div>
                  <span className="text-cyber-lightGray">Up to 80% of investigative time spent on administrative tasks rather than active investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyber-blue/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyber-blue text-sm">2</span>
                  </div>
                  <span className="text-cyber-lightGray">Significant delays in identifying serial offenders and crime patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyber-blue/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyber-blue text-sm">3</span>
                  </div>
                  <span className="text-cyber-lightGray">Missed opportunities for crime prevention due to disconnected data</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyber-blue/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyber-blue text-sm">4</span>
                  </div>
                  <span className="text-cyber-lightGray">Information silos between departments and jurisdictions hampering collaborative efforts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
