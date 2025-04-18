import React from 'react';
import { Users, Heart, Award } from 'lucide-react';

const AboutCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to improving lives through community-driven initiatives, 
            education, and sustainable support programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutCard
            icon={<Users className="w-10 h-10" />}
            title="Community First"
            description="We believe in the power of community to create lasting change. Our programs are designed with local needs in mind."
          />
          <AboutCard
            icon={<Heart className="w-10 h-10" />}
            title="Compassionate Support"
            description="We provide resources and assistance with dignity and respect, ensuring everyone has access to the help they need."
          />
          <AboutCard
            icon={<Award className="w-10 h-10" />}
            title="Proven Impact"
            description="For over 15 years, our programs have made measurable differences in thousands of lives throughout the region."
          />
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2008, CommunityReach began with a simple mission: to help our neighbors in need. 
                What started as a small food pantry has grown into a comprehensive community resource center.
              </p>
              <p className="text-gray-600">
                Today, we serve over 5,000 individuals annually through our various programs, 
                from education initiatives to emergency services.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team members working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;