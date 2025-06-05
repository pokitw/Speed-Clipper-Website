import React from 'react';
import { X, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThanksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThanksModal: React.FC<ThanksModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`max-w-md w-full rounded-2xl ${
        theme === 'dark' ? 'bg-dark-surface text-dark-text' : 'bg-white text-gray-900'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Heart className={`w-6 h-6 ${
                theme === 'dark' ? 'text-dark-primary' : 'text-primary-600'
              } mr-2`} />
              <h3 className="text-2xl font-semibold">Thank You!</h3>
            </div>
            <button 
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-dark-border text-dark-text' 
                  : 'hover:bg-gray-100 text-gray-500'
              }`}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Your support means the world to me! Thanks to generous people like you, 
              I can continue improving Speed Clipper and creating more helpful tools.
            </p>
            
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Your contribution will help fuel the development of new features and 
              keep Speed Clipper running smoothly.
            </p>

            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-gray-50'
            }`}>
              <p className="font-medium">What's Next?</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• Enhanced video processing capabilities</li>
                <li>• More customization options</li>
                <li>• Advanced editing features</li>
                <li>• Performance improvements</li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className={`w-full px-6 py-3 rounded-full font-medium text-center transition-colors ${
                theme === 'dark'
                  ? 'bg-dark-primary text-white hover:opacity-90'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Continue Using Speed Clipper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;