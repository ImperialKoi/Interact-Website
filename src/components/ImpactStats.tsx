import React, { useState, useEffect, useRef } from 'react';
import { Users, Home, UtensilsCrossed, GraduationCap } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ 
  icon, value, label, prefix = '', suffix = '', duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = Math.ceil(value / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center p-3 bg-green-100 text-green-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        {prefix}{Math.round(count).toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const ImpactStats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day, we work to create positive change in our community. Here's what we've accomplished together.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            icon={<Users className="w-8 h-8" />}
            value={5000}
            label="People Served Annually"
            prefix=""
            suffix="+"
          />
          <StatItem 
            icon={<UtensilsCrossed className="w-8 h-8" />}
            value={120000}
            label="Meals Provided"
            prefix=""
            suffix=""
          />
          <StatItem 
            icon={<GraduationCap className="w-8 h-8" />}
            value={850}
            label="Education Program Graduates"
            prefix=""
            suffix=""
          />
          <StatItem 
            icon={<Home className="w-8 h-8" />}
            value={350}
            label="Families Housed"
            prefix=""
            suffix=""
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;