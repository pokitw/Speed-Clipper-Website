import React from 'react';
import { X, CreditCard, Download, Key } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface PurchaseStepsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseStepsModal: React.FC<PurchaseStepsModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`max-w-md w-full rounded-2xl ${
        theme === 'dark' ? 'bg-dark-surface text-dark-text' : 'bg-white text-gray-900'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">How to Get Started</h3>
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
          
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-gray-50'
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-dark-primary/20' : 'bg-primary-100'
                }`}>
                  <CreditCard className={theme === 'dark' ? 'text-dark-primary' : 'text-primary-600'} size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">1. Purchase License Key</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    Click the "Purchase License" button and complete the payment process ($3.99). You'll receive your license key immediately after payment.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-gray-50'
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-dark-primary/20' : 'bg-primary-100'
                }`}>
                  <Download className={theme === 'dark' ? 'text-dark-primary' : 'text-primary-600'} size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Download Speed Clipper</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    Download and install the Speed Clipper APK on your Android device.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-gray-50'
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-dark-primary/20' : 'bg-primary-100'
                }`}>
                  <Key className={theme === 'dark' ? 'text-dark-primary' : 'text-primary-600'} size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Activate Speed Clipper</h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    Open Speed Clipper and enter your license key when prompted. You'll now have access to all premium features!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => {
                  onClose();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex-1 px-6 py-3 rounded-full font-medium text-center transition-colors ${
                  theme === 'dark'
                    ? 'bg-dark-primary text-white hover:opacity-90'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Purchase Now
              </button>
              <button
                onClick={onClose}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-dark-border hover:bg-dark-hover'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseStepsModal;