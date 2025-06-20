import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight ,Mail} from 'lucide-react';
import Gallery1 from '../Assets/Gallery-1.jpg';
import Gallery2 from '../Assets/Gallery-2.jpg';
import Gallery3 from '../Assets/Gallery-3.jpg';
import Gallery4 from '../Assets/Gallery-4.jpg';
import Gallery5 from '../Assets/Gallery-5.jpg';
import Gallery6 from '../Assets/Gallery-6.jpg';
import Gallery7 from '../Assets/Gallery-7.jpg';
import Gallery8 from '../Assets/Gallery-8.jpg';
import Gallery9 from '../Assets/Gallery-9.jpg';
import Gallery10 from '../Assets/Gallery-10.jpg';
import Gallery11 from '../Assets/Gallery-11.jpg';
import Gallery12 from '../Assets/Gallery-12.jpg';
import { usePopup } from '../context/PopupContext';



const galleryImages = [
  {
    id: 1,
    src: Gallery1,
    title: 'Modern Office Elevator',
    category: 'Commercial'
  },
  {
    id: 2,
    src: Gallery2,
    title: 'Luxury Hotel Elevator',
    category: 'Hospitality'
  },
  {
    id: 3,
    src: Gallery3,
    title: 'Residential Complex',
    category: 'Residential'
  },
  {
    id: 4,
    src: Gallery4,
    title: 'Hospital Elevator',
    category: 'Healthcare'
  },
  {
    id: 5,
    src: Gallery5,
    title: 'Shopping Mall Elevator',
    category: 'Retail'
  },
  {
    id: 6,
    src: Gallery6,
    title: 'Corporate Headquarters',
    category: 'Commercial'
  },
  {
    id: 7,
    src: Gallery7,
    title: 'Premium Residential Tower',
    category: 'Residential'
  },
  {
    id: 8,
    src: Gallery8,
    title: 'Five Star Hotel',
    category: 'Hospitality'
  },
  {
    id: 9,
    src: Gallery9,
    title: 'Medical Center',
    category: 'Healthcare'
  },
  {
    id: 10,
    src: Gallery10,
    title: 'Department Store',
    category: 'Retail'
  },
  {
    id: 11,
    src: Gallery11,
    title: 'Tech Campus',
    category: 'Commercial'
  },
  {
    id: 12,
    src: Gallery12,
    title: 'Luxury Apartments',
    category: 'Residential'
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Hospitality', 'Healthcare', 'Retail'];

export const Gallery: React.FC = () => {
  const { openPopup } = usePopup();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br  bg-[#1f1f1f] text-yellow-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Project Gallery
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful elevator installations across 
            various sectors and discover the quality of our craftsmanship.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-yellow-100 hover:text-black-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <span className="text-sm text-gray-300">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{selectedImageData.title}</h3>
              <span className="text-gray-300">{selectedImageData.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white-600 text-black px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-black-100 mb-8 leading-relaxed">
            Let us help you create an elevator solution that matches your vision and requirements. 
            Contact our team today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:08045729031"
              className="bg-white text-black-600 hover:bg-yellow-700 border border-yellow-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-black"
            >
              Call for Consultation
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
      </section>
    </div>
  );
};