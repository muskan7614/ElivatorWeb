import React from 'react';
import { Shield, Clock, Wrench, Phone} from 'lucide-react';
import { usePopup } from '../../context/PopupContext';
import AMCimage from '../../Assets/AMC-507x380.jpg'

export const AMC: React.FC = () => {
  const { openPopup } = usePopup();
  const packages = [
    {
      name: 'Basic AMC',
      price: '₹12,000/year',
      features: [
        'Monthly maintenance visits',
        'Basic safety checks',
        'Lubrication and cleaning',
        'Emergency breakdown support',
        'Parts replacement (additional cost)',
        'Standard working hours support'
      ]
    },
    {
      name: 'Comprehensive AMC',
      price: '₹24,000/year',
      features: [
        'Bi-weekly maintenance visits',
        'Complete safety inspections',
        'Preventive maintenance',
        '24/7 emergency support',
        'Minor parts included',
        'Priority response time',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Premium AMC',
      price: '₹36,000/year',
      features: [
        'Weekly maintenance visits',
        'Advanced diagnostics',
        'Predictive maintenance',
        'All parts & materials included',
        'Immediate response guarantee',
        'Annual modernization review',
        'Extended warranty coverage'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Annual Maintenance Contracts
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive maintenance solutions to keep your elevators running 
            smoothly and safely throughout the year.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our AMC Services?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Annual Maintenance Contracts ensure your elevators operate at peak performance 
                while minimizing downtime and extending equipment life. With regular maintenance, 
                you can prevent costly breakdowns and ensure passenger safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-800">Enhanced safety and reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-800">Reduced downtime and breakdowns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-800">Expert technician support</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src= {AMCimage}
                alt="Elevator Maintenance"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* After-Sales Services & Why Choose Liftas Section (Side by Side) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* After-Sales Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">After-Sales Services</h2>
            <p className="text-gray-700 mb-6">Liftas is recognized for its prompt, professional, and personalized service. Our service division provides:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-6">
              <li>24/7 emergency support</li>
              <li>Scheduled maintenance services</li>
              <li>Spare parts availability</li>
              <li>AMC for elevators of all types</li>
            </ul>
            <p className="text-gray-600">Our service teams are strategically located across Delhi NCR to ensure rapid response times.</p>
          </div>
          {/* Why Choose Liftas */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Choose Liftas?</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Full vertical integration for better quality control</li>
              <li>Diverse product range suitable for all project scales</li>
              <li>Dedicated leadership with over a decade of industry expertise</li>
              <li>Responsive customer service and maintenance team</li>
              <li>High customer satisfaction with a proven track record in NCR</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Contact our team today to discuss your AMC requirements and get a customized quote 
            for your elevator maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9818190974"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <button onClick={() => {
                      console.log("Enquiry button clicked");
                      openPopup();
                    }} className="inline-flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                      {/* <Mail className="h-5 w-5" /> */}
                      <span>Get Quote</span>
                    </button>
          </div>
        </div>
      </section>
    </div>
  );
};