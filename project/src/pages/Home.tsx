import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { AboutSection } from '../components/home/AboutSection';
import { ClientSlider } from '../components/home/ClientSlider';
import { ContactSection } from '../components/home/ContactSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { StatsSection } from '../components/home/StatsSection';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ClientSlider />
      <ContactSection />
      <TestimonialsSection />
      <StatsSection />
    </div>
  );
};