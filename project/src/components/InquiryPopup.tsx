import React from 'react';
import { usePopup } from '../context/PopupContext';
import logo from '../Assets/logo.webp'
import { useForm } from 'react-hook-form';
// import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}


export const InquiryPopup: React.FC = () => {
  const { isOpen, closePopup } = usePopup();
  const { register,  reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };


  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center px-4"
      onClick={closePopup}
    >
      <div
        className="bg-white p-4 sm:p-6 rounded-xl shadow-xl w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
          onClick={closePopup}
        >
          &times;
        </button>

        {/* Company Logo & Name */}
        <div className="flex flex-col items-center mb-4">
          <img
            src={logo} // Replace with your actual logo path
            alt="Company Logo"
            className="w-12 h-12 mb-1"
          />
          <h2 className="text-lg sm:text-xl font-bold text-yellow-600 text-center">
            Liftas Components Private Limited
          </h2>
        </div>

        {/* Form */}
        <form action='https://formsubmit.co/your-email@gmail.com' method='POST' className="space-y-4 text-sm">
          {/* Basic Information */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"> */}
            <div>
              <label className="block font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="Full Name" className="w-full border rounded px-3 py-2 text-sm" placeholder="Your name" required />
            </div>
            
            <div>
              <label className="block font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></label>
              <input type="tel" name="Contact Number" className="w-full border rounded px-3 py-2 text-sm" placeholder="Your phone" required />
            </div>
            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                id="email"
                                {...register('email', { 
                                  required: 'Email is required',
                                  pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Please enter a valid email address'
                                  }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your email address"
                              />
                              {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                              )}
                            </div>
            
          {/* </div> */}


          {/* Submit */}
          <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded font-semibold text-sm transition duration-200">Submit Inquiry</button>
        </form>

      </div>
    </div>
  );
};
export default InquiryPopup;