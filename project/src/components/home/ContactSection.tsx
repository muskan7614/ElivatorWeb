import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import contactSection from '../../Assets/Home-page-contactsection-507x384.jpg'

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { register,  reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your project? Contact our team of experts for a consultation 
            and discover how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              className="w-full h-96 bg-cover bg-center rounded-2xl shadow-xl"
              style={{ backgroundImage: `url(${contactSection})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
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
        </div>
      </div>
    </section>
  );
};