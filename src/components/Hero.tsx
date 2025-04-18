import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Hero: React.FC = () => {
  const slides = [
    {
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Making Our Community",
      highlight: "Stronger Together",
      subtitle: "Join us in building a better future through community service, education, and support programs."
    },
    {
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Empowering Through",
      highlight: "Education",
      subtitle: "Supporting lifelong learning and skill development for all community members."
    },
    {
      image: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Building a Future of",
      highlight: "Hope",
      subtitle: "Creating lasting change through compassion, dedication, and community involvement."
    }
  ];

  return (
    <section id="home" className="h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="h-full relative flex items-center justify-center"
              style={{
                backgroundImage: `url("${slide.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="container mx-auto px-4 lg:px-8 z-10 text-white text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {slide.title} <span className="text-green-400">{slide.highlight}</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#get-involved" 
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get Involved <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#programs" 
                    className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-medium py-3 px-8 rounded-md transition-all"
                  >
                    Our Programs
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;