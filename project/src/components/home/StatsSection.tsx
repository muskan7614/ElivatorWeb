import React from 'react';
import { Award, Users, Star, Clock } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Award,
    number: '999+',
    label: 'Completed Projects',
    description: 'Successfully delivered projects across residential and commercial sectors'
  },
  {
    id: 2,
    icon: Clock,
    number: '17+',
    label: 'Years of Expertise',
    description: 'Over a decade of experience in elevator technology and services'
  },
  {
    id: 3,
    icon: Star,
    number: '4.8/5',
    label: 'Customer Reviews',
    description: 'Consistently high ratings from satisfied clients across all projects'
  },
  {
    id: 4,
    icon: Users,
    number: '50+',
    label: 'Expert Team',
    description: 'Dedicated professionals committed to delivering excellence'
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Numbers Tell the Story
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Years of dedicated service have built our reputation as a trusted leader 
            in the elevator industry, backed by impressive results and satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <stat.icon className="h-12 w-12 text-yellow-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-yellow-100">
                  {stat.label}
                </h4>
                <p className="text-blue-200 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};