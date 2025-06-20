import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Home1 from '../../Assets/Home-heroSlider-image-1.jpg'
import Home2 from '../../Assets/Home-heroSlider-image-2.jpg'
import Home3 from '../../Assets/Home-heroSlider-image-3.jpg'
import Home4 from '../../Assets/Home-heroSlider-image-4.jpg'
import Home5 from '../../Assets/Home-heroSlider-image-5.jpg'

const slides = [
  {
    id: 1,
    image: Home1,
    title: 'Modern Elevator Solutions',
    subtitle: 'Elevating Your Expectations',
    description: 'Experience premium elevator technology with our state-of-the-art installations and maintenance services.',
    cta: 'View Our Services'
  },
  {
    id: 2,
    image: Home2,
    title: 'Professional Installation',
    subtitle: 'Quality & Reliability',
    description: 'Our expert team ensures seamless elevator installation with the highest standards of safety and performance.',
    cta: 'View Our Services'
  },
  {
    id: 3,
    image: Home3,
    title: 'Advanced Technology',
    subtitle: 'Innovation at Every Floor',
    description: 'Discover our cutting-edge elevator systems designed for efficiency, comfort, and sustainability.',
    cta: 'View Our Services'
  },
  {
    id: 4,
    image: Home4,
    title: '24/7 Maintenance',
    subtitle: 'Always At Your Service',
    description: 'Round-the-clock support and maintenance services to keep your elevators running smoothly.',
    cta: 'View Our Services'
  },
  {
    id: 5,
    image: Home5,
    title: 'Custom Solutions',
    subtitle: 'Tailored to Your Needs',
    description: 'Bespoke elevator solutions designed to meet your specific requirements and architectural vision.',
    cta: 'View Our Services'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = slide.image;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h2 className="text-lg md:text-xl font-medium text-blue-300 mb-4 animate-fade-in-up">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                  {slide.description}
                </p>
                <Link
                  to="/services/amc"
                  className="inline-block bg-transparent-600 border border-yellow-600 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};