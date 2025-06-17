import React from 'react';
import { Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';

export const Modernisation: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Upgrade to modern technology for faster, smoother, and more reliable operation.'
    },
    {
      icon: Shield,
      title: 'Improved Safety',
      description: 'Latest safety features and compliance with current building codes and regulations.'
    },
    {
      icon: Sparkles,
      title: 'Modern Aesthetics',
      description: 'Contemporary cabin designs and finishes that enhance building appeal.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Value',
      description: 'Modernization increases property value and reduces long-term operating costs.'
    }
  ];

  const services = [
    {
      title: 'Control System Upgrade',
      description: 'Replace outdated relay-based systems with modern microprocessor controls.',
      features: [
        'Energy-efficient motor drives',
        'Smooth acceleration and deceleration',
        'Advanced diagnostics',
        'Remote monitoring capabilities'
      ]
    },
    {
      title: 'Safety System Enhancement',
      description: 'Upgrade safety components to meet latest standards and regulations.',
      features: [
        'Emergency communication systems',
        'Updated door operators',
        'Enhanced fire safety features',
        'Seismic safety upgrades'
      ]
    },
    {
      title: 'Interior Modernization',
      description: 'Transform elevator cabins with contemporary designs and materials.',
      features: [
        'LED lighting systems',
        'Stainless steel finishes',
        'Digital floor indicators',
        'Custom interior designs'
      ]
    },
    {
      title: 'Door System Upgrade',
      description: 'Install modern door operators for improved reliability and safety.',
      features: [
        'Smooth door operation',
        'Advanced door sensors',
        'Reduced noise levels',
        'Extended door life'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Elevator Modernisation
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Transform your aging elevators with cutting-edge technology and modern design 
            to enhance performance, safety, and property value.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Modernise Your Elevators?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elevator modernisation offers numerous benefits that go beyond just improved functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Modernisation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive upgrade solutions tailored to your specific needs and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Modernisation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring minimal disruption and maximum results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive evaluation of existing systems' },
              { step: '02', title: 'Design', description: 'Custom modernisation plan development' },
              { step: '03', title: 'Installation', description: 'Professional upgrade implementation' },
              { step: '04', title: 'Testing', description: 'Thorough testing and quality assurance' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
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