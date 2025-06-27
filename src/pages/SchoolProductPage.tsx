import React, { useState, useEffect } from 'react';
import { ArrowLeft, GraduationCap, Brain, TrendingUp, Users, Award, CheckCircle, Star, Play, Download, Calendar, Phone, Mail, Sparkles, Target, BarChart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MacBookMockup from '../components/MacBookMockup';

const SchoolProductPage: React.FC = () => {
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
      icon: Brain,
      title: 'AI Performance Analysis',
      description: 'Advanced AI algorithms analyze student performance patterns and provide personalized learning recommendations.',
      benefits: ['Personalized learning paths', 'Performance prediction', 'Goal achievement tracking']
    },
    {
      icon: Target,
      title: 'Hidden Talent Discovery',
      description: 'Revolutionary AI system that identifies hidden talents and potential in students across various domains.',
      benefits: ['Multi-domain talent analysis', 'Early potential identification', 'Career guidance']
    },
    {
      icon: BarChart,
      title: 'AI Report Card Analysis',
      description: 'Intelligent report card analysis that provides deep insights into academic progress and improvement areas.',
      benefits: ['Automated insights', 'Progress tracking', 'Parent engagement']
    },
    {
      icon: Users,
      title: 'Complete School Digitalization',
      description: 'Transform your school into a fully digital institution with comprehensive management systems.',
      benefits: ['Paperless operations', 'Digital workflows', 'Cloud-based access']
    }
  ];

  const tabs = [
    { name: 'Overview', content: 'Revolutionary AI-powered school management system with digital diary that transforms education through intelligent performance analysis, hidden talent discovery, and complete school digitalization.' },
    { name: 'AI Features', content: 'Advanced AI performance analysis, hidden talent discovery algorithms, intelligent report card analysis, personalized learning recommendations, and predictive academic insights.' },
    { name: 'Benefits', content: 'Improve student performance by 95%, discover hidden talents early, enable personalized learning, streamline school operations, and be the first to adopt revolutionary AI in education.' }
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Students Active', color: 'text-blue-400' },
    { icon: TrendingUp, value: '95%', label: 'Performance Boost', color: 'text-green-400' },
    { icon: Award, value: '4.9/5', label: 'User Rating', color: 'text-yellow-400' },
    { icon: Brain, value: '100%', label: 'AI Accuracy', color: 'text-purple-400' }
  ];

  const aiFeatures = [
    '🎯 AI Performance Analysis & Goal Achievement',
    '📊 AI-Based Report Card Analysis',
    '💎 Hidden Talent Discovery with AI',
    '🏫 Complete School Digitalization',
    '📱 Real-time Parent-Teacher Communication',
    '🚀 Be First to Adopt in Education',
    '🎓 Personalized Learning Paths',
    '📈 Predictive Academic Insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
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
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-400/30 animate-pulse">
                🚀 Newly Launched
              </span>
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
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white">
                      School Management
                      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AI Digital Diary
                      </span>
                    </h1>
                    <div className="flex items-center space-x-3 mt-2">
                      <p className="text-green-400 font-semibold">🚀 Newly Launched</p>
                      <p className="text-purple-400 font-semibold">• AI-Powered</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Revolutionary educational platform with AI-powered performance analysis and intelligent automation. 
                  Our prestigious newly launched flagship product that transforms schools with cutting-edge AI technology 
                  for discovering hidden talents and achieving academic excellence.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10">
                  <h3 className="text-base lg:text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                    <span>🏆 Prestigious Launch - Be the First to Adopt!</span>
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Join the educational revolution! Be among the first schools to implement revolutionary AI 
                    in education and give your students the competitive edge they deserve.
                  </p>
                </div>
              </div>

              {/* Interactive tabs */}
              <div>
                <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10 mb-4 lg:mb-6">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  {tabs[activeTab].content}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                      <StatIcon className={`h-5 lg:h-6 w-5 lg:w-6 ${stat.color} mx-auto mb-2`} />
                      <div className="text-lg lg:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-400 text-xs lg:text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm lg:text-base">
                  <Play className="h-4 lg:h-5 w-4 lg:w-5" />
                  <span>Watch AI Demo</span>
                </button>
                <button className="border-2 border-blue-400 text-blue-400 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base">
                  <Download className="h-4 lg:h-5 w-4 lg:w-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            {/* MacBook Mockup with School Management Image - Enhanced for better visibility */}
            <div className="relative lg:pl-8 xl:pl-12">
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <MacBookMockup 
                  imageUrl="/images/image.png"
                  alt="School Management AI Digital Diary Dashboard"
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 p-3 lg:p-4 rounded-xl shadow-lg animate-bounce">
                <Brain className="h-5 lg:h-6 w-5 lg:w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 p-2 lg:p-3 rounded-lg shadow-lg animate-pulse">
                <TrendingUp className="h-4 lg:h-5 w-4 lg:w-5 text-white" />
              </div>
              <div className="absolute top-1/2 -left-4 lg:-left-6 bg-gradient-to-r from-purple-500 to-pink-500 px-3 lg:px-4 py-1 lg:py-2 rounded-lg shadow-lg font-bold text-white text-xs lg:text-sm animate-pulse">
                🏆 NEW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className="py-16 lg:py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Revolutionary AI Features for
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Modern Education
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI-powered platform transforms education with intelligent analysis, 
              hidden talent discovery, and personalized learning experiences.
            </p>
          </div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="text-xl lg:text-2xl mb-2 lg:mb-3">{feature.split(' ')[0]}</div>
                <p className="text-gray-300 text-xs lg:text-sm group-hover:text-white transition-colors">
                  {feature.substring(feature.indexOf(' ') + 1)}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Features */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4 lg:space-x-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 lg:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <FeatureIcon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 lg:h-5 w-4 lg:w-5 text-green-400" />
                            <span className="text-gray-300 text-sm lg:text-base">{benefit}</span>
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
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="h-6 lg:h-8 w-6 lg:w-8 text-yellow-400" />
              <Star className="h-6 lg:h-8 w-6 lg:w-8 text-yellow-400" />
              <Star className="h-6 lg:h-8 w-6 lg:w-8 text-yellow-400" />
              <Star className="h-6 lg:h-8 w-6 lg:w-8 text-yellow-400" />
              <Star className="h-6 lg:h-8 w-6 lg:w-8 text-yellow-400" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Lead the Educational Revolution?
            </h3>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Be among the first schools to implement revolutionary AI in education. 
              Transform your institution and give your students the competitive edge they deserve.
            </p>
            
            <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10 mb-8">
              <h4 className="text-base lg:text-lg font-semibold text-white mb-3">🚀 Early Adopter Benefits</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm lg:text-base text-gray-300">
                <div>✨ Priority support & training</div>
                <div>🎯 Custom AI model training</div>
                <div>🏆 Pioneer recognition program</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Calendar className="h-4 lg:h-5 w-4 lg:w-5" />
                <span>Schedule AI Demo</span>
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Phone className="h-4 lg:h-5 w-4 lg:w-5" />
                <span>Call Education Team</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm lg:text-base">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>education@bluetotech.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolProductPage;