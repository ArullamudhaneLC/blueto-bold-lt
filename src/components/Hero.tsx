import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Bot,
  Sparkles,
  Code,
  Zap,
  GitBranch,
  Cpu,
  Database,
  Cloud,
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import CodeBlock from './CodeBlock';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const texts = [
    'AI Solutions',
    'Better Software',
    'Smart Systems',
    'Future Tech',
    'Innovative Apps',
  ];
  const techIcons = [Bot, Code, Cpu, Database, Cloud, Zap];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techIcons.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = texts[currentIndex];
    let index = 0;
    setCurrentText('');

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const codeExample = `// School Management AI Digital Diary
const schoolAI = new BluetoSchoolAI({
  modules: ['performance', 'analytics', 'talents'],
  intelligence: 'advanced',
  realtime: true
});

// AI Performance Analysis
const insights = await schoolAI.analyzeStudent({
  studentId: 'STU001',
  subjects: ['math', 'science', 'english'],
  timeframe: '3months'
});

console.log('Hidden talents:', insights.talents);
console.log('Improvement areas:', insights.recommendations);`;

  const stats = [
    {
      icon: Code,
      value: '50+',
      label: 'Software Projects',
      color: 'text-blue-400',
    },
    {
      icon: Zap,
      value: '100%',
      label: 'Success Rate',
      color: 'text-green-400',
    },
    {
      icon: GitBranch,
      value: '24/7',
      label: 'Support',
      color: 'text-purple-400',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
    >
      <ParticleBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-40 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="space-y-6 sm:space-y-6 lg:space-y-8 text-white order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 sm:px-4 py-2 rounded-full border border-blue-400/30">
                  <Sparkles className="h-5 sm:h-5 w-5 sm:w-5 text-blue-400 animate-pulse" />
                  <span className="text-blue-300 font-semibold text-sm sm:text-sm lg:text-base">
                    Next-Gen AI Solutions
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-center lg:text-left">
                Building
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse min-h-[1.2em] text-4xl sm:text-6xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
                <span className="block text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl mt-2 sm:mt-2">
                  for Tomorrow
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0 px-2 sm:px-0">
                Blueto Tech Pvt Ltd specializes in cutting-edge software
                development solutions. From intelligent school management
                systems to advanced healthcare platforms, we craft innovative
                software products that transform industries.
              </p>

              {/* Collaboration message */}
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-4 lg:p-6 border border-white/10 mx-2 sm:mx-0">
                <h3 className="text-base sm:text-lg lg:text-lg font-semibold text-white mb-2 sm:mb-2">
                  🤝 Partnership Opportunity
                </h3>
                <p className="text-sm sm:text-base lg:text-base text-gray-300">
                  <strong>
                    We welcome clients to collaborate with us to create
                    exceptional software products
                  </strong>{' '}
                  that drive innovation and deliver measurable business value.
                </p>
              </div>
            </div>

            {/* Interactive stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-3 lg:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <StatIcon
                      className={`h-5 sm:h-5 lg:h-6 w-5 sm:w-5 lg:w-6 ${stat.color} mb-2 sm:mb-2 group-hover:scale-110 transition-transform mx-auto lg:mx-0`}
                    />
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-center lg:text-left">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm sm:text-sm text-center lg:text-left">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <a
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-6 lg:px-8 py-4 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
                href="#products"
              >
                <span className="text-base sm:text-base">
                  Explore Our Solutions
                </span>
                <ArrowRight className="h-5 sm:h-5 w-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                className="border-2 border-blue-400 text-blue-400 px-6 sm:px-6 lg:px-8 py-4 sm:py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm text-base sm:text-base"
                href="#contact"
              >
                Start Collaboration
              </a>
            </div>
          </div>

          {/* Interactive Code Demo - Desktop Only */}
          <div className="relative order-1 lg:order-2 px-2 sm:px-0 hidden lg:block">
            <div className="relative z-10 space-y-3 sm:space-y-4 lg:space-y-6">
              {/* Floating tech elements */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-3 lg:p-4 rounded-xl shadow-lg animate-bounce">
                <Bot className="h-4 sm:h-6 lg:h-8 w-4 sm:w-6 lg:w-8 text-white" />
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10 shadow-2xl">
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono text-xs sm:text-sm">
                      Software AI Online
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    {React.createElement(techIcons[currentTechIndex], {
                      className: 'h-4 w-4 text-blue-400 animate-pulse',
                    })}
                    <span className="text-xs text-blue-400">AI</span>
                  </div>
                </div>

                <CodeBlock code={codeExample} />
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 justify-center lg:justify-start">
                {[
                  'React',
                  'TypeScript',
                  'AI/ML',
                  'Node.js',
                  'Python',
                  'TensorFlow',
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Glowing orb */}
            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-10 -left-4 sm:-left-6 lg:-left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse blur-xl"></div>
          </div>
        </div>

        {/* JavaScript Code Demo - Mobile/Tablet Only - AT BOTTOM */}
        <div className="lg:hidden mt-8 sm:mt-12 px-2 sm:px-0">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-5 w-5 text-blue-400" />
              <span className="text-white font-semibold text-base">AI Code Demo</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Full code block for tablet */}
            <div className="hidden sm:block lg:hidden">
              <CodeBlock code={codeExample} />
            </div>

            {/* Simplified code for mobile */}
            <div className="block sm:hidden bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
              <div className="flex items-center space-x-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">school-ai.js</span>
              </div>
              <div className="p-3 font-mono text-sm text-green-400">
                <div className="animate-pulse">
                  const ai = new BluetoSchoolAI();
                </div>
                <div className="animate-pulse delay-300">
                  ai.analyzeStudent(data);
                </div>
                <div className="animate-pulse delay-700 text-blue-400">
                  // Finding hidden talents...
                </div>
                <div className="animate-pulse delay-1000 text-purple-400">
                  console.log('AI Ready! 🚀');
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Software Engine Section - NOW AT THE BOTTOM */}
        <div className="lg:hidden mt-6 sm:mt-8 px-2 sm:px-0">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 shadow-2xl text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-base">
                  AI Software Engine
                </div>
                <div className="text-green-400 text-sm">
                  Ready for Development
                </div>
              </div>
            </div>

            {/* Tech badges for mobile */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['React', 'AI/ML', 'Node.js', 'Python'].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-300 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2 sm:space-y-2">
          <span className="text-sm sm:text-sm">Scroll to explore</span>
          <div className="w-5 sm:w-5 lg:w-6 h-8 sm:h-8 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 sm:h-3 bg-white/60 rounded-full mt-2 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;