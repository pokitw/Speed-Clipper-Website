import React from 'react';
import { Clock, Zap, Award } from 'lucide-react';

const CreatorStory: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Made by a Clipper, for Clippers
            </h2>
            <div className="space-y-6 text-lg text-primary-100 dark:text-gray-300">
              <p>
                Hey, I'm Pokit! As a content clipper for IShowSpeed and now for Steak, 
                I understand the challenges of mobile clipping firsthand. The frustration 
                of slow workflows and complicated tools led me to create Speed Clipper.
              </p>
              <p>
                What started as a personal solution transformed into a powerful tool that 
                revolutionized my clipping workflow. The addition of different modes and 
                the game-changing overlay button made mobile clipping faster than ever before.
              </p>
              <div className="mt-8">
                <img 
                  src="/images/pokit-logo.png" 
                  alt="Pokit's Logo" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white/10 dark:bg-dark-surface/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Speed Analysis</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Manual Resizing</h4>
                    <p className="text-primary-100 dark:text-gray-300">CapCut/Image Apps: ~20 seconds</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Speed Clipper</h4>
                    <p className="text-primary-100 dark:text-gray-300">Overlay Feature: &lt; 1 second</p>
                    <p className="text-sm text-primary-200 dark:text-gray-400 mt-1">*Processing speed depends on device hardware</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-2xl p-6 backdrop-blur-lg">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-accent-400" />
                <h3 className="text-2xl font-semibold">The Speed Clipper Advantage</h3>
              </div>
              <p className="text-lg text-primary-100 dark:text-gray-300">
                MOBILE CLIPPING HAS NEVER BEEN THIS FAST! What used to take 20+ seconds 
                now happens instantly with Speed Clipper's overlay feature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorStory;