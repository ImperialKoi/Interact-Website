import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { MapPin } from 'lucide-react';


const LocationMap = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }, 500);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id='location'>
            <div className="w-full rounded-xl overflow-hidden text-black bg-grey-50 p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <Card className="overflow-hidden border-sm shadow-xl">
                                <CardContent className="p-0">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.704498383707!2d-80.54399518452214!3d43.47229767912818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f3c9ffb8c7%3A0xee2bdca958266095!2sEngineering%207%20(E7)%2C%20University%20of%20Waterloo!5e0!3m2!1sen!2sca!4v1713819329921!5m2!1sen!2sca" 
                                    width="100%" 
                                    height="600" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Hackathon Location Map"
                                    className="w-full"
                                ></iframe>
                                </CardContent>
                            </Card>
                        </div>
                
                <section className="py-20 order-1 md:order-2">
                          <div className="container mx-auto px-4 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                              <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Message Us</h2>
                                <p className="text-xl text-gray-600">
                                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                                </p>
                              </div>
                    
                              <div className="bg-white rounded-xl shadow-lg p-8">
                                {submitted ? (
                                  <div className="text-center py-8">
                                    <div className="bg-green-100 text-green-700 rounded-lg p-4 inline-flex items-center">
                                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                      </svg>
                                      Message sent successfully!
                                    </div>
                                  </div>
                                ) : (
                                  <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                      <label htmlFor="name" className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                                        <User className="w-4 h-4" />
                                        Your Name
                                      </label>
                                      <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                      />
                                    </div>
                    
                                    <div>
                                      <label htmlFor="email" className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address
                                      </label>
                                      <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                      />
                                    </div>
                    
                                    <div>
                                      <label htmlFor="message" className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Your Message
                                      </label>
                                      <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                      ></textarea>
                                    </div>
                    
                                    <button
                                      type="submit"
                                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                                    >
                                      Send Message <Send className="w-4 h-4" />
                                    </button>
                                  </form>
                                )}
                              </div>
                            </div>
                          </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;