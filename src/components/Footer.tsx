import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import PolicyModal from './PolicyModal';

const Footer: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="Speed Clipper" className="h-8 w-auto mr-2" />
              <span className="font-display font-bold text-2xl text-white">Speed Clipper</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              The fastest way to resize, trim, and edit your videos on Android. Now with Material 3 UI and powerful new features!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/Dgqb5FvVuW" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquare size={20} />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#get-started" className="text-gray-400 hover:text-white transition-colors">Get Started</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li>
                  <a 
                    href="https://discord.gg/Dgqb5FvVuW" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTerms(true)} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Speed Clipper. All rights reserved.
          </p>
        </div>
      </div>

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
    </footer>
  );
};

export default Footer;