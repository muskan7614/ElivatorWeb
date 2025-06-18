import React from 'react';
import { usePopup } from '../context/PopupContext';
import logo from '../Assets/logo.webp'

export const InquiryPopup: React.FC = () => {
  const { isOpen, closePopup } = usePopup();

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
        <form action='https://formsubmit.co/your-email@gmail.com' method='POST' className="space-y-3 text-sm">
  {/* Name + Phone in 1 Row */}
  <div className="flex flex-col sm:flex-row gap-3">
    <div className="w-full">

      <label className="block font-medium text-gray-700">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="w-full border rounded px-3 py-2 text-sm"
        placeholder="Your name"
        required
      />
    </div>

    <div className="w-full">
      <label className="block font-medium text-gray-700">
        Phone <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        className="w-full border rounded px-3 py-2 text-sm"
        placeholder="Your phone"
        required
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block font-medium text-gray-700">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      className="w-full border rounded px-3 py-2 text-sm"
      placeholder="Your email"
      required
    />
  </div>

  {/* Service Question */}
  <div>
    <label className="block font-medium text-gray-700">What service do you need? </label>
    <input
      type="text"
      className="w-full border rounded px-3 py-2 text-sm"
      placeholder="Installation / AMC / Repair"
    />
  </div>

  {/* Preferred Time */}
  <div>
    <label className="block font-medium text-gray-700">
      Preferred visit/call time?
    </label>
    <input
      type="text"
      className="w-full border rounded px-3 py-2 text-sm"
      placeholder="e.g. Tomorrow 11 AM"
    />
  </div>

  {/* Comments */}
  <div>
    <label className="block font-medium text-gray-700">Comments</label>
    <textarea
      rows={2}
      className="w-full border rounded px-3 py-2 text-sm resize-none"
      placeholder="Any message"
    ></textarea>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded font-semibold text-sm transition duration-200"
  >
    Submit Inquiry
  </button>
</form>

      </div>
    </div>
  );
};
export default InquiryPopup;