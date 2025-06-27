import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Heart,
  Users,
  BarChart,
  Shield,
  CheckCircle,
  Star,
  Play,
  Download,
  Calendar,
  Phone,
  Mail,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MacBookMockup from '../components/MacBookMockup';

const HMSProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    // Navigate back to home page and scroll to contact
    window.location.href = '/#contact';
  };

  const handleBackNavigation = () => {
    // Use navigate(-1) to go back to previous page with preserved scroll position
    navigate(-1);
  };

  const features = [
    {
      icon: Heart,
      title: 'AI-Powered Diagnostics',
      description:
        'Advanced machine learning algorithms assist doctors in accurate diagnosis and treatment recommendations.',
      benefits: [
        '99.2% diagnostic accuracy',
        'Reduced diagnosis time by 60%',
        'Early disease detection',
      ],
    },
    {
      icon: Users,
      title: 'Patient Management',
      description:
        'Comprehensive patient records, appointment scheduling, and treatment history tracking.',
      benefits: [
        'Centralized patient data',
        'Automated scheduling',
        'Treatment tracking',
      ],
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description:
        'Real-time insights into hospital operations, patient outcomes, and resource utilization.',
      benefits: [
        'Operational insights',
        'Performance metrics',
        'Predictive analytics',
      ],
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description:
        'Enterprise-grade security ensuring complete patient data privacy and regulatory compliance.',
      benefits: [
        'End-to-end encryption',
        'Audit trails',
        'Compliance reporting',
      ],
    },
  ];

  const tabs = [
    {
      name: 'Overview',
      content:
        'Revolutionary healthcare management platform that transforms how hospitals operate with AI-powered diagnostics, predictive analytics, and comprehensive patient care management.',
    },
    {
      name: 'Features',
      content:
        'Advanced AI diagnostics, electronic health records, inventory management, billing systems, telemedicine integration, and real-time analytics dashboard.',
    },
    {
      name: 'Benefits',
      content:
        'Reduce operational costs by 40%, improve patient outcomes by 35%, streamline workflows, enhance staff productivity, and ensure complete regulatory compliance.',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Patients Managed Daily',
      color: 'text-blue-400',
    },
    {
      icon: BarChart,
      value: '99.9%',
      label: 'System Uptime',
      color: 'text-green-400',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'HIPAA Compliant',
      color: 'text-purple-400',
    },
    {
      icon: Heart,
      value: '35%',
      label: 'Better Outcomes',
      color: 'text-red-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBackNavigation}
              className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white">
                      Hospital Management
                      <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                        System
                      </span>
                    </h1>
                    <p className="text-green-400 font-semibold mt-2">
                      Production Ready • AI-Powered
                    </p>
                  </div>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Revolutionary healthcare management platform powered by
                  artificial intelligence. Transform your hospital operations
                  with predictive analytics, automated diagnostics, and
                  comprehensive patient care management.
                </p>
              </div>

              {/* Interactive tabs */}
              <div>
                <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10 mb-6">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
                    >
                      <StatIcon
                        className={`h-6 w-6 ${stat.color} mx-auto mb-2`}
                      />
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
                <button className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            {/* MacBook Mockup */}
            <div className="relative">
              <MacBookMockup
                imageUrl="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hospital Management System Dashboard"
                className="transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-xl shadow-lg animate-bounce">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg shadow-lg animate-pulse">
                <BarChart className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Modern Healthcare
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered tools designed to revolutionize
              hospital operations and improve patient care outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <FeatureIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="h-8 w-8 text-yellow-400" />
              <Star className="h-8 w-8 text-yellow-400" />
              <Star className="h-8 w-8 text-yellow-400" />
              <Star className="h-8 w-8 text-yellow-400" />
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hospital?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of healthcare institutions already using our HMS to
              improve patient outcomes and streamline operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Demo</span>
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Sales</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@myblueto.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 9952400694</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HMSProductPage;
