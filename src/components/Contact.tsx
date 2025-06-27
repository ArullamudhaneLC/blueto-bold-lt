import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircleMore,
  Send,
  MessageSquare,
  Calendar,
  Zap,
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: 'ai-development',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      projectType: 'ai-development',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@myblueto.com',
      subtitle: 'We respond within 2 hours',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9952400694',
      subtitle: 'Anyday 9 AM - 10 PM',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageCircleMore,
      title: 'Message Us / WhatsApp Us',
      details: '+91 9952400694',
      subtitle: 'Schedule an appointment',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const projectTypes = [
    { value: 'ai-development', label: 'AI Development' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'consulting', label: 'AI Consulting' },
    { value: 'integration', label: 'System Integration' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-4 sm:px-4 py-2 rounded-full border border-purple-400/30 mb-4 sm:mb-4 lg:mb-6">
            <MessageSquare className="h-5 sm:h-5 w-5 sm:w-5 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm sm:text-sm lg:text-base">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-4 lg:mb-6">
            Let's Build
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
            Ready to transform your business with AI? Let's discuss your project
            and create innovative solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-6 lg:space-y-8 px-2 sm:px-4 lg:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white mb-4 sm:mb-4 lg:mb-6">
                Start Your AI Journey Today
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-6 lg:mb-8 text-base sm:text-base lg:text-base">
                Whether you're looking to develop cutting-edge AI solutions,
                integrate intelligent features into existing systems, or explore
                the possibilities of artificial intelligence for your business,
                our team of experts is here to guide you every step of the way.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4 sm:space-y-4 lg:space-y-6">
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 sm:space-x-3 lg:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-4 lg:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div
                        className={`bg-gradient-to-r ${info.color} p-3 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <InfoIcon className="h-5 sm:h-5 lg:h-6 w-5 sm:w-5 lg:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-base sm:text-sm lg:text-base">
                          {info.title}
                        </h4>
                        <p className="text-white font-medium mb-1 text-base sm:text-sm lg:text-base">
                          {info.details}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3 lg:gap-4">
              <a
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-sm lg:text-base"
                href="tel:+919952400694"
              >
                <Calendar className="h-4 sm:h-4 lg:h-5 w-4 sm:w-4 lg:w-5" />
                <span>Call us & Book Meeting Today</span>
              </a>
            </div>

            {/* Why choose us */}
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-4 lg:p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-3 sm:mb-3 lg:mb-4 text-base sm:text-sm lg:text-base">
                Why Partner With Us?
              </h4>
              <ul className="space-y-2 sm:space-y-2 lg:space-y-3 text-gray-300">
                <li className="flex items-center space-x-3 sm:space-x-3">
                  <div className="w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm sm:text-sm">
                    Proven expertise in AI and machine learning
                  </span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-3">
                  <div className="w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm sm:text-sm">
                    Custom solutions tailored to your industry
                  </span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-3">
                  <div className="w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm sm:text-sm">
                    End-to-end support from concept to deployment
                  </span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-3">
                  <div className="w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm sm:text-sm">
                    Competitive pricing and flexible engagement models
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-6 lg:p-8 border border-white/10 mx-2 sm:mx-4 lg:mx-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-4 lg:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-sm font-medium text-gray-300 mb-2 sm:mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 lg:py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-400 text-base sm:text-sm lg:text-base"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-sm font-medium text-gray-300 mb-2 sm:mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 lg:py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-400 text-base sm:text-sm lg:text-base"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm sm:text-sm font-medium text-gray-300 mb-2 sm:mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 lg:py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-400 text-base sm:text-sm lg:text-base"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm sm:text-sm font-medium text-gray-300 mb-2 sm:mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-4 py-3 sm:py-2.5 lg:py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white text-base sm:text-sm lg:text-base"
                  >
                    {projectTypes.map((type) => (
                      <option
                        key={type.value}
                        value={type.value}
                        className="bg-gray-800"
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-sm font-medium text-gray-300 mb-2 sm:mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-4 py-3 sm:py-2.5 lg:py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400 text-base sm:text-sm lg:text-base"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-sm lg:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 sm:h-4 lg:h-5 w-4 sm:w-4 lg:w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 sm:h-4 lg:h-5 w-4 sm:w-4 lg:w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;