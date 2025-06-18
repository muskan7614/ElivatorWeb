import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft,  Star, Phone, Mail } from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const productDetails = {
  econovator: {
    name: 'Econovator',
    category: 'Budget-Friendly',
    price: 'Starting from ₹8,50,000',
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'The Econovator is our most cost-effective elevator solution that doesn\'t compromise on safety, reliability, or performance. Designed for budget-conscious customers who still demand quality and dependability in their vertical transportation needs.',
    features: [
      'Energy-efficient motor system',
      'Compact design suitable for small spaces',
      'Easy maintenance with accessible components',
      'Budget-friendly pricing without quality compromise',
      'Standard safety features included',
      'Reliable performance for daily use',
      'Quick installation process',
      ' 2-year comprehensive warranty'
    ],
    specifications: {
      'Load Capacity': '630 kg (8 persons)',
      'Speed': '1.0 m/s',
      'Travel Height': 'Up to 45 meters',
      'Floors Served': 'Up to 15 floors',
      'Machine Room': 'Required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Automatic sliding doors',
      'Control System': 'Microprocessor-based'
    },
    applications: [
      'Residential buildings',
      'Small office buildings',
      'Retail spaces',
      'Low-rise apartments',
      'Budget housing projects'
    ],
    
  },
   
  premiavator: {
    name: 'Premiavator',
    category: 'Premium Series',
    price: 'Starting from ₹15,00,000',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'The Premiavator represents our premium line of elevators, combining advanced technology with elegant design. Perfect for luxury residential and commercial spaces that demand superior performance and aesthetic appeal.',
    features: [
      'Smart control system with touch interface',
      'Premium interior finishes and materials',
      'Ultra-quiet operation technology',
      'Advanced safety systems',
      'Energy-efficient LED lighting',
      'Customizable cabin designs',
      'Remote monitoring capabilities',
      '5-year extended warranty'
    ],
    specifications: {
      'Load Capacity': '1000 kg (13 persons)',
      'Speed': '1.75 m/s',
      'Travel Height': 'Up to 100 meters',
      'Floors Served': 'Up to 30 floors',
      'Machine Room': 'Machine room-less option available',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Premium automatic doors',
      'Control System': 'Advanced microprocessor with touch screen'
    },
    applications: [
      'Luxury residential towers',
      'Premium office buildings',
      'High-end hotels',
      'Shopping malls',
      'Corporate headquarters'
    ]
  },

  elitavator: {
    name: 'Elitavator',
    category: 'Elite Series',
    price: 'Starting from ₹25,00,000',
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'The Elitavator represents the pinnacle of elevator technology, featuring cutting-edge innovations and superior performance. Designed for high-end commercial and residential projects that demand the very best in vertical transportation.',
    features: [
      'IoT-enabled smart control system',
      'Advanced touchscreen interface',
      'Biometric access control',
      'Energy Star rated efficiency',
      'Premium sound insulation',
      'Customizable luxury interiors',
      'Real-time monitoring system',
      '7-year comprehensive warranty'
    ],
    specifications: {
      'Load Capacity': '1275 kg (17 persons)',
      'Speed': '2.5 m/s',
      'Travel Height': 'Up to 150 meters',
      'Floors Served': 'Up to 50 floors',
      'Machine Room': 'Machine room-less design',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Premium automatic doors with sensors',
      'Control System': 'AI-powered microprocessor with predictive maintenance'
    },
    applications: [
      'Luxury skyscrapers',
      'Premium commercial complexes',
      'High-end residential towers',
      'Five-star hotels',
      'Corporate headquarters'
    ]
  },

  eldevator: {
    name: 'Eldevator',
    category: 'Elderly Friendly',
    price: 'Starting from ₹12,00,000',
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'The Eldevator is specially designed for accessibility and ease of use, making it perfect for elderly and disabled users. Features enhanced safety measures and user-friendly controls for maximum comfort and security.',
    features: [
      'Wheelchair-accessible design',
      'Audio announcements for each floor',
      'Large, easy-to-read buttons',
      'Emergency phone system',
      'Gentle acceleration and deceleration',
      'Non-slip flooring',
      'Handrail support system',
      '3-year comprehensive warranty'
    ],
    specifications: {
      'Load Capacity': '1000 kg (13 persons)',
      'Speed': '0.75 m/s',
      'Travel Height': 'Up to 30 meters',
      'Floors Served': 'Up to 10 floors',
      'Machine Room': 'Required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Wide automatic sliding doors',
      'Control System': 'User-friendly microprocessor with voice guidance'
    },
    applications: [
      'Senior living communities',
      'Healthcare facilities',
      'Retirement homes',
      'Accessible residential buildings',
      'Public buildings'
    ]
  },

  medivator: {
    name: 'Medivator',
    category: 'Medical Grade',
    price: 'Starting from ₹18,00,000',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'Hospital-grade elevator designed for medical facilities with stretcher compatibility and antibacterial coating.',
    specifications: {
      'Load Capacity': '1600 kg (21 persons)',
      'Speed': '1.5 m/s',
      'Travel Height': 'Up to 60 meters',
      'Floors Served': 'Up to 20 floors',
      'Machine Room': 'Required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Wide automatic doors',
      'Control System': 'Microprocessor-based with emergency power'
    }
  },

  cargolift: {
    name: 'CargoLift',
    category: 'Freight Elevator',
    price: 'Starting from ₹20,00,000',
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'Heavy-duty freight elevator for industrial and commercial cargo transportation.',
    specifications: {
      'Load Capacity': '3000 kg',
      'Speed': '0.5 m/s',
      'Travel Height': 'Up to 30 meters',
      'Floors Served': 'Up to 10 floors',
      'Machine Room': 'Required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Manual/Automatic',
      'Control System': 'Industrial grade controller'
    }
  },

  homelift: {
    name: 'HomeLift',
    category: 'Residential',
    price: 'Starting from ₹10,00,000',
    rating: 4.4,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'Compact home elevator perfect for residential buildings and private homes.',
    specifications: {
      'Load Capacity': '400 kg (5 persons)',
      'Speed': '0.5 m/s',
      'Travel Height': 'Up to 15 meters',
      'Floors Served': 'Up to 5 floors',
      'Machine Room': 'Not required',
      'Power Supply': 'Single Phase, 230V',
      'Door Type': 'Manual/Automatic',
      'Control System': 'Home automation compatible'
    }
  },

  skylift: {
    name: 'SkyLift',
    category: 'High-Rise',
    price: 'Starting from ₹30,00,000',
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'High-speed elevator designed for tall buildings and skyscrapers.',
    specifications: {
      'Load Capacity': '2000 kg (26 persons)',
      'Speed': '4.0 m/s',
      'Travel Height': 'Up to 300 meters',
      'Floors Served': 'Up to 80 floors',
      'Machine Room': 'Machine room-less',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Automatic high-speed doors',
      'Control System': 'Destination control system'
    }
  },

  greenlift: {
    name: 'GreenLift',
    category: 'Eco-Friendly',
    price: 'Starting from ₹16,00,000',
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'Environmentally conscious elevator with green technology and energy recovery.',
    specifications: {
      'Load Capacity': '1000 kg (13 persons)',
      'Speed': '1.0 m/s',
      'Travel Height': 'Up to 40 meters',
      'Floors Served': 'Up to 12 floors',
      'Machine Room': 'Not required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Automatic eco doors',
      'Control System': 'Energy recovery system'
    }
  },

  smartlift: {
    name: 'SmartLift',
    category: 'Smart Technology',
    price: 'Starting from ₹22,00,000',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'AI-powered smart elevator with predictive maintenance and IoT connectivity.',
    specifications: {
      'Load Capacity': '1000 kg (13 persons)',
      'Speed': '2.0 m/s',
      'Travel Height': 'Up to 60 meters',
      'Floors Served': 'Up to 20 floors',
      'Machine Room': 'Machine room-less',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Automatic smart doors',
      'Control System': 'AI-powered predictive maintenance'
    }
  },

  luxlift: {
    name: 'LuxLift',
    category: 'Luxury',
    price: 'Starting from ₹35,00,000',
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'Ultra-luxury elevator with bespoke design and premium materials.',
    specifications: {
      'Load Capacity': '800 kg (10 persons)',
      'Speed': '1.5 m/s',
      'Travel Height': 'Up to 30 meters',
      'Floors Served': 'Up to 8 floors',
      'Machine Room': 'Required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Luxury automatic doors',
      'Control System': 'Custom luxury controller'
    }
  },

  quicklift: {
    name: 'QuickLift',
    category: 'Express',
    price: 'Starting from ₹14,00,000',
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80'
    ],
    description: 'Express elevator for buildings requiring fast vertical transportation.',
    specifications: {
      'Load Capacity': '1000 kg (13 persons)',
      'Speed': '2.5 m/s',
      'Travel Height': 'Up to 40 meters',
      'Floors Served': 'Up to 12 floors',
      'Machine Room': 'Not required',
      'Power Supply': '3 Phase, 415V',
      'Door Type': 'Express automatic doors',
      'Control System': 'Fast response controller'
    }
  }
};

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productDetails[productId as keyof typeof productDetails] : null;
  const { openPopup } = usePopup();

  if (!product) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>

      {/* Main Product Card */}
      <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl shadow-lg p-6 mt-8 flex flex-col md:flex-row gap-8">
        {/* Left: Product Images */}
        <div className="md:w-1/2 w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
          />
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-16 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
        {/* Right: Product Details */}
        <div className="md:w-1/2 w-full flex flex-col justify-start">
          <div className="flex items-center space-x-3 mb-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-lg font-bold text-blue-600 mb-2">{product.price}</p>
          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
          {/* Technical Specifications */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Specifications</h3>
            <div className="bg-gray-50 p-3 rounded-2xl">
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700 text-xs">{key}:</span>
                    <span className="text-gray-900 text-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-auto">
            <a
              href="tel:08045729031"
              className="flex items-center justify-center space-x-2 bg-transparent-600 hover:bg-yellow-700 border border-yellow-700 text-black px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>Call for Quote</span>
            </a>
            <button onClick={openPopup} className="flex items-center justify-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      <Mail className="h-5 w-5" />
                      <span>Email Inquiry</span>
                      </button>
          </div>
        </div>
      </div>

      {/* Two More Full Product Details Below (Vertically) */}
      {(() => {
        const productKeys = Object.keys(productDetails) as (keyof typeof productDetails)[];
        const currentIndex = productKeys.indexOf(productId as keyof typeof productDetails);
        const nextProducts = [
          productDetails[productKeys[(currentIndex + 1) % productKeys.length]],
          productDetails[productKeys[(currentIndex + 2) % productKeys.length]],
        ];
        return (
          <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 mt-12">
            {nextProducts.map((prod, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8">
                {/* Left: Product Images */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {prod.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${prod.name} ${index + 1}`}
                        className="w-full h-16 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
                {/* Right: Product Details */}
                <div className="md:w-1/2 w-full flex flex-col justify-start">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {prod.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(prod.rating)}
                      <span className="text-sm text-gray-600 ml-1">({prod.rating})</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{prod.name}</h1>
                  <p className="text-lg font-bold text-blue-600 mb-2">{prod.price}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{prod.description}</p>
                  {/* Technical Specifications */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Specifications</h3>
                    <div className="bg-gray-50 p-3 rounded-2xl">
                      <div className="space-y-2">
                        {Object.entries(prod.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0">
                            <span className="font-medium text-gray-700 text-xs">{key}:</span>
                            <span className="text-gray-900 text-xs">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <a
                      href="tel:08045729031"
                      className="flex items-center justify-center space-x-2 bg-transparent-600 hover:bg-yellow-700 text-black border border-yellow-700 px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call for Quote</span>
                    </a>
                    <button onClick={() => {
      console.log("Enquiry button clicked");
      openPopup();
    }} className="flex items-center justify-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      <Mail className="h-5 w-5" />
                      <span>Email Inquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
};