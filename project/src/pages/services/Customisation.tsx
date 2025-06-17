import React from 'react';
import { Palette, Settings, Lightbulb, Zap } from 'lucide-react';

export const Customisation: React.FC = () => {
  const categories = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Custom cabin interiors that reflect your style and brand.',
      options: [
        'Premium wall panels (stainless steel, wood, glass)',
        'Custom flooring options',
        'Ceiling designs with LED lighting',
        'Handrail styles and materials',
        'Mirror and artwork installations'
      ]
    },
    {
      icon: Settings,
      title: 'Control Systems',
      description: 'Advanced control panels and operational features.',
      options: [
        'Touchscreen control panels',
        'Biometric access control',
        'Voice command integration',
        'Smart card readers',
        'Custom button layouts'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Lighting Solutions',
      description: 'Innovative lighting designs for enhanced ambiance.',
      options: [
        'LED strip lighting',
        'Color-changing ambient lights',
        'Emergency lighting systems',
        'Motion sensor lighting',
        'Custom lighting patterns'
      ]
    },
    {
      icon: Zap,
      title: 'Smart Features',
      description: 'Cutting-edge technology integration.',
      options: [
        'IoT connectivity and monitoring',
        'Mobile app integration',
        'Predictive maintenance alerts',
        'Energy monitoring systems',
        'Remote diagnostics'
      ]
    }
  ];

  const portfolioItems = [
    {
      title: 'Luxury Hotel Elevator',
      description: 'Premium interior with marble finish and gold accents',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Corporate Office Tower',
      description: 'Modern glass design with smart access control',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Residential Complex',
      description: 'Warm wood paneling with soft LED lighting',
      image: 'https://images.pexels.com/photos/2850189/pexels-photo-2850189.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Shopping Mall',
      description: 'Colorful themed design with interactive displays',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Elevator Customisation
          </h1>
          <p className="text-xl lg:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Transform your elevators into unique experiences with our comprehensive 
            customisation solutions tailored to your vision and requirements.
          </p>
        </div>
      </section>

      {/* Customisation Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Customisation Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From aesthetic enhancements to functional upgrades, we offer complete 
              customisation solutions to match your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <category.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {category.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Custom Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent customisation projects that showcase 
              our expertise and creative capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
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
              Our Customisation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collaborative approach that ensures your vision becomes reality.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'Understanding your vision and requirements' },
              { step: '2', title: 'Design', description: '3D concepts and detailed specifications' },
              { step: '3', title: 'Approval', description: 'Review and finalize design elements' },
              { step: '4', title: 'Materials', description: 'Source premium materials and components' },
              { step: '5', title: 'Installation', description: 'Expert installation by certified team' },
              { step: '6', title: 'Handover', description: 'Final inspection and project completion' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Something Unique?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
            Let's work together to design and build the perfect elevator 
            customisation for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919354927034"
              className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <a
              href="mailto:info@trezorelevators.com"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};