import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { usePopup } from '../context/PopupContext';
import products from './Products';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const { openPopup } = usePopup();

  // Track selected image index for each subproduct by subproduct id
  const [selectedImages, setSelectedImages] = useState<{ [subId: string]: number }>({});

  const handleThumbnailHover = (subId: string, idx: number) => {
    setSelectedImages((prev) => ({ ...prev, [subId]: idx }));
  };

  const handleThumbnailClick = (subId: string, idx: number) => {
    setSelectedImages((prev) => ({ ...prev, [subId]: idx }));
    openPopup();
  };

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

  if (product.subproducts && product.subproducts.length > 0) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-8">{product.description}</p>
          <div className="flex flex-col gap-12">
            {product.subproducts.map((sub) => {
              const selectedIdx = selectedImages[sub.id] ?? 0;
              return (
                <div key={sub.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col md:flex-row gap-8">
                  {/* Left: Main Image and Thumbnails */}
                  <div className="md:w-1/2 w-full">
                    <img src={sub.images[selectedIdx]} alt={sub.name} className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4" />
                    <div className="flex justify-center gap-2">
                      {sub.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={sub.name + idx}
                          className={`w-20 h-16 object-cover rounded-lg cursor-pointer border ${selectedIdx === idx ? 'border-orange-500' : 'border-transparent'}`}
                          onMouseEnter={() => handleThumbnailHover(sub.id, idx)}
                          onClick={() => handleThumbnailClick(sub.id, idx)}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Right: Details */}
                  <div className="md:w-1/2 w-full flex flex-col justify-start">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{sub.name}</h2>
                    <p className="text-lg font-bold text-blue-600 mb-2">{sub.price}</p>
                    <table className="mb-4 w-full text-sm">
                      <tbody>
                        {Object.entries(sub.specs).map(([key, value]) => (
                          <tr key={key}>
                            <td className="font-semibold text-gray-700 pr-4 py-1">{key}</td>
                            <td className="text-gray-900 py-1">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-gray-600 mb-4 leading-relaxed">{sub.description}</p>
                    <div className="flex gap-4 mb-4">
                      <a
                        href="tel:08045729031"
                        className="inline-flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        <span>Call Us</span>
                      </a>
                      <button
                        onClick={openPopup}
                        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-semibold"
                      >
                        Yes! I am Interested
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Default: show single product details (fallback)
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-8">{product.description}</p>
        {/* Add default product details here if needed */}
      </div>
    </div>
  );
};

export default ProductDetail;