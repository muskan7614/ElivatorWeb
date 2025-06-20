import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const { register,  formState: { errors } } = useForm<ContactFormData>();


  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      details: 'Liftas Components Private Limited Dedicated Seat 07 Situated at B 38, Old DLF Sector 14, Gurugram, Haryana, 122006,  India'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '08045729031'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@liftascomponents.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Emergency Services Only'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team of experts. We're here to help you with 
            all your elevator needs and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <info.icon className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {info.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              {/* Form */}
        <form action='https://formsubmit.co/your-email@gmail.com' method='POST' className="space-y-4 text-sm">
          {/* Basic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="Full Name" className="w-full border rounded px-3 py-2 text-sm" placeholder="Your name" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Company / Organization Name</label>
              <input type="text" name="Company" className="w-full border rounded px-3 py-2 text-sm" placeholder="Company/Organization (if any)" />
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
            <div className="sm:col-span-2">
              <label className="block font-medium text-gray-700">Site Address / Project Location</label>
              <input type="text" name="Site Address" className="w-full border rounded px-3 py-2 text-sm" placeholder="Project location" />
            </div>
          </div>

          {/* Lift Requirement Details */}
          <div className="pt-2 border-t">
            <label className="block font-semibold text-gray-800 mb-1">Lift Requirement Details</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700">Lift Type Required</label>
                <select name="Lift Type" className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option>Passenger Lift</option>
                  <option>Goods Lift</option>
                  <option>Hospital Lift</option>
                  <option>Home Lift</option>
                  <option>Car Lift</option>
                  <option>Capsule Lift</option>
                  <option>Dumbwaiter</option>
                  <option>Others (please specify below)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Lift Capacity Required</label>
                <input type="text" name="Lift Capacity" className="w-full border rounded px-3 py-2 text-sm" placeholder="e.g. 6 persons / 408 kg" />
              </div>
              <div>
                <label className="block text-gray-700">Number of Floors to be Covered</label>
                <input type="text" name="Number of Floors" className="w-full border rounded px-3 py-2 text-sm" placeholder="e.g. Ground + 4" />
              </div>
              <div>
                <label className="block text-gray-700">Travel Height (approximate)</label>
                <input type="text" name="Travel Height" className="w-full border rounded px-3 py-2 text-sm" placeholder="in meters or feet" />
              </div>
              <div>
                <label className="block text-gray-700">Lift Speed Requirement</label>
                <input type="text" name="Lift Speed" className="w-full border rounded px-3 py-2 text-sm" placeholder="e.g. 1 m/s, 1.5 m/s" />
              </div>
              <div>
                <label className="block text-gray-700">Number of Lifts Required</label>
                <input type="number" name="Number of Lifts" className="w-full border rounded px-3 py-2 text-sm" min="1" />
              </div>
              <div>
                <label className="block text-gray-700">Type of Building</label>
                <select name="Type of Building" className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Hospital</option>
                  <option>Hotel</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Project Status</label>
                <select name="Project Status" className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option>New Installation</option>
                  <option>Modernization / Replacement</option>
                  <option>AMC / Service Requirement</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Is Lift Shaft / Structure Ready?</label>
                <select name="Lift Shaft Ready" className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>In Progress</option>
                </select>
              </div>
            </div>
          </div>

          {/* Design & Features Preference */}
          <div className="pt-2 border-t">
            <label className="block font-semibold text-gray-800 mb-1">Design & Features Preference</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700">Preferred Lift Door Type</label>
                <select name="Lift Door Type" className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                  <option>Telescopic / Center Opening</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Cabin Design Preference</label>
                <select name="Cabin Design" className="w-full border rounded px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option>SS Finish</option>
                  <option>Glass Cabin</option>
                  <option>Powder Coated</option>
                  <option>Customized</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-700">Any Special Requirements or Features?</label>
                <input type="text" name="Special Requirements" className="w-full border rounded px-3 py-2 text-sm" placeholder="e.g. Voice announcement, Braille buttons, Backup Power, etc." />
              </div>
            </div>
          </div>

          {/* Timeline & Budget */}
          <div className="pt-2 border-t">
            <label className="block font-semibold text-gray-800 mb-1">Timeline & Budget</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700">Expected Installation Timeline</label>
                <input type="text" name="Installation Timeline" className="w-full border rounded px-3 py-2 text-sm" placeholder="e.g. Within 1 month, 2-3 months, etc." />
              </div>
              <div>
                <label className="block text-gray-700">Approximate Budget (if any)</label>
                <input type="text" name="Budget" className="w-full border rounded px-3 py-2 text-sm" placeholder="Enter budget" />
              </div>
            </div>
          </div>

          {/* Other Information */}
          <div className="pt-2 border-t">
            <label className="block font-semibold text-gray-800 mb-1">Other Information</label>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-gray-700">Upload Building Plan / Drawing (Optional)</label>
                <input type="file" name="Building Plan" className="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700">Any Additional Comments or Requirements</label>
                <textarea name="Additional Comments" rows={2} className="w-full border rounded px-3 py-2 text-sm resize-none" placeholder="Any message"></textarea>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded font-semibold text-sm transition duration-200">Send Message</button>
        </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.307530292468!2d77.04271757450333!3d28.470283791431896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198c9f0ebf03%3A0x58bba09948b2032a!2sLiftas%20Components%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1750220010703!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our office is conveniently located in Chattarpur Extension, New Delhi. 
                  We welcome visitors by appointment and are easily accessible by public transport.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Services
                </h3>
                <p className="text-gray-600 mb-4">
                  For emergency elevator repairs and breakdowns, our 24/7 hotline is always available.
                </p>
                <a
                  href="tel:08045729031"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};