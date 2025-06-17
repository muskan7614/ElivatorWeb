import React from 'react';
import { Users, Award, Shield, Zap } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority in every project we undertake, ensuring compliance with international standards.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest quality standards through rigorous testing and continuous improvement processes.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology to deliver modern, efficient, and sustainable elevator solutions.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service and personalized attention to client needs.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Trezor Elevators
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            17+ years of excellence in vertical transportation solutions, 
            committed to elevating experiences and exceeding expectations.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize vertical transportation in India, 
                Trezor Elevators has grown from a small startup to a leading name in the elevator industry. 
                Our journey began with a simple mission: to provide safe, reliable, and innovative 
                elevator solutions that enhance the way people move within buildings.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have successfully completed 999+ projects, ranging from 
                residential apartments to commercial complexes and industrial facilities. 
                Our commitment to quality and customer satisfaction has earned us the trust 
                of clients across diverse sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, with a team of 50+ dedicated professionals and a comprehensive 
                service network, we continue to set new standards in elevator technology, 
                maintenance, and customer service.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Trezor Elevators Office"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <value.icon className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead Trezor Elevators towards continued excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
                alt="CEO"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 leading-relaxed">
                With over 20 years in the elevator industry, Rajesh leads our vision of 
                delivering world-class vertical transportation solutions.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80"
                alt="CTO"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 leading-relaxed">
                Priya drives our innovation initiatives, ensuring we stay ahead of 
                technological advancements in elevator systems.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80"
                alt="COO"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Patel</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 leading-relaxed">
                Amit oversees our operations, ensuring smooth project execution and 
                maintaining our high service standards.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};