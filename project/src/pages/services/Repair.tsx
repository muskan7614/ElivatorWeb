import React from 'react';
import { Clock, Wrench, Shield, CheckCircle } from 'lucide-react';

export const Repair: React.FC = () => {
  const services = [
    {
      title: 'Emergency Repair',
      description: '24/7 emergency repair services for critical elevator breakdowns.',
      features: [
        'Immediate response within 2 hours',
        'Emergency technician dispatch',
        'Temporary safety measures',
        'Priority repair scheduling'
      ],
      icon: Clock
    },
    {
      title: 'Mechanical Repairs',
      description: 'Comprehensive mechanical system repairs and component replacements.',
      features: [
        'Motor and gearbox repairs',
        'Cable and rope replacements',
        'Brake system maintenance',
        'Guide rail adjustments'
      ],
      icon: Wrench
    },
    {
      title: 'Electrical Repairs',
      description: 'Expert electrical system diagnostics and repairs.',
      features: [
        'Control panel repairs',
        'Wiring system fixes',
        'Sensor replacements',
        'Power supply issues'
      ],
      icon: Shield
    },
    {
      title: 'Safety System Repairs',
      description: 'Critical safety component repairs and testing.',
      features: [
        'Emergency brake repairs',
        'Door safety sensors',
        'Communication systems',
        'Fire safety features'
      ],
      icon: CheckCircle
    }
  ];

  const commonIssues = [
    'Elevator not moving between floors',
    'Doors not opening or closing properly',
    'Unusual noises during operation',
    'Irregular floor leveling',
    'Control panel malfunctions',
    'Emergency communication failures',
    'Lighting or ventilation issues',
    'Speed irregularities'
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Elevator Repair Services
          </h1>
          <p className="text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable repair services to get your elevators back in service 
            with minimal downtime and maximum safety.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4">
            <Clock className="h-6 w-6 animate-pulse" />
            <span className="text-lg font-semibold">24/7 Emergency Repair Hotline: +91-9354927034</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive repair solutions for all types of elevator issues, 
              from minor adjustments to major component replacements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Common Elevator Issues We Fix
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced technicians are equipped to handle a wide range of elevator problems. 
                Here are some of the most common issues we resolve quickly and efficiently.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Elevator Repair"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure fast, effective repairs with lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Emergency Call', description: 'Immediate response to your repair request' },
              { step: '2', title: 'Site Assessment', description: 'On-site evaluation and diagnosis' },
              { step: '3', title: 'Repair Plan', description: 'Detailed repair strategy and timeline' },
              { step: '4', title: 'Execution', description: 'Professional repair work by certified technicians' },
              { step: '5', title: 'Testing', description: 'Comprehensive testing and quality assurance' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};