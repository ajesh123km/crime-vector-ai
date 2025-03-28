
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demo request received!",
        description: "Our team will contact you shortly to arrange a demonstration.",
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
      
      // Reset submission state after delay
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div id="contact" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 left-1/3 -top-48 rounded-full bg-cyber-purple/5 blur-3xl"></div>
        <div className="absolute h-96 w-96 right-1/3 -bottom-48 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="text-cyber-gradient">Get in Touch</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Ready to transform your law enforcement agency's investigative capabilities? 
            Request a demonstration or discuss your specific needs with our team.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-8 rounded-lg border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Request a Demo</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-cyber-blue/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
                  <p className="text-cyber-gray text-center">
                    Thank you for your interest in ModusMapping. Our team will be in touch shortly to schedule your personalized demonstration.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cyber-lightGray mb-1">Full Name</label>
                      <Input 
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 focus:border-cyber-blue/50 text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cyber-lightGray mb-1">Email Address</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 focus:border-cyber-blue/50 text-white"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-cyber-lightGray mb-1">Organization</label>
                      <Input 
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 focus:border-cyber-blue/50 text-white"
                        placeholder="Your Law Enforcement Agency"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-cyber-lightGray mb-1">Message</label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 focus:border-cyber-blue/50 text-white min-h-[120px]"
                        placeholder="Tell us about your specific needs or questions..."
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Request a Demo
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-8 rounded-lg border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-panel rounded-lg">
                    <Mail className="text-cyber-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email Us</h4>
                    <p className="text-cyber-lightGray">info@modusmapping.com</p>
                    <p className="text-cyber-lightGray">support@modusmapping.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-panel rounded-lg">
                    <Phone className="text-cyber-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Call Us</h4>
                    <p className="text-cyber-lightGray">+1 (555) 123-4567</p>
                    <p className="text-cyber-lightGray">Mon-Fri, 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-panel rounded-lg">
                    <MapPin className="text-cyber-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Headquarters</h4>
                    <p className="text-cyber-lightGray">123 Tech Park Avenue</p>
                    <p className="text-cyber-lightGray">Suite 400</p>
                    <p className="text-cyber-lightGray">Boston, MA 02110</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-4">FAQ</h4>
                
                <div className="space-y-4">
                  <div className="glass-panel p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-cyber-blue mb-2">Is ModusMapping compliant with law enforcement data standards?</h5>
                    <p className="text-xs text-cyber-lightGray">Yes, ModusMapping is fully compliant with FBI CJIS Security Policy and other relevant data protection standards for law enforcement agencies.</p>
                  </div>
                  
                  <div className="glass-panel p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-cyber-blue mb-2">Can ModusMapping integrate with our existing systems?</h5>
                    <p className="text-xs text-cyber-lightGray">ModusMapping is designed with flexible APIs to integrate with most standard law enforcement database systems, case management software, and record management systems.</p>
                  </div>
                  
                  <div className="glass-panel p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-cyber-blue mb-2">What is the typical deployment timeline?</h5>
                    <p className="text-xs text-cyber-lightGray">A standard deployment takes 4-8 weeks, including system integration, data migration, and comprehensive training for your team.</p>
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

export default ContactSection;
