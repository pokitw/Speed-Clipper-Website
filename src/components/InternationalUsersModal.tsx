import React from 'react';
import { X, MessageSquare, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface InternationalUsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedWithPayment: () => void;
}

const InternationalUsersModal: React.FC<InternationalUsersModalProps> = ({ 
  isOpen, 
  onClose, 
  onProceedWithPayment 
}) => {
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
              <Globe className={`w-6 h-6 ${
                theme === 'dark' ? 'text-dark-primary' : 'text-primary-600'
              } mr-2`} />
              <h3 className="text-2xl font-semibold">International Users</h3>
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
          
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-blue-50'
            }`}>
              <h4 className="font-semibold mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                For Users Outside India
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-blue-800'}`}>
                If you're located outside India, please contact me directly on Discord to purchase your license key. 
                This ensures smooth payment processing and immediate support.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">How to Contact:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Join our Discord server using the link below</li>
                <li>Send a direct message to <strong>wpokit</strong></li>
                <li>Mention that you want to purchase Speed Clipper</li>
                <li>I'll help you with the payment process and provide your license key</li>
              </ol>
            </div>

            <div className="flex flex-col space-y-3">
              <a
                href="https://discord.gg/Dgqb5FvVuW"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-dark-primary text-white hover:opacity-90'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <MessageSquare className="mr-2" size={20} />
                Join Discord & DM wpokit
              </a>
              
              <button
                onClick={onProceedWithPayment}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-dark-border hover:bg-dark-hover text-dark-text'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                I'm in India - Continue with Payment
              </button>
            </div>

            <div className={`text-xs text-center ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <p>
                Indian users can proceed with the automated payment system. 
                International users get personalized support through Discord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalUsersModal;