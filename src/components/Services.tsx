import React, { useState } from 'react';
import { Code2, Bot, Lightbulb, HeadphonesIcon, Zap, Target, ArrowRight, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Bot,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions engineered for your specific business challenges and industry requirements.',
      features: ['Machine Learning Models', 'Neural Networks', 'Computer Vision', 'NLP Solutions'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end software development using cutting-edge technologies and modern architectures.',
      features: ['React/Next.js', 'Node.js/Python', 'Cloud Architecture', 'DevOps Integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Seamlessly integrate intelligent capabilities into your existing systems and workflows.',
      features: ['API Development', 'System Integration', 'Data Pipeline', 'Real-time Processing'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'AI Consulting',
      description: 'Strategic guidance on AI adoption, implementation roadmaps, and digital transformation.',
      features: ['Strategy Planning', 'Technology Assessment', 'ROI Analysis', 'Implementation Roadmap'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Product Strategy',
      description: 'Complete product development lifecycle from ideation to market launch and scaling.',
      features: ['Market Research', 'MVP Development', 'User Experience', 'Go-to-Market'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: '24/7 dedicated support ensuring your systems operate at peak performance.',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Security Updates', 'Maintenance'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-10 sm:top-20 right-20 sm:right-40 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 sm:px-4 py-2 rounded-full border border-blue-400/30 mb-4 sm:mb-4 lg:mb-6">
            <Sparkles className="h-5 sm:h-5 w-5 sm:w-5 text-blue-400 animate-pulse" />
            <span className="text-blue-300 font-semibold text-sm sm:text-sm lg:text-base">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-4 lg:mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
            From concept to deployment, we provide end-to-end AI and software development services 
            that transform businesses and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-4 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
                <div className={`bg-gradient-to-r ${service.color} w-12 sm:w-12 lg:w-16 h-12 sm:h-12 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 sm:h-6 lg:h-8 w-6 sm:w-6 lg:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-lg lg:text-xl font-semibold text-white mb-3 sm:mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-4 lg:mb-6 text-sm sm:text-sm lg:text-base">{service.description}</p>
                
                {/* Features list */}
                <div className="space-y-2 sm:space-y-1.5 lg:space-y-2 mb-4 sm:mb-4 lg:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-gray-400 text-sm sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center space-x-2 text-sm sm:text-sm lg:text-base`}>
                  <span>Learn More</span>
                  <ArrowRight className="h-4 sm:h-4 w-4 sm:w-4" />
                </button>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative px-2 sm:px-4 lg:px-0">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-8 lg:p-12 border border-white/10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-4 lg:mb-6">
                Ready to Build the Future?
              </h3>
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to create AI solutions that will revolutionize your industry 
                and give you a competitive edge in the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 lg:gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg text-base sm:text-sm lg:text-base">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 sm:h-4 lg:h-5 w-4 sm:w-4 lg:w-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-6 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-base sm:text-sm lg:text-base">
                  Schedule Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6 mt-8 sm:mt-8 lg:mt-12 pt-6 sm:pt-6 lg:pt-8 border-t border-white/10">
                {[
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '5+', label: 'Years Experience' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;