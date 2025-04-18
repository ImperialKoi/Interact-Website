import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "CommunityReach's education program changed my children's future. The tutoring and support they received helped them excel in school and build confidence.",
      name: "Sarah Johnson",
      role: "Parent & Community Member",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Volunteering with CommunityReach has been one of the most rewarding experiences of my life. The impact we make together is truly inspiring.",
      name: "Michael Rodriguez",
      role: "Volunteer Since 2019",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "As a corporate sponsor, we've seen firsthand how efficiently CommunityReach puts resources to work. Their programs create real, measurable change.",
      name: "Jennifer Williams",
      role: "Corporate Partner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the community members, volunteers, and partners who make our work possible.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl bg-gradient-to-r from-green-600 to-green-700">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-500 ${
                    index === current 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute top-0 -translate-x-full'
                  }`}
                >
                  <div className="grid md:grid-cols-5 min-h-[400px]">
                    <div className="md:col-span-2 bg-gray-900">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center text-white">
                      <Quote className="w-12 h-12 mb-6 text-white/30" />
                      <p className="text-xl md:text-2xl mb-8 italic">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-xl">{testimonial.name}</p>
                        <p className="text-white/80">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-between px-4">
            <button 
              onClick={prev} 
              className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transform transition-transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next} 
              className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transform transition-transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;