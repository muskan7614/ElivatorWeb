import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { AMC } from './pages/services/AMC';
import { Modernisation } from './pages/services/Modernisation';
import { Repair } from './pages/services/Repair';
import { Customisation } from './pages/services/Customisation';
import { Gallery } from './pages/Gallery';
import { ContactUs } from './pages/ContactUs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TrezorStory } from './pages/TrezorStory';
import { Testimonials } from './pages/Testimonials';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/services/amc" element={<AMC />} />
            <Route path="/services/modernisation" element={<Modernisation />} />
            <Route path="/services/repair" element={<Repair />} />
            <Route path="/services/customisation" element={<Customisation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/trezor-story" element={<TrezorStory />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </Router>
  );
}

export default App;