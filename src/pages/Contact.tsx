import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['078 437 0429'],
      action: 'tel:0784370429'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['greenprovinceplumbing@gmail.com'],
      action: 'mailto:greenprovinceplumbing@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['76 Villa D\'Algarve', 'Muizenberg'],
      action: 'https://maps.google.com/?q=76+Villa+D\'Algarve+Muizenberg'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 7:00 AM - 6:00 PM', 'Sat: 8:00 AM - 4:00 PM', 'Emergency: 24/7'],
      action: null
    }
  ];

  const services = [
    'Plumbing Services',
    'Electrical Work',
    'Tiling Services',
    'Carpentry',
    'Emergency Repair',
    'General Maintenance'
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Green Province</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-green-100">
            Ready to get started? Contact us for a free consultation and quote. We're here to help with all your home service needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-200">
                  <div className="text-green-600 group-hover:text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-600">
                      {info.action && idx === 0 ? (
                        <a
                          href={info.action}
                          className="text-green-600 hover:text-green-700 font-medium"
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your message and will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="081 234 5678"
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                      placeholder="Please describe your project or service needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-red-600 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-6">
                  Plumbing or electrical emergency? Don't wait - call us now for immediate assistance.
                </p>
                <a
                  href="tel:0784370429"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 078 437 0429
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve all areas of Cape Town and surrounding regions including:
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  <div>• City Bowl & CBD</div>
                  <div>• Southern Suburbs</div>
                  <div>• Atlantic Seaboard</div>
                  <div>• Northern Suburbs</div>
                  <div>• False Bay Area</div>
                  <div>• West Coast Areas</div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Contact us to confirm service availability in your specific area.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Licensed & Insured Professionals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Free Estimates & Consultations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quality Guarantee on All Work</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">24/7 Emergency Service Available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Competitive & Transparent Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Here are some answers to common inquiries about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you offer free estimates?</h3>
                <p className="text-gray-600">
                  Yes, we provide free estimates for all our services. Contact us to schedule a consultation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Are you licensed and insured?</h3>
                <p className="text-gray-600">
                  Absolutely. We are fully licensed and carry comprehensive insurance for your protection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide emergency services?</h3>
                <p className="text-gray-600">
                  Yes, we offer 24/7 emergency plumbing and electrical services for urgent situations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We serve all areas of Cape Town and the greater metropolitan area. Contact us to confirm availability in your specific location.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you guarantee your work?</h3>
                <p className="text-gray-600">
                  Yes, we stand behind all our work with comprehensive warranties on parts and labor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">How quickly can you respond?</h3>
                <p className="text-gray-600">
                  For regular services, we typically respond within 24 hours. Emergency calls are answered immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;