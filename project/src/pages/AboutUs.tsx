import React from 'react';
import { Users, Award, Shield, Zap } from 'lucide-react';
import Aboutus from '../Assets/About-us-507x380.jpg'
import owner from '../Assets/owner.jpg'
import saloni from '../Assets/saloni.jpg'

export const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: ' All our products comply with national and international safety standards and are built with advanced safety mechanisms.'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: ' Robust manufacturing standards and professional execution ensure maximum uptime and operational efficiency.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Integration of the latest elevator technologies including microprocessor-based control systems and energy-efficient components.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: ' We emphasize personalized solutions and exceptional after-sales support withresponsive maintenance services and long-term AMCs.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Liftas Components
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
                Company Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 Liftas Components Pvt. Ltd. is a leading elevator manufacturer and service provider based in Gurugram,
 Haryana. Since its inception in 2016, Liftas has been committed to providing innovative, reliable, and safe
 vertical transportation solutions across residential, commercial, and industrial sectors. We offer a
 comprehensive suite of elevator systems including hydraulic, gearless traction, machine-room-less (MRL),
 vacuum, and capsule elevators.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 We also manufacture essential elevator components and accessories, offering an integrated ecosystem for
 quality and safety in elevation technology
              </p>
              {/* <p className="text-lg text-gray-600 leading-relaxed">
                Today, with a team of 50+ dedicated professionals and a comprehensive 
                service network, we continue to set new standards in elevator technology, 
                maintenance, and customer service.
              </p> */}
            </div>
            <div className="relative">
              <img
                src={Aboutus}
                alt="Liftas Components Office"
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

      {/* Leadership/Owners Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries who guide Liftas Components towards excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Owner/CEO 1 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-8">
              <img
                src={owner}
                alt="Amit Goel"
                className=" object-top object-cover w-36 h-36 rounded-full shadow-lg mb-6 border-4 border-blue-100"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Amit Goel</h3>
              <p className="text-blue-600 font-medium mb-3"> Chief Executive Officer (CEO)</p>
              <p className="text-gray-600 text-center">
                 Amit brings over a decade of experience in project execution,
 vendor coordination, and operational management. He leads the daily operations and client delivery at
 Liftas.
              </p>
            </div>
            {/* Owner/CEO 2 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-8">
              <img
                src={saloni}
                alt="Saloni Goel"
                className="object-cover w-36 h-36 rounded-full shadow-lg mb-6 border-4 border-blue-100"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Saloni Goel</h3>
              <p className="text-blue-600 font-medium mb-3"> Head of Human Resources (HR)</p>
              <p className="text-gray-600 text-center">
                Saloni has 10+ years of HR leadership experience and is
 responsible for organizational development, recruitment, employee engagement, and workplace culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};