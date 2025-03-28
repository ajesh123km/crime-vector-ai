
import React from 'react';
import { 
  Hourglass, 
  Users, 
  BarChart3, 
  ShieldAlert,
  BadgeCheck,
  Lightbulb
} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Hourglass className="text-cyber-blue h-10 w-10" />,
      title: "Faster Investigations",
      description: "Reduce investigation time by up to 60% with AI-powered analysis of case files and evidence.",
      stats: "60% reduction in time-to-insight"
    },
    {
      icon: <Users className="text-cyber-blue h-10 w-10" />,
      title: "Reduced Manual Workload",
      description: "Free up officers for field work by automating data processing and pattern identification.",
      stats: "75% less manual data analysis"
    },
    {
      icon: <BarChart3 className="text-cyber-blue h-10 w-10" />,
      title: "Better Decision-Making",
      description: "Make more informed decisions with comprehensive data visualizations and AI-generated insights.",
      stats: "2.5x more accurate risk assessment"
    },
    {
      icon: <ShieldAlert className="text-cyber-blue h-10 w-10" />,
      title: "Improved Crime Prevention",
      description: "Detect repeat offenders and crime patterns earlier to prevent future criminal activity.",
      stats: "32% increase in early pattern detection"
    }
  ];

  const testimonials = [
    {
      quote: "ModusMapping has transformed our investigative capabilities. We're solving cases faster and with more accuracy than ever before.",
      author: "Chief Thomas Walker",
      role: "Metropolitan Police Department"
    },
    {
      quote: "The ability to visualize criminal networks has been a game-changer for our detectives. Connections that would have taken weeks to discover are now visible instantly.",
      author: "Detective Sarah Chen",
      role: "Special Investigations Unit"
    },
    {
      quote: "The time saved on administrative tasks has allowed our officers to spend more time in the field and engaging with the community.",
      author: "Captain James Rodriguez",
      role: "County Sheriff's Office"
    }
  ];

  return (
    <div id="benefits" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 left-1/4 top-1/3 rounded-full bg-cyber-purple/5 blur-3xl"></div>
        <div className="absolute h-64 w-64 right-1/4 bottom-1/3 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Key <span className="text-cyber-gradient">Benefits</span> for Law Enforcement
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            ModusMapping delivers measurable improvements in investigation efficiency, criminal network detection, and resource allocation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg border border-white/10 hover:border-cyber-blue/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-cyber-blue/10 p-3 rounded-lg self-start">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-cyber-gray mb-4">{benefit.description}</p>
                  
                  <div className="glass-panel py-2 px-4 rounded-lg inline-block">
                    <span className="text-cyber-blue font-medium">{benefit.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="my-16 p-6 glass-panel rounded-lg border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/5">
              <h3 className="text-2xl font-bold mb-4 text-white">Success Metrics</h3>
              <p className="text-cyber-gray mb-8">
                Law enforcement agencies using ModusMapping have reported significant improvements across key performance indicators:
              </p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-lightGray">Case Closure Rate</span>
                    <span className="text-cyber-blue">+42%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-lightGray">Officer Productivity</span>
                    <span className="text-cyber-blue">+65%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-lightGray">Serial Crime Detection</span>
                    <span className="text-cyber-blue">+53%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" style={{ width: '53%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-lightGray">Data Processing Time</span>
                    <span className="text-cyber-blue">-78%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <div className="p-1 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20">
                <div className="rounded-lg glass-panel p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                    <BadgeCheck className="text-cyber-blue mr-2 h-5 w-5" />
                    Testimonials
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-white/5 border-white/10">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-2 mb-2">
                            <Lightbulb className="text-cyber-blue h-4 w-4 mt-1" />
                            <p className="text-cyber-lightGray text-sm italic">"{testimonial.quote}"</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-sm font-medium">{testimonial.author}</p>
                            <p className="text-xs text-cyber-gray">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Return on Investment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-5 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-cyber-blue mb-2">$120K</div>
              <p className="text-cyber-lightGray text-sm">Average annual cost savings</p>
            </div>
            
            <div className="glass-panel p-5 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-cyber-blue mb-2">240+</div>
              <p className="text-cyber-lightGray text-sm">Officer hours saved monthly</p>
            </div>
            
            <div className="glass-panel p-5 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-cyber-blue mb-2">3.2x</div>
              <p className="text-cyber-lightGray text-sm">Return on investment</p>
            </div>
            
            <div className="glass-panel p-5 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-cyber-blue mb-2">6 mo</div>
              <p className="text-cyber-lightGray text-sm">Average payback period</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
