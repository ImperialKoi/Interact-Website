import React from 'react';
import { BookOpen, UtensilsCrossed, Home, Lightbulb } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={`rounded-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl`}>
      <div className={`${color} p-6`}>
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      </div>
      <div className="bg-white p-6">
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-1 group">
          Learn more
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Education Support",
      description: "After-school programs, tutoring, and educational resources for students of all ages.",
      color: "bg-blue-600"
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" />,
      title: "Food Security",
      description: "Community pantry, meal programs, and nutrition education for families in need.",
      color: "bg-orange-500"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Housing Assistance",
      description: "Support for stable housing, including emergency assistance and housing navigation.",
      color: "bg-purple-600"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Career Development",
      description: "Job training, resume workshops, and career mentoring for workforce readiness.",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of programs designed to support our community members at every stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              color={program.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;