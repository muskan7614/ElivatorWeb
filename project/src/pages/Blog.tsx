import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Smart Elevators: IoT Integration and Predictive Maintenance',
    excerpt: 'Discover how Internet of Things technology is revolutionizing elevator systems with predictive maintenance, energy efficiency, and enhanced user experiences.',
    author: 'Rajesh Kumar',
    date: '2024-01-15',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Elevator Safety Standards: What Building Owners Need to Know',
    excerpt: 'A comprehensive guide to elevator safety regulations, compliance requirements, and best practices for building owners and facility managers.',
    author: 'Priya Sharma',
    date: '2024-01-10',
    category: 'Safety',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Energy-Efficient Elevators: Reducing Your Building\'s Carbon Footprint',
    excerpt: 'Learn about the latest energy-saving technologies in modern elevators and how they contribute to sustainable building operations.',
    author: 'Amit Patel',
    date: '2024-01-05',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Modernizing Old Elevators: When and Why to Upgrade',
    excerpt: 'Understanding the signs that indicate it\'s time for elevator modernization and the benefits of upgrading your vertical transportation system.',
    author: 'Sunita Gupta',
    date: '2023-12-28',
    category: 'Modernization',
    image: 'https://images.pexels.com/photos/2850189/pexels-photo-2850189.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Elevator Maintenance Best Practices for Property Managers',
    excerpt: 'Essential maintenance tips and schedules that property managers should follow to ensure optimal elevator performance and longevity.',
    author: 'Vikram Singh',
    date: '2023-12-20',
    category: 'Maintenance',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: 'Accessibility in Elevators: Creating Inclusive Vertical Transportation',
    excerpt: 'Exploring the importance of accessible elevator design and the features that make vertical transportation inclusive for all users.',
    author: 'Meera Joshi',
    date: '2023-12-15',
    category: 'Accessibility',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '6 min read'
  }
];

const categories = ['All', 'Technology', 'Safety', 'Sustainability', 'Modernization', 'Maintenance', 'Accessibility'];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Trezor Elevators Blog
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, trends, and innovations 
            in the elevator industry from our team of experts.
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
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-green-100 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest trends, 
            tips, and innovations in the elevator industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};