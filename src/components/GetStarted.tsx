import React from 'react';
import { Smartphone, Video, Key, Zap } from 'lucide-react';

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Get Started with Speed Clipper</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start creating perfect video clips in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="text-primary-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">System Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Android 14 or lower recommended</li>
              <li>• 2GB RAM minimum</li>
              <li>• 100MB free storage</li>
              <li>• Screen recorder with floating window</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Key className="text-primary-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Your License</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Join our Discord server</li>
              <li>• DM @wpokit to purchase</li>
              <li>• One-time payment of $3.99</li>
              <li>• Receive your permanent key</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Video className="text-primary-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Setup Recording</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Enable floating recorder window</li>
              <li>• Open video in fullscreen</li>
              <li>• Start recording without interruptions</li>
              <li>• Use built-in or third-party recorder</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-primary-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Start Clipping</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Open Speed Clipper</li>
              <li>• Enter your license key</li>
              <li>• Tap 'Resize Latest Video'</li>
              <li>• Long-press to trim before resizing</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-primary-900">Pro Tips</h3>
          <ul className="space-y-3 text-primary-800">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Use the Floating Resize Button for quick access to resizing tools</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>For Android 15 or custom OS users: Test your screen recorder to ensure it doesn't show confirmation popups</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Explore different modes like Editor Mode for viral 9:16 videos or Merge Clips for combining multiple videos</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Use Video Bulk Editor to process multiple clips with various enhancements in one go</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;