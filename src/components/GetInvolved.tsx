import React from 'react';
import { Banknote, Calendar, Briefcase } from 'lucide-react';

interface InvolvementCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
  bgImage: string;
}

const InvolvementCard: React.FC<InvolvementCardProps> = ({ 
  icon, title, subtitle, buttonText, bgColor, textColor, bgImage 
}) => {
  return (
    <div 
      className={`${bgColor} ${textColor} text-center py-16 px-8 flex flex-col items-center justify-center relative overflow-hidden transform transition-transform hover:scale-[1.02]`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={`absolute inset-0 ${bgColor} opacity-90`}></div>
      <div className="relative z-10">
        <div className="bg-white/20 rounded-full p-4 mb-6 inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <h4 className="text-4xl font-bold mb-6">{subtitle}</h4>
        <a 
          href="#" 
          className="inline-block border-2 border-white hover:bg-white/20 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const GetInvolved: React.FC = () => {
  return (
    <section id="get-involved" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GET INVOLVED!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            donate, volunteer or ask about sponsorship opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          <InvolvementCard
            icon={<Banknote className="w-12 h-12" />}
            title="Donate"
            subtitle="NOW"
            buttonText="LEARN MORE"
            bgColor="bg-orange-500"
            textColor="text-white"
            bgImage="https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <InvolvementCard
            icon={<Calendar className="w-12 h-12" />}
            title="Volunteer"
            subtitle="TIME"
            buttonText="LEARN MORE"
            bgColor="bg-rose-800"
            textColor="text-white"
            bgImage="https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <InvolvementCard
            icon={<Briefcase className="w-12 h-12" />}
            title="Become a Corporate"
            subtitle="SPONSOR"
            buttonText="LEARN MORE"
            bgColor="bg-green-600"
            textColor="text-white"
            bgImage="https://images.pexels.com/photos/6994987/pexels-photo-6994987.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;