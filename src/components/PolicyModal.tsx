import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  policyFile: string;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, title, policyFile }) => {
  const [content, setContent] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      fetch(policyFile)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error loading policy:', error));
    }
  }, [isOpen, policyFile]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`max-w-2xl w-full rounded-2xl ${
        theme === 'dark' ? 'bg-dark-surface text-dark-text' : 'bg-white text-gray-900'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">{title}</h3>
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
          
          <div className={`prose max-w-none ${
            theme === 'dark' ? 'prose-invert' : ''
          }`}>
            <pre className="whitespace-pre-wrap font-sans">{content}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;