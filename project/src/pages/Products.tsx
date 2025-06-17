import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Econovator2 from '../Assets/Econovator2.jpg'
import Premiavator1 from '../Assets/Premiavator1.jpg'
import Elitavator1 from '../Assets/Elitavator1.jpg'

const products = [
  {
    id: 'econovator',
    name: 'Econovator',
    category: 'Budget-Friendly',
    image: Econovator2,
    description: 'Cost-effective elevator solution without compromising on safety and reliability.',
    features: ['Energy Efficient', 'Compact Design', 'Easy Maintenance', 'Budget-Friendly'],
    price: 'Starting from ₹8,50,000',
    rating: 4.5
  },
  {
    id: 'premiavator',
    name: 'Premiavator',
    category: 'Premium Series',
    image: Premiavator1,
    description: 'Premium elevator with advanced features and elegant design for luxury spaces.',
    features: ['Smart Controls', 'Premium Finishes', 'Quiet Operation', 'Advanced Safety'],
    price: 'Starting from ₹15,00,000',
    rating: 4.8
  },
  {
    id: 'elitavator',
    name: 'Elitavator',
    category: 'Elite Series',
    image: Elitavator1,
    description: 'Elite series elevator with cutting-edge technology and superior performance.',
    features: ['IoT Enabled', 'Touchscreen Controls', 'Biometric Access', 'Energy Star Rated'],
    price: 'Starting from ₹25,00,000',
    rating: 4.9
  },
  {
    id: 'eldevator',
    name: 'Eldevator',
    category: 'Elderly Friendly',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Specially designed elevator with accessibility features for elderly and disabled users.',
    features: ['Wheelchair Accessible', 'Audio Announcements', 'Large Buttons', 'Emergency Phone'],
    price: 'Starting from ₹12,00,000',
    rating: 4.7
  },
  {
    id: 'medivator',
    name: 'Medivator',
    category: 'Medical Grade',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Hospital-grade elevator designed for medical facilities with stretcher compatibility.',
    features: ['Stretcher Compatible', 'Antibacterial Coating', 'Emergency Power', 'Smooth Operation'],
    price: 'Starting from ₹18,00,000',
    rating: 4.8
  },
  {
    id: 'cargolift',
    name: 'CargoLift',
    category: 'Freight Elevator',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Heavy-duty freight elevator for industrial and commercial cargo transportation.',
    features: ['High Load Capacity', 'Durable Construction', 'Industrial Grade', 'Weather Resistant'],
    price: 'Starting from ₹20,00,000',
    rating: 4.6
  },
  {
    id: 'homelift',
    name: 'HomeLift',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Compact home elevator perfect for residential buildings and private homes.',
    features: ['Space Saving', 'Home Integration', 'Quiet Operation', 'Custom Interiors'],
    price: 'Starting from ₹10,00,000',
    rating: 4.4
  },
  {
    id: 'skylift',
    name: 'SkyLift',
    category: 'High-Rise',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'High-speed elevator designed for tall buildings and skyscrapers.',
    features: ['High Speed', 'Advanced Control', 'Energy Efficient', 'Destination Control'],
    price: 'Starting from ₹30,00,000',
    rating: 4.9
  },
  {
    id: 'greenlift',
    name: 'GreenLift',
    category: 'Eco-Friendly',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Environmentally conscious elevator with green technology and energy recovery.',
    features: ['Energy Recovery', 'LED Lighting', 'Eco Materials', 'Carbon Neutral'],
    price: 'Starting from ₹16,00,000',
    rating: 4.7
  },
  {
    id: 'smartlift',
    name: 'SmartLift',
    category: 'Smart Technology',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'AI-powered smart elevator with predictive maintenance and IoT connectivity.',
    features: ['AI Powered', 'Predictive Maintenance', 'Remote Monitoring', 'App Control'],
    price: 'Starting from ₹22,00,000',
    rating: 4.8
  },
  {
    id: 'luxlift',
    name: 'LuxLift',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Ultra-luxury elevator with bespoke design and premium materials.',
    features: ['Bespoke Design', 'Premium Materials', 'Custom Lighting', 'Concierge Integration'],
    price: 'Starting from ₹35,00,000',
    rating: 5.0
  },
  {
    id: 'quicklift',
    name: 'QuickLift',
    category: 'Express',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Express elevator for buildings requiring fast vertical transportation.',
    features: ['Express Service', 'High Capacity', 'Fast Installation', 'Minimal Waiting'],
    price: 'Starting from ₹14,00,000',
    rating: 4.6
  }
];

export const Products: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Elevator Solutions
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of elevators designed to meet 
            every vertical transportation need with style and reliability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex items-center  bg-transparent-600 hover:bg-yellow-700 border border-yellow-700 text-black px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};