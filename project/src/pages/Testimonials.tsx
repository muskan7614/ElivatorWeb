import React  from 'react';
import { Star, Quote, Building, Users, Award } from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Property Manager',
    company: 'Metro Towers',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Exceptional service and quality installation. Liftas Components exceeded our expectations with their professionalism and attention to detail. Our residents are extremely satisfied with the smooth operation and modern design.',
    project: 'Residential Complex - 4 Elevators',
    location: 'Gurgaon'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Facilities Director',
    company: 'TechHub Solutions',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'The maintenance service is outstanding. Quick response times and thorough maintenance have kept our elevators running smoothly for over 3 years without any major issues. Their AMC service is worth every penny.',
    project: 'Office Building - 6 Elevators',
    location: 'Noida'
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Project Manager',
    company: 'Skyline Residency',
    rating: 5,
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Modern design and reliable performance. The elevator modernization project was completed on time and within budget. The new smart features have significantly improved the user experience for our residents.',
    project: 'Modernization Project - 8 Elevators',
    location: 'Delhi'
  },
  {
    id: 4,
    name: 'Sunita Gupta',
    position: 'Operations Manager',
    company: 'Elite Shopping Mall',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Professional team with excellent customer service. They handled our complex installation requirements with expertise and delivered a flawless result. The elevators handle heavy traffic beautifully.',
    project: 'Commercial Installation - 12 Elevators',
    location: 'Faridabad'
  },
  {
    id: 5,
    name: 'Dr. Vikram Singh',
    position: 'Hospital Administrator',
    company: 'City Medical Center',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'The medical-grade elevators are perfect for our hospital needs. Smooth operation, stretcher compatibility, and excellent safety features. The team understood our specific requirements perfectly.',
    project: 'Hospital Elevators - 3 Medivators',
    location: 'Delhi'
  },
  {
    id: 6,
    name: 'Meera Joshi',
    position: 'Building Owner',
    company: 'Luxury Apartments',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Beautiful customization and premium quality. The interior design of our elevators perfectly matches our building\'s luxury aesthetic. Residents constantly compliment the elegant finish and smooth ride.',
    project: 'Luxury Installation - 2 Premiavators',
    location: 'Gurgaon'
  },
  {
    id: 7,
    name: 'Rohit Agarwal',
    position: 'Facility Manager',
    company: 'Corporate Plaza',
    rating: 5,
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Energy-efficient and smart technology integration. The IoT-enabled elevators provide excellent analytics and predictive maintenance alerts. This has significantly reduced our operational costs.',
    project: 'Smart Elevator Installation - 8 Elevators',
    location: 'Noida'
  },
  {
    id: 8,
    name: 'Kavita Reddy',
    position: 'Property Developer',
    company: 'Green Homes',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Eco-friendly solutions that align with our sustainability goals. The GreenLift series helped us achieve our green building certification. Excellent energy recovery and minimal environmental impact.',
    project: 'Sustainable Installation - 6 GreenLifts',
    location: 'Gurgaon'
  }
];

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Happy Customers',
    description: 'Satisfied clients across various sectors'
  },
  {
    icon: Building,
    number: '999+',
    label: 'Projects Completed',
    description: 'Successful installations and modernizations'
  },
  {
    icon: Star,
    number: '4.9/5',
    label: 'Average Rating',
    description: 'Based on customer feedback and reviews'
  },
  {
    icon: Award,
    number: '17+',
    label: 'Years of Excellence',
    description: 'Consistent quality and service delivery'
  }
];




export const Testimonials: React.FC = () => {
  const { openPopup } = usePopup();
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  


  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Quote className="h-16 w-16 text-yellow-200" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl lg:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Discover what our valued clients have to say about their experience 
            with Liftas Components and the quality of our services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h4>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real customers who have trusted us with their vertical transportation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-yellow-600 mb-2" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm font-medium text-yellow-600">{testimonial.company}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-600">
                    <p className="font-medium mb-1">{testimonial.project}</p>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-lg text-yellow-100 mb-8 leading-relaxed">
            Experience the same level of quality, professionalism, and customer satisfaction 
            that our clients rave about. Let us help you with your elevator needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { openPopup();
    }} className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                      {/* <Mail className="h-5 w-5" /> */}
                      <span>Email Inquiry</span>
                    </button>
            <a
              href="tel:08045729031"
              className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear about your experience with Trezor Elevators. Your feedback helps us improve our services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      <Star className="h-8 w-8" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Share your experience with Liftas Components..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};