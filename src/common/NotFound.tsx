// src/components/common/NotFound.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-pink-900 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
        {/* Logo and Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
       
          <div className="text-center space-y-2">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
              404
            </h1>
            <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
            <p className="text-gray-600 text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Home Button */}
        <div className="flex justify-center mt-8">
          <Button
            asChild
            className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Link to="/" className="flex items-center gap-2">
              <span>Return Home</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>       
      </div>
    </div>
  );
};