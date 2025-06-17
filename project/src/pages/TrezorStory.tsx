import React from 'react';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

export const TrezorStory: React.FC = () => {
  const milestones = [
    {
      year: '2007',
      title: 'Company Founded',
      description: 'Trezor Elevators was established with a vision to revolutionize vertical transportation in India.',
      icon: Calendar
    },
    {
      year: '2010',
      title: 'First Major Project',
      description: 'Completed our first major commercial installation at a prestigious office complex in Delhi.',
      icon: Award
    },
    {
      year: '2015',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ professionals and expanded our service network across North India.',
      icon: Users
    },
    {
      year: '2018',
      title: '500+ Projects Milestone',
      description: 'Successfully completed over 500 elevator installations across residential and commercial sectors.',
      icon: TrendingUp
    },
    {
      year: '2020',
      title: 'Technology Innovation',
      description: 'Introduced smart elevator solutions with IoT integration and predictive maintenance.',
      icon: Award
    },
    {
      year: '2022',
      title: 'Sustainability Focus',
      description: 'Launched our green elevator initiative focusing on energy-efficient and eco-friendly solutions.',
      icon: TrendingUp
    },
    {
      year: '2024',
      title: '999+ Projects & Counting',
      description: 'Reached the milestone of 999+ completed projects with 50+ team members and expanding.',
      icon: Award
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Continuously embracing new technologies and methodologies to deliver cutting-edge elevator solutions.',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Quality',
      description: 'Maintaining the highest standards in every aspect of our work, from design to installation to maintenance.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Safety',
      description: 'Prioritizing safety above all else, ensuring every elevator meets and exceeds international safety standards.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service and personalized attention to every client.',
      image: 'https://images.pexels.com/photos/2850189/pexels-photo-2850189.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            The Trezor Story
          </h1>
          <p className="text-xl lg:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            A journey of innovation, dedication, and excellence in vertical transportation 
            spanning over 17 years of industry leadership.
          </p>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How It All Began
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In 2007, a group of passionate engineers with a shared vision came together to create 
                something extraordinary in the elevator industry. Frustrated by the lack of reliable, 
                innovative, and customer-focused elevator solutions in the market, they decided to 
                build a company that would change the landscape of vertical transportation in India.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Starting with a small team and big dreams, Trezor Elevators was born out of the belief 
                that every building deserves safe, efficient, and beautifully designed elevator systems. 
                Our founders brought together decades of combined experience in engineering, design, 
                and customer service to create a company that would prioritize quality above all else.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings in a small office in Delhi, we have grown into a leading 
                elevator company, but our core values and commitment to excellence remain unchanged.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trezor Elevators Beginning"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through the Years
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped Trezor Elevators into the company we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-center`}>
                      <div className="text-3xl font-bold text-indigo-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <milestone.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Values That Drive Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles have guided our decisions and shaped our culture throughout our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20 bg-indigo-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Looking Toward the Future
          </h2>
          <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
            As we continue to grow and evolve, our commitment to innovation, quality, and customer 
            satisfaction remains stronger than ever. We're excited about the future of vertical 
            transportation and our role in shaping it.
          </p>
          <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
            With emerging technologies like AI, IoT, and sustainable energy solutions, we're 
            constantly exploring new ways to make elevators smarter, more efficient, and more 
            environmentally friendly. Our goal is to continue being at the forefront of industry 
            innovation while maintaining the personal touch and quality service that our customers 
            have come to expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Join Our Journey
            </a>
            <a
              href="/products"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};