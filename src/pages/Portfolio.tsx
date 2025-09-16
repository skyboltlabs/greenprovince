import React, { useState } from 'react';
import { CheckCircle, Calendar, Clock, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Plumbing', 'Electrical', 'Tiling', 'Carpentry'];

  const projects = [
    {
      id: 1,
      title: 'Complete Bathroom Renovation',
      category: 'Plumbing',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/complete-bathroom-renovation.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Full bathroom renovation including plumbing, tiling, and fixtures installation.',
      duration: '3 days',
      year: '2024',
      features: ['New plumbing installation', 'Premium tile work', 'Modern fixtures', 'Waterproofing']
    },
    {
      id: 2,
      title: 'Kitchen Electrical Upgrade',
      category: 'Electrical',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/kitchen-upgrade.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete electrical system upgrade for modern kitchen with new appliances.',
      duration: '2 days',
      year: '2024',
      features: ['Panel upgrade', 'New outlets', 'Under-cabinet lighting', 'GFCI protection']
    },
    {
      id: 3,
      title: 'Tiling',
      category: 'Tiling',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/tiling.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful tile work with non-slip porcelain tiles and proper drainage.',
      duration: '3 days',
      year: '2024',
      features: ['Non-slip tiles', 'Proper drainage', 'Weather-resistant grout', 'Custom patterns']
    },
    {
      id: 4,
      title: 'Custom Built-in Storage',
      category: 'Carpentry',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/custom-storage.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Custom-built storage solution maximizing space in a compact bedroom.',
      duration: '2 days',
      year: '2023',
      features: ['Custom design', 'Space optimization', 'Quality materials', 'Perfect fit']
    },
    {
      id: 5,
      title: 'Emergency Pipe Repair',
      category: 'Plumbing',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/em-pipe-repair.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Emergency repair of burst pipe with minimal disruption to daily life.',
      duration: 'Same day',
      year: '2024',
      features: ['Emergency response', 'Quick repair', 'Minimal disruption', 'Warranty included']
    },
    {
      id: 6,
      title: 'Home Office Electrical Setup',
      category: 'Electrical',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete electrical setup for a modern home office including network wiring.',
      duration: '2 days',
      year: '2024',
      features: ['Multiple outlets', 'Network wiring', 'Dedicated circuits', 'Energy efficient lighting']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-green-100">
            Take a look at some of our recent projects and see the quality craftsmanship we deliver to every customer.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Recent Projects</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Project Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project follows our proven process to ensure quality results and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">We discuss your needs and vision for the project.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Detailed planning and material selection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Professional execution with quality craftsmanship.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">Thorough inspection to ensure perfection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Completion</h3>
              <p className="text-gray-600 text-sm">Project handover with ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl italic mb-8 leading-relaxed">
              "Green Province transformed our outdated bathroom into a modern oasis. The attention to detail and 
              quality of work exceeded our expectations. From the initial consultation to the final cleanup, 
              they were professional, punctual, and pleasant to work with."
            </blockquote>
            <div className="text-xl">
              <div className="font-bold">Jennifer & Mark Thompson</div>
              <div className="text-green-200">Muizenberg Residents</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a free, detailed quote from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0784370429"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Call for Consultation
            </a>
            <button className="border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center">
              View More Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;