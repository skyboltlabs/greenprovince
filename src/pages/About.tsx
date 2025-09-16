import React from 'react';
import { CheckCircle, Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'We show up on time and deliver what we promise, every single time.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'We use only the best materials and techniques to ensure lasting results.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Honest pricing, transparent communication, and ethical business practices.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'We value your time and complete projects efficiently without compromising quality.'
    }
  ];
  
  const team = [
    {
      name: 'Michael Green',
      role: 'Founder & Master Plumber',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Thompson',
      role: 'Licensed Electrician',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Wilson',
      role: 'Master Carpenter',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Green Province</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-green-100">
            Your trusted partner for professional home services in Muizenberg and surrounding areas since 2019.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Green Province was founded with a simple mission: to provide exceptional home services 
                  that homeowners can trust. What started as a small plumbing business has grown into 
                  a comprehensive home services company serving the beautiful Muizenberg community.
                </p>
                <p>
                  Our founder saw the need for reliable, honest, and skilled tradespeople 
                  in the area. With over 15 years of experience in the industry, he assembled a team of 
                  certified professionals who share his commitment to excellence.
                </p>
                <p>
                  Today, we're proud to be the go-to home services company for hundreds of satisfied 
                  customers throughout Cape Town's southern suburbs. Our reputation is built on quality 
                  workmanship, fair pricing, and exceptional customer service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/skyboltlabs/greenprovince/refs/heads/main/about.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Green Province team at work"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-green-600">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-200">
                  <div className="text-green-600 group-hover:text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Green Province?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We've earned our reputation through consistent quality and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed & Insured</h3>
              <p className="text-green-100">
                All our technicians are fully licensed and we carry comprehensive insurance for your protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Guaranteed</h3>
              <p className="text-green-100">
                We stand behind our work with comprehensive warranties and a commitment to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Emergency Service</h3>
              <p className="text-green-100">
                Home emergencies don't wait for business hours, and neither do we.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Commitment to the Community</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                As a locally-owned business, we're invested in the success and well-being of the Muizenberg 
                community. We support local suppliers, hire from the area, and give back through various 
                community initiatives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When you choose Green Province, you're not just getting quality home services – you're 
                supporting a business that cares about our community's future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;