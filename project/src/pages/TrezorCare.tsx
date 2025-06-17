import React from 'react';
import { Heart, Shield, Clock, Users, CheckCircle, Star } from 'lucide-react';

export const TrezorCare: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Complete protection for all elevator components with extended warranty coverage.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and emergency response services for peace of mind.'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Personal account managers and certified technicians assigned to your property.'
    },
    {
      icon: Heart,
      title: 'Preventive Care',
      description: 'Proactive maintenance approach to prevent issues before they occur.'
    }
  ];

  const plans = [
    {
      name: 'Essential Care',
      price: '₹18,000/year',
      features: [
        'Monthly preventive maintenance',
        'Priority repair services',
        'Basic parts coverage',
        'Emergency support',
        'Performance monitoring',
        'Annual safety inspection'
      ]
    },
    {
      name: 'Premium Care',
      price: '₹32,000/year',
      features: [
        'Bi-weekly maintenance visits',
        'All parts and materials included',
        '24/7 emergency response',
        'Predictive maintenance',
        'Remote monitoring system',
        'Annual modernization review',
        'Extended warranty coverage'
      ],
      popular: true
    },
    {
      name: 'Elite Care',
      price: '₹48,000/year',
      features: [
        'Weekly maintenance and monitoring',
        'Complete component protection',
        'Immediate response guarantee',
        'Advanced diagnostics',
        'Modernization planning',
        'Energy efficiency optimization',
        'VIP customer support',
        'Concierge services'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Suresh Gupta',
      company: 'Elegant Towers',
      text: 'Trezor Care has transformed our elevator maintenance experience. No more unexpected breakdowns!',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      company: 'Corporate Plaza',
      text: 'The peace of mind that comes with Trezor Care is invaluable. Excellent service and support.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 text-teal-200" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Trezor Care
          </h1>
          <p className="text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Premium elevator care services that go beyond maintenance – 
            providing complete peace of mind and exceptional reliability.
          </p>
        </div>
      </section>

      {/* What is Trezor Care */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is Trezor Care?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Trezor Care is our premium elevator service program that combines advanced 
                maintenance, proactive monitoring, and personalized support to ensure your 
                elevators operate at peak performance throughout their lifecycle.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                More than just maintenance, Trezor Care is a comprehensive partnership 
                focused on maximizing uptime, extending equipment life, and providing 
                exceptional user experiences for your building occupants.
              </p>
              <div className="bg-teal-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-teal-900 mb-3">
                  Our Promise
                </h3>
                <p className="text-teal-800">
                  With Trezor Care, you're not just getting a service – you're investing 
                  in a relationship built on trust, expertise, and unwavering commitment 
                  to your elevator's performance and your satisfaction.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trezor Care Service"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trezor Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference that comprehensive, personalized elevator care can make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Care Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the Trezor Care plan that best matches your needs and expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                  plan.popular ? 'ring-2 ring-teal-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-teal-600">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied Trezor Care customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience Trezor Care Today
          </h2>
          <p className="text-lg text-teal-100 mb-8 leading-relaxed">
            Join hundreds of satisfied customers who trust Trezor Care for their 
            elevator maintenance and support needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919354927034"
              className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Call for Consultation
            </a>
            <a
              href="mailto:info@trezorelevators.com"
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};