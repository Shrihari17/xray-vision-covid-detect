
import { Activity } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">COVID-19 X-Ray Classifier</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/classify" 
              className={`transition-colors ${
                isActive('/classify') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Classify
            </Link>
            <Link 
              to="/history" 
              className={`transition-colors ${
                isActive('/history') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Training History
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
