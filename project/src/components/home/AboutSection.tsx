import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leading the Way in 
              <span className="text-yellow-600"> Vertical Transportation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 17 years, Liftas Components has been at the forefront of elevator technology, 
              providing innovative solutions that combine safety, reliability, and cutting-edge design. 
              Our commitment to excellence has made us the trusted choice for residential, commercial, 
              and industrial projects across the region.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From installation to maintenance, our experienced team ensures every elevator operates 
              at peak performance, delivering smooth and safe transportation for millions of passengers daily.
            </p>
            {/* <Link
              to="/trezor-story"
              className="inline-flex items-center space-x-2 bg-transparent-600 hover:bg-yellow-600 border border-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>View Liftas Story</span>
              <ArrowRight className="h-5 w-5" />
            </Link> */}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div 
                className="w-full h-80 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&h=400&q=80)' }}
              />
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Every elevator undergoes rigorous testing and quality checks to ensure 
                  compliance with international safety standards and optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};