import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Metro Towers',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Exceptional service and quality installation. Trezor Elevators exceeded our expectations with their professionalism and attention to detail. Our residents are extremely satisfied.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'TechHub Solutions',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'The maintenance service is outstanding. Quick response times and thorough maintenance have kept our elevators running smoothly for over 3 years without any major issues.'
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Skyline Residency',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Modern design and reliable performance. The elevator modernization project was completed on time and within budget. Highly recommend their services.'
  },
  {
    id: 4,
    name: 'Sunita Gupta',
    company: 'Elite Shopping Mall',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Professional team with excellent customer service. They handled our complex installation requirements with expertise and delivered a flawless result.'
  }
];

export const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            People About Trezor Elevators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Trezor Elevators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
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

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};