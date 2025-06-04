import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-16">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 dark:text-dark-text leading-tight">
              Make Clipping <span className="text-primary-600 dark:text-dark-primary">Faster & Easier</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Speed Clipper helps you resize videos to 16:9, trim content, and enhance your videos with our powerful editor. Now with Material 3 UI and exciting new features!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary-600 dark:bg-dark-primary text-white font-medium rounded-full hover:bg-primary-700 dark:hover:opacity-90 transition-colors shadow-lg hover:shadow-xl text-lg"
              >
                Download Now
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white dark:bg-dark-surface text-primary-700 dark:text-dark-primary font-medium rounded-full border border-primary-200 dark:border-dark-border hover:bg-primary-50 dark:hover:bg-dark-border transition-colors shadow-md hover:shadow-lg text-lg"
              >
                Explore Features
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in animation-delay-300">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
  <img 
    src="/images/hero.jpg" 
    alt="Speed Clipper App Interface" 
    className="w-full h-auto"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
    <div className="absolute bottom-4 left-4 right-4">
      <p className="text-white font-medium text-lg">Version 1.1 Now Available!</p>
    </div>
  </div>
</div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-accent-500 rounded-xl transform rotate-3"></div>
          </div>
        </div>
        <div className="text-center mt-20">
          <button
            onClick={scrollToFeatures}
            className="inline-flex items-center justify-center p-3 bg-white dark:bg-dark-surface rounded-full shadow-md hover:shadow-lg transition-all animate-pulse-slow"
            aria-label="Scroll to features"
          >
            <ChevronDown size={24} className="text-primary-600 dark:text-dark-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;