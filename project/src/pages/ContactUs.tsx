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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx2Axu7KCKmYCidh-Z8Vo2CHSRT7lT75Lf64zAtbM8qrw-wo8b0MCinnLUHlrCxIpgd/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.result === "Success") {
      alert("Thank you for your message! We will get back to you within 24 hours.");
      reset();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was a problem submitting the form.");
  }
};


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
              <form action='https://formsubmit.co/your-email@gmail.com' method='POST' className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
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

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Please select a subject' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="new-installation">New Installation</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="repair">Repair Services</option>
                    <option value="modernization">Modernization</option>
                    <option value="quote">Request Quote</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
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