import React, { useState } from 'react';
import {
  Brain,
  Rocket,
  Users,
  Award,
  Code,
  Database,
  Cpu,
  Network,
} from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Extract SVG data URL to avoid parsing issues
  const svgPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const features = [
    {
      icon: Brain,
      title: 'Software Expertise',
      description:
        'Deep expertise in modern software development, AI integration, and scalable architectures.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description:
        'Pioneering next-generation software solutions and breakthrough technologies.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description:
        'Collaborative approach with deep understanding of business needs and requirements.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Uncompromising commitment to quality software and industry best practices.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const techStack = [
    {
      icon: Code,
      name: 'Frontend',
      techs: ['React', 'Next.js', 'Angular', 'Flutter', 'Tailwind'],
    },
    {
      icon: Database,
      name: 'Backend',
      techs: ['Node.js', 'Java', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: Cpu,
      name: 'AI/ML',
      techs: [
        'TensorFlow',
        'PyTorch',
        'OpenAI',
        'Hugging Face',
        'Scikit-learn ',
      ],
    },
    {
      icon: Network,
      name: 'Cloud',
      techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
    },
  ];

  const tabs = [
    {
      name: 'Our Story',
      content:
        'Founded with a vision to democratize software technology, Blueto Tech has grown from a startup to a leading software solutions provider, specializing in AI-powered applications.',
    },
    {
      name: 'Mission',
      content:
        'To empower organizations with intelligent software solutions that drive innovation, efficiency, and growth in the digital transformation era.',
    },
    {
      name: 'Vision',
      content:
        'Creating a future where AI-powered software seamlessly integrates with human potential to solve complex business challenges and educational needs.',
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[url('${svgPattern}')]`}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 sm:px-4 py-2 rounded-full border border-blue-400/30 mb-4 sm:mb-4 lg:mb-6">
            <Brain className="h-5 sm:h-5 w-5 sm:w-5 text-blue-400" />
            <span className="text-blue-300 font-semibold text-sm sm:text-sm lg:text-base">
              About Blueto Tech
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-4 lg:mb-6">
            Crafting the
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future of Software
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
            We are architects of intelligent software systems, building
            tomorrow's technology today with cutting-edge solutions that
            transform industries and empower businesses.
          </p>
        </div>

        {/* Interactive tabs */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-6 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10 w-full max-w-2xl overflow-x-auto">
              <div className="flex space-x-1 min-w-max">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 sm:px-4 lg:px-6 py-3 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-sm lg:text-base whitespace-nowrap ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center px-2 sm:px-4 lg:px-0">
            <p className="text-base sm:text-lg lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-4 lg:px-0">
          {techStack.map((stack, index) => {
            const StackIcon = stack.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-4 lg:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 sm:space-x-3 mb-3 sm:mb-3 lg:mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-1.5 lg:p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <StackIcon className="h-4 sm:h-4 lg:h-6 w-4 sm:w-4 lg:w-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-base lg:text-lg font-semibold text-white">
                    {stack.name}
                  </h3>
                </div>
                <div className="space-y-2 sm:space-y-2">
                  {stack.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm sm:text-sm">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-0 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-12 sm:w-12 lg:w-16 h-12 sm:h-12 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FeatureIcon className="h-6 sm:h-6 lg:h-8 w-6 sm:w-6 lg:w-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-lg lg:text-xl font-semibold text-white mb-3 sm:mb-3 lg:mb-4 text-center">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="text-center px-2 sm:px-4 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-8">
            {[
              {
                value: '50+',
                label: 'Software Projects Delivered',
                icon: '🚀',
              },
              { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
              { value: '24/7', label: 'Technical Support', icon: '🛠️' },
              { value: '5+', label: 'Years of Excellence', icon: '🏆' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-4 lg:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl sm:text-2xl lg:text-3xl mb-2 sm:mb-2">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;