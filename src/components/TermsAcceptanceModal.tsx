import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import PolicyModal from './PolicyModal';
import InternationalUsersModal from './InternationalUsersModal';

interface TermsAcceptanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const TermsAcceptanceModal: React.FC<TermsAcceptanceModalProps> = ({ isOpen, onClose, onAccept }) => {
  const { theme } = useTheme();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedAge, setAcceptedAge] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showInternationalModal, setShowInternationalModal] = useState(false);

  const handleAccept = () => {
    if (acceptedTerms && acceptedPrivacy && acceptedAge) {
      setShowInternationalModal(true);
    }
  };

  const handleProceedWithPayment = () => {
    setShowInternationalModal(false);
    onAccept();
  };

  const handleCloseInternationalModal = () => {
    setShowInternationalModal(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className={`max-w-md w-full rounded-2xl ${
          theme === 'dark' ? 'bg-dark-surface text-dark-text' : 'bg-white text-gray-900'
        }`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">Terms & Conditions</h3>
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
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-3"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm">
                  I accept the{' '}
                  <button 
                    onClick={() => setShowTerms(true)} 
                    className="text-primary-600 dark:text-dark-primary hover:underline"
                  >
                    Terms of Service
                  </button>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 mr-3"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                />
                <label htmlFor="privacy" className="text-sm">
                  I accept the{' '}
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)} 
                    className="text-primary-600 dark:text-dark-primary hover:underline"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="age"
                  className="mt-1 mr-3"
                  checked={acceptedAge}
                  onChange={(e) => setAcceptedAge(e.target.checked)}
                />
                <label htmlFor="age" className="text-sm">
                  I confirm that I am at least 13 years old
                </label>
              </div>
            </div>

            <button
              onClick={handleAccept}
              disabled={!acceptedTerms || !acceptedPrivacy || !acceptedAge}
              className={`w-full mt-6 px-6 py-3 rounded-full font-medium text-center transition-all ${
                acceptedTerms && acceptedPrivacy && acceptedAge
                  ? theme === 'dark'
                    ? 'bg-dark-primary text-white hover:opacity-90'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 dark:bg-dark-border text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <InternationalUsersModal
        isOpen={showInternationalModal}
        onClose={handleCloseInternationalModal}
        onProceedWithPayment={handleProceedWithPayment}
      />

      <PolicyModal
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        title="Privacy Policy"
        policyFile="/privacy-policy.txt"
      />

      <PolicyModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
        policyFile="/terms-of-service.txt"
      />
    </>
  );
};

export default TermsAcceptanceModal;