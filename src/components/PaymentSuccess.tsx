import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface PaymentSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  accessKey: string;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ isOpen, onClose, accessKey }) => {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accessKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`max-w-md w-full rounded-2xl ${
        theme === 'dark' ? 'bg-dark-surface text-dark-text' : 'bg-white text-gray-900'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              theme === 'dark' ? 'bg-dark-primary/20' : 'bg-green-100'
            }`}>
              <Check className={`w-8 h-8 ${
                theme === 'dark' ? 'text-dark-primary' : 'text-green-500'
              }`} />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-4">Payment Successful!</h3>
          
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-dark-bg' : 'bg-gray-50'
            }`}>
              <p className="text-sm font-medium mb-2">Your Access Key:</p>
              <div className="flex items-center space-x-2">
                <code className="flex-1 p-2 rounded bg-gray-100 dark:bg-dark-border font-mono text-sm">
                  {accessKey}
                </code>
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-dark-border' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Next Steps:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download Speed Clipper APK</li>
                <li>Install the APK on your Android device</li>
                <li>Open Speed Clipper</li>
                <li>Enter your access key when prompted</li>
                <li>Start using all premium features!</li>
              </ol>
            </div>

            <div className="flex space-x-4">
              <a
                href="/speedclipper.apk"
                download
                className={`flex-1 px-6 py-3 rounded-full font-medium text-center transition-colors ${
                  theme === 'dark'
                    ? 'bg-dark-primary text-white hover:opacity-90'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Download APK
              </a>
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

export default PaymentSuccess;