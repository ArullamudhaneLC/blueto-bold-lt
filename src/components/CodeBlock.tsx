import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);
  const [displayedCode, setDisplayedCode] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(code.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 w-full">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-1"
        >
          {copied ? <Check className="h-3 sm:h-4 w-3 sm:w-4" /> : <Copy className="h-3 sm:h-4 w-3 sm:w-4" />}
        </button>
      </div>
      <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
        <pre className="text-green-400 whitespace-pre-wrap break-words">
          <code>{displayedCode}</code>
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;