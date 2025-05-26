import React from 'react';
import { ArrowRight, MessageSquare, Key, Check } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12 lg:space-x-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Transform Your Video Editing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get Speed Clipper v1.1 today for just $3.99 and experience faster, easier video editing with our powerful features and sleek Material 3 UI.
            </p>
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What's new in v1.1:</h3>
              <ul className="space-y-3">
                {[
                  "Material 3 UI redesign",
                  "Quick Settings via long-press",
                  "Floating Resize Button",
                  "New editing modes and tools",
                  "Video Quality Selector",
                  "Hardware Acceleration",
                  "One-tap Storage Cleaner"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://discord.gg/Dgqb5FvVuW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl text-lg w-full"
              >
                <MessageSquare size={24} className="mr-2" />
                Join Our Discord
                <ArrowRight size={20} className="ml-2" />
              </a>
              <p className="text-center text-gray-600">
                DM @wpokit to purchase your permanent license key
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative mx-auto max-w-xs">
              <div className="rounded-3xl overflow-hidden border-8 border-gray-900 shadow-2xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Speed Clipper on smartphone" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-center font-medium">Speed Clipper v1.1</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-secondary-500 rounded-3xl transform rotate-6"></div>
            </div>
            
            <div className="mt-12 bg-gray-100 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">One-Time Purchase</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <Key size={20} className="mr-2 text-primary-600" />
                  Lifetime license key for just $3.99
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={20} className="mr-2 text-green-500" />
                  No subscription required
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={20} className="mr-2 text-green-500" />
                  All features included
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={20} className="mr-2 text-green-500" />
                  Future updates included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;