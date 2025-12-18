import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-white">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-full bg-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-gray-200">jordan.smith@email.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-full bg-indigo-500/20">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-gray-200">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 rounded-full bg-purple-500/20">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-gray-200">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="mb-2 text-green-400">Message Sent!</h3>
                    <p className="text-sm text-gray-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-gray-300">
                        Name <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe" 
                        required 
                        className="transition-all focus:ring-2 focus:ring-blue-500 bg-gray-900 border-gray-600 text-gray-200 placeholder:text-gray-500"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-gray-300">
                        Email <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="transition-all focus:ring-2 focus:ring-blue-500 bg-gray-900 border-gray-600 text-gray-200 placeholder:text-gray-500"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm text-gray-300">
                        Subject
                      </Label>
                      <Input 
                        id="subject" 
                        type="text" 
                        placeholder="What's this about?" 
                        className="transition-all focus:ring-2 focus:ring-blue-500 bg-gray-900 border-gray-600 text-gray-200 placeholder:text-gray-500"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm text-gray-300">
                        Message <span className="text-red-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hi..."
                        rows={5}
                        required
                        className="transition-all focus:ring-2 focus:ring-blue-500 resize-none bg-gray-900 border-gray-600 text-gray-200 placeholder:text-gray-500"
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gap-2 transition-all hover:gap-3 bg-blue-600 hover:bg-blue-700" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}