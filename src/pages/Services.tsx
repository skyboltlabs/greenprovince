import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Hammer, PaintBucket, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Plumbing Services',
      description: 'Complete plumbing solutions for your home or business, from repairs to installations.',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/plumbing-about.jpg?auto=compress&cs=tinysrgb&w=600',
      services: [
        'Leak detection and repair',
        'Pipe installation and replacement',
        'Drain cleaning and unblocking',
        'Toilet and sink installation',
        'Water heater services',
        'Emergency plumbing repairs',
        'Bathroom renovations',
        'Kitchen plumbing'
      ],
      emergency: true
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Electrical Services',
      description: 'Safe, reliable electrical work by certified electricians for all your electrical needs.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: [
        'Electrical wiring and rewiring',
        'Light fixture installation',
        'Electrical panel upgrades',
        'Outlet and switch installation',
        'Safety inspections',
        'Ceiling fan installation',
        'Outdoor lighting',
        'Electrical troubleshooting'
      ],
      emergency: true
    },
    {
      icon: <PaintBucket className="w-12 h-12" />,
      title: 'Tiling Services',
      description: 'Professional tiling for bathrooms, kitchens, and floors with precision and style.',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: [
        'Bathroom wall and floor tiling',
        'Kitchen backsplash installation',
        'Outdoor patio tiling',
        'Tile repair and replacement',
        'Waterproofing services',
        'Grout cleaning and sealing',
        'Custom tile patterns',
        'Natural stone installation'
      ],
      emergency: false
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Carpentry Services',
      description: 'Custom carpentry and woodworking for functional and beautiful home improvements.',
      image: 'https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/about.jpg?auto=compress&cs=tinysrgb&w=600',
      services: [
        'Custom furniture building',
        'Kitchen cabinet installation',
        'Built-in storage solutions',
        'Deck and patio construction',
        'Door and window installation',
        'Trim and molding work',
        'Shelving systems',
        'Home repairs and maintenance'
      ],
      emergency: false
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-green-100">
            Comprehensive home services delivered by skilled professionals with a commitment to quality and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                  activeService === index 
                    ? 'bg-green-600 text-white shadow-xl' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`mb-4 ${activeService === index ? 'text-white' : 'text-green-600'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                {service.emergency && (
                  <div className={`text-sm font-medium ${
                    activeService === index ? 'text-green-200' : 'text-red-500'
                  }`}>
                    24/7 Emergency Available
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-green-600 mr-4">
                    {services[activeService].icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{services[activeService].title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <h3 className="text-xl font-bold text-gray-800 mb-6">What We Offer:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services[activeService].services.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:0784370429"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Quote
                  </a>
                  <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover min-h-96"
                />
                {services[activeService].emergency && (
                  <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                    24/7 Emergency
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quality results and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-gray-600">
                Call or message us to describe your project or service needs. We'll ask the right questions to understand your requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Free Assessment</h3>
              <p className="text-gray-600">
                We'll visit your property to assess the work needed and provide you with a detailed, transparent quote.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Work</h3>
              <p className="text-gray-600">
                Our skilled professionals complete the work efficiently using quality materials and proven techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow-Up</h3>
              <p className="text-gray-600">
                We ensure you're completely satisfied with our work and provide ongoing support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Emergency Services Available</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100">
            Plumbing and electrical emergencies can't wait. We provide 24/7 emergency services 
            to protect your home and restore your peace of mind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-700 p-8 rounded-xl">
              <Wrench className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Plumbing Emergencies</h3>
              <ul className="text-left space-y-2">
                <li>• Burst pipes and major leaks</li>
                <li>• Blocked drains and toilets</li>
                <li>• Water heater failures</li>
                <li>• Sewer backups</li>
              </ul>
            </div>
            
            <div className="bg-red-700 p-8 rounded-xl">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Electrical Emergencies</h3>
              <ul className="text-left space-y-2">
                <li>• Power outages and failures</li>
                <li>• Electrical shorts and sparks</li>
                <li>• Tripped breakers and fuses</li>
                <li>• Electrical safety hazards</li>
              </ul>
            </div>
          </div>

          <a
            href="tel:0784370429"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200 inline-flex items-center"
          >
            <Phone className="w-6 h-6 mr-3" />
            Emergency Hotline: 078 437 0429
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Contact us today for a free consultation and quote. We're here to help with all your home service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0784370429"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
