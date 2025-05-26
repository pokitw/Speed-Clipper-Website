import React from 'react';
import { X } from 'lucide-react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details: string[];
}

const FeatureModal: React.FC<FeatureModalProps> = ({ isOpen, onClose, title, description, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">{description}</p>
          
          {details.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
              <ul className="space-y-3">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureModal;