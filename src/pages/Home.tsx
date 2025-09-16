import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Star, Wrench, Zap, Hammer, PaintBucket } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Plumbing Services',
      description: 'Professional plumbing repairs, installations, and maintenance for residential and commercial properties.',
      features: ['Leak repairs', 'Pipe installations', 'Drain cleaning', 'Emergency service']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical Work',
      description: 'Safe and reliable electrical services from certified electricians for all your electrical needs.',
      features: ['Wiring & rewiring', 'Light installations', 'Panel upgrades', 'Safety inspections']
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Tiling Services',
      description: 'Expert tiling for bathrooms, kitchens, and floors with precision and attention to detail.',
      features: ['Bathroom tiling', 'Kitchen backsplashes', 'Floor tiling', 'Waterproofing']
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Carpentry',
      description: 'Custom carpentry and woodworking services for both functional and decorative projects.',
      features: ['Custom furniture', 'Built-in storage', 'Deck construction', 'Kitchen cabinets']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      comment: 'Excellent service! Green Province fixed our plumbing emergency quickly and professionally. Highly recommended!',
      service: 'Plumbing'
    },
    {
      name: 'David Chen',
      rating: 5,
      comment: 'Outstanding electrical work. The team was punctual, clean, and very knowledgeable. Great value for money.',
      service: 'Electrical'
    },
    {
      name: 'Lisa Johnson',
      rating: 5,
      comment: 'Beautiful tiling work in our bathroom renovation. The attention to detail was impressive.',
      service: 'Tiling'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5691628/pexels-photo-5691628.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Professional home services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-800/80"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Home Services in 
              <span className="text-green-200 block">Muizenberg</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
              Expert plumbing, electrical, tiling, and carpentry services. 
              Quality workmanship with reliable, affordable solutions for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:0784370429"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-green-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-green-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-green-200">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-green-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving Cape Town and surrounding areas with reliable, professional home services throughout the Mother City.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-green-50 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">City Bowl & CBD</h3>
              <p className="text-gray-600">Central Cape Town, Gardens, Tamboerskloof, Bo-Kaap, and surrounding areas</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-green-50 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Southern Suburbs</h3>
              <p className="text-gray-600">Constantia, Wynberg, Claremont, Rondebosch, Newlands, and surrounding areas</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-green-50 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Atlantic Seaboard</h3>
              <p className="text-gray-600">Sea Point, Clifton, Camps Bay, Green Point, and surrounding coastal areas</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-green-50 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Northern Suburbs</h3>
              <p className="text-gray-600">Bellville, Parow, Goodwood, Brackenfell, and surrounding northern areas</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-green-50 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">False Bay</h3>
              <p className="text-gray-600">Muizenberg, Fish Hoek, Kalk Bay, Simon's Town, and False Bay coastline</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-green-50 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">West Coast</h3>
              <p className="text-gray-600">Milnerton, Table View, Blouberg, and surrounding west coast areas</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Serving all areas of Cape Town and the greater metropolitan area. Contact us to confirm service availability in your specific location.
            </p>
            <a
              href="tel:0784370429"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Check Service Availability
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete renovations, we provide comprehensive home services with expert craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-16 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Emergency plumbing service"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-red-600/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">24/7 Emergency Services</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100">
              Plumbing or electrical emergency? Don't panic! Our emergency response team is available 
              around the clock to handle urgent situations and protect your property.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="bg-red-700/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Plumbing Emergencies</h3>
                <ul className="text-left space-y-2 text-red-100">
                  <li>• Burst pipes and major leaks</li>
                  <li>• Blocked drains and sewers</li>
                  <li>• Water heater failures</li>
                  <li>• Toilet and sink overflows</li>
                </ul>
              </div>
              <div className="bg-red-700/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Electrical Emergencies</h3>
                <ul className="text-left space-y-2 text-red-100">
                  <li>• Power outages and failures</li>
                  <li>• Electrical shorts and sparks</li>
                  <li>• Tripped breakers and fuses</li>
                  <li>• Electrical safety hazards</li>
                </ul>
              </div>
            </div>
            <a
              href="tel:0784370429"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-50 transition-colors duration-200 inline-flex items-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Emergency Hotline: 078 437 0429
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Green Province?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience serving the Muizenberg community, we've built a reputation for quality work, 
                fair pricing, and exceptional customer service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work with a comprehensive warranty on all services and installations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fair Pricing</h3>
                    <p className="text-gray-600">Transparent, competitive pricing with detailed estimates and no hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional service technician"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-green-200">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantee */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service Guarantee</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our work with comprehensive guarantees and warranties that give you complete peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Workmanship Warranty</h3>
              <p className="text-gray-600">
                All our work comes with a comprehensive warranty covering both parts and labor for your protection.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Satisfaction Promise</h3>
              <p className="text-gray-600">
                If you're not completely satisfied with our service, we'll make it right at no additional cost to you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow-Up Support</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance advice to ensure your systems continue working perfectly.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What Our Warranty Covers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">All labor and installation work</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Parts and materials used</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">System performance and functionality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Compliance with safety standards</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-xl text-gray-700 mb-4">Satisfaction Guaranteed</div>
                <p className="text-gray-600">
                  Join hundreds of satisfied customers who trust Green Province for all their home service needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-green-600">{testimonial.service} Service</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Community */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Proudly Serving Our Community</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a locally-owned business based in Muizenberg, we understand the unique needs of homes 
                throughout Cape Town. From the coastal conditions that affect plumbing and electrical 
                systems to the diverse architectural styles found across the Mother City, we bring local expertise to every project.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just service providers - we're your neighbors, committed to maintaining and 
                improving the homes and businesses that make Cape Town special.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Serving<br />Cape Town</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600">Cape Town Homes<br />Serviced</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/cape-town-img.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Beautiful Cape Town homes"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Cape Town</div>
                <div className="text-green-200">Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Professional service team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-green-600/80"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
              Contact us today for a free consultation and quote. We're here to help with all your home service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:0784370429"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                078 437 0429
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;