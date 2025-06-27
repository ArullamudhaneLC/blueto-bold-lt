import React from 'react';

interface MacBookMockupProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const MacBookMockup: React.FC<MacBookMockupProps> = ({ imageUrl, alt, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* MacBook Pro Frame */}
      <div className="relative bg-gray-800 rounded-t-2xl lg:rounded-t-3xl p-3 lg:p-4 xl:p-6 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-black rounded-lg lg:rounded-xl p-2 lg:p-3 xl:p-4 relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3 xl:mb-4">
            <div className="w-2 lg:w-3 h-2 lg:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 lg:w-3 h-2 lg:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 lg:w-3 h-2 lg:h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 bg-gray-700 rounded px-2 lg:px-3 xl:px-4 py-1 lg:py-1.5 xl:py-2 text-xs lg:text-sm text-gray-300 text-center">
              Blueto Tech - AI Software Platform
            </div>
          </div>
          
          {/* Screen Content - Increased height for better visibility */}
          <div className="relative rounded overflow-hidden">
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-56 sm:h-72 lg:h-80 xl:h-96 2xl:h-[28rem] object-cover object-top"
            />
            
            {/* Subtle screen reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* MacBook Base */}
      <div className="bg-gray-700 h-2 lg:h-3 xl:h-4 rounded-b-2xl lg:rounded-b-3xl shadow-lg"></div>
      <div className="bg-gray-600 h-1 lg:h-1.5 xl:h-2 mx-auto w-20 lg:w-28 xl:w-32 rounded-b-lg"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl lg:rounded-3xl blur-xl opacity-50 -z-10 animate-pulse"></div>
    </div>
  );
};

export default MacBookMockup;