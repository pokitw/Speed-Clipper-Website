import React from 'react';
import { X, Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
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
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                theme === 'dark' ? 'bg-dark-primary/20' : 'bg-primary-100'
              }`}>
                <Check className={theme === 'dark' ? 'text-dark-primary' : 'text-primary-600'} size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Download Started</h3>
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
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Your download has started. Once complete, you'll need a license key to use Speed Clipper.
            </p>
            
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-gray-50'
            }`}>
              <h4 className="font-semibold mb-2">Next Steps:</h4>
              <ol className={`list-decimal list-inside space-y-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>Join our Discord server</li>
                <li>DM @wpokit to purchase your license key</li>
                <li>Enter your key when you first launch the app</li>
              </ol>
            </div>
            
            <a 
              href="https://discord.gg/Dgqb5FvVuW" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full px-6 py-3 mt-4 rounded-full font-medium transition-colors ${
                theme === 'dark' 
                  ? 'bg-dark-primary text-white hover:opacity-90' 
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Join Discord Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;