import React, { useState } from 'react';
import {
  Heart,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart,
  Shield,
  Award,
  TrendingUp,
  Brain,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(1); // Default to School Management System

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Save scroll position before navigating to product page
  const handleProductNavigation = () => {
    sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
  };

  const products = [
    {
      icon: Heart,
      name: 'Hospital Management System',
      shortName: 'HMS',
      description:
        'Revolutionary healthcare management platform powered by AI diagnostics and predictive analytics.',
      image:
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'AI-Powered Diagnostics',
        'Electronic Health Records',
        'Predictive Analytics',
        'Inventory Management',
        'Billing & Insurance',
        'Telemedicine Integration',
      ],
      stats: [
        { icon: Users, value: '10K+', label: 'Patients Managed' },
        { icon: BarChart, value: '99.9%', label: 'Uptime' },
        { icon: Shield, value: 'HIPAA', label: 'Compliant' },
      ],
      status: 'Production Ready',
      color: 'from-red-500 to-pink-500',
      link: '/products/hms',
      demoCode: `// AI Diagnostic Assistant
const diagnosis = await hms.ai.analyze({
  symptoms: ['fever', 'cough', 'fatigue'],
  vitals: { temp: 101.2, bp: '120/80' },
  history: patientHistory
});

console.log(diagnosis.recommendations);`,
    },
    {
      icon: GraduationCap,
      name: 'School Management System with AI Digital Diary - Eduverse',
      shortName: 'School Management AI Digital Diary',
      description:
        'Revolutionary educational platform with AI-powered performance analysis and intelligent automation - our prestigious newly launched flagship product.',
      image: '/images/image.png',
      features: [
        '🎯 AI Performance Analysis & Goal Achievement',
        '📊 AI-Based Report Card Analysis',
        '💎 Hidden Talent Discovery with AI',
        '🏫 Complete School Digitalization',
        '📱 Real-time Parent-Teacher Communication',
        '🚀 Be First to Adopt in Education',
      ],
      benefits: [
        'Helps students learn and achieve their goals through AI current performance analysis',
        'AI-based report card analysis identifies improvement areas instantly',
        'Discovers hidden talents in students using advanced AI algorithms',
        'Makes schools fully or semi-digital with cutting-edge technology',
        'Be the first school to adopt revolutionary AI in education',
        'Personalized learning paths for every student',
      ],
      stats: [
        { icon: Users, value: '5K+', label: 'Students Active' },
        { icon: TrendingUp, value: '95%', label: 'Performance Boost' },
        { icon: Award, value: '4.9', label: 'User Rating' },
      ],
      status: '🚀 Newly Launched',
      color: 'from-blue-500 to-purple-500',
      link: '/products/school-management',
      demoCode: `// AI Digital Diary - Performance Analysis
const studentInsights = await schoolAI.analyze({
  studentId: 'STU001',
  subjects: ['math', 'science', 'english'],
  timeframe: '3months',
  includeHiddenTalents: true
});

// Discover hidden talents
console.log('Hidden talents:', studentInsights.talents);
console.log('Goal achievement:', studentInsights.goals);
console.log('AI recommendations:', studentInsights.improvements);`,
    },
  ];

  return (
    <section
      id="products"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-4 sm:px-4 py-2 rounded-full border border-purple-400/30 mb-4 sm:mb-4 lg:mb-6">
            <Star className="h-5 sm:h-5 w-5 sm:w-5 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm sm:text-sm lg:text-base">
              Our Flagship Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-4 lg:mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
            Discover our cutting-edge software platforms that are transforming
            healthcare and education industries worldwide with AI-powered
            innovation.
          </p>
        </div>

        {/* Product selector */}
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-2 border border-white/10 w-full max-w-2xl overflow-x-auto">
            <div className="flex space-x-2 sm:space-x-2 min-w-max">
              {products.map((product, index) => {
                const ProductIcon = product.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`flex items-center space-x-3 sm:space-x-3 px-4 sm:px-4 lg:px-6 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-sm lg:text-base whitespace-nowrap ${
                      activeProduct === index
                        ? `bg-gradient-to-r ${product.color} text-white shadow-lg transform scale-105 `
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ProductIcon className="h-4 sm:h-4 lg:h-5 w-4 sm:w-4 lg:w-5" />
                    <span className="hidden sm:inline">
                      {product.shortName}
                    </span>
                    <span className="sm:hidden">{product.shortName}</span>
                    {index === 1 && (
                      <span className="bg-green-400 text-green-900 text-xs px-2 sm:px-1.5 lg:px-2 py-1 sm:py-1 rounded-full font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active product showcase */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Product info */}
          <div className="space-y-6 sm:space-y-6 lg:space-y-8 px-2 sm:px-4 lg:px-0">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-4">
                <div
                  className={`bg-gradient-to-r ${products[activeProduct].color} p-3 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl w-fit`}
                >
                  {React.createElement(products[activeProduct].icon, {
                    className: 'h-6 sm:h-6 lg:h-8 w-6 sm:w-6 lg:w-8 text-white',
                  })}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {products[activeProduct].name}
                  </h3>
                  <span
                    className={`inline-block px-3 sm:px-3 py-1 rounded-full text-sm sm:text-sm font-medium mt-2 sm:mt-2 ${
                      products[activeProduct].status.includes('Newly Launched')
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30 animate-pulse'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    }`}
                  >
                    {products[activeProduct].status}
                  </span>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                {products[activeProduct].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-3 lg:space-y-4">
              {products[activeProduct].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="h-5 sm:h-5 w-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-sm lg:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Benefits for School Management System */}
            {activeProduct === 1 && (
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-4 lg:p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-3 sm:mb-3 lg:mb-4 flex items-center space-x-2">
                  <Brain className="h-5 sm:h-5 w-5 sm:w-5 text-blue-400" />
                  <span className="text-base sm:text-base">
                    AI-Powered Benefits
                  </span>
                </h4>
                <ul className="space-y-2 sm:space-y-2 lg:space-y-3 text-gray-300">
                  {products[activeProduct].benefits?.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-3"
                    >
                      <div className="w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 bg-blue-400 rounded-full mt-2 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-sm lg:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-3 lg:gap-4">
              {products[activeProduct].stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-3 lg:p-4 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <StatIcon className="h-5 sm:h-5 lg:h-6 w-5 sm:w-5 lg:w-6 text-blue-400 mx-auto mb-2 sm:mb-2" />
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-4">
              <Link
                to={products[activeProduct].link}
                onClick={handleProductNavigation}
                className={`bg-gradient-to-r ${products[activeProduct].color} text-white px-6 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-base sm:text-sm lg:text-base`}
              >
                <span>Explore Product</span>
                <ArrowRight className="h-4 sm:h-4 lg:h-5 w-4 sm:w-4 lg:w-5" />
              </Link>
              <button
                onClick={scrollToContact}
                className="border-2 border-white/20 text-white px-6 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-base sm:text-sm lg:text-base"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Visual showcase */}
          <div className="relative px-2 sm:px-4 lg:px-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-4 lg:p-6 border border-white/10">
              {/* MacBook mockup for School Management System */}
              {activeProduct === 1 ? (
                <div className="relative">
                  {/* MacBook frame */}
                  <div className="bg-gray-800 rounded-t-xl sm:rounded-t-2xl p-3 sm:p-3 lg:p-4 border-b-2 sm:border-b-4 border-gray-700">
                    <div className="bg-black rounded-lg p-2 sm:p-2">
                      <div className="flex items-center space-x-2 sm:space-x-2 mb-2 sm:mb-2 lg:mb-3">
                        <div className="w-2 sm:w-2 lg:w-3 h-2 sm:h-2 lg:h-3 bg-red-500 rounded-full"></div>
                        <div className="w-2 sm:w-2 lg:w-3 h-2 sm:h-2 lg:h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 sm:w-2 lg:w-3 h-2 sm:h-2 lg:h-3 bg-green-500 rounded-full"></div>
                        <div className="flex-1 bg-gray-700 rounded px-3 sm:px-3 py-1 sm:py-1 text-sm text-gray-300 text-center">
                          School Management AI - Digital Diary
                        </div>
                      </div>
                      <img
                        src={products[activeProduct].image}
                        alt={products[activeProduct].name}
                        className="w-full h-48 sm:h-52 lg:h-68 object-cover rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-700 h-3 sm:h-3 lg:h-4 rounded-b-xl sm:rounded-b-2xl"></div>
                  <div className="bg-gray-600 h-2 sm:h-1.5 lg:h-2 mx-auto w-20 sm:w-24 lg:w-32 rounded-b-lg"></div>
                </div>
              ) : (
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl mb-4 sm:mb-4 lg:mb-6"
                />
              )}
            </div>

            {/* Floating elements */}
            <div
              className={`absolute -top-3 sm:-top-3 lg:-top-4 -right-3 sm:-right-3 lg:-right-4 bg-gradient-to-r ${products[activeProduct].color} p-3 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl shadow-lg animate-bounce`}
            >
              {React.createElement(products[activeProduct].icon, {
                className: 'h-5 sm:h-5 lg:h-6 w-5 sm:w-5 lg:w-6 text-white',
              })}
            </div>

            {/* Special badge for School Management System */}
            {activeProduct === 1 && (
              <div className="absolute -top-2 sm:-top-2 -left-2 sm:-left-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 sm:px-3 lg:px-4 py-2 sm:py-2 rounded-lg sm:rounded-xl font-bold text-sm sm:text-sm animate-pulse shadow-lg">
                🏆 Prestigious Launch
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;