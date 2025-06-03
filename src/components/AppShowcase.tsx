import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AppShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const screenshots = [
    {
      image: "/images/material3.jpg",
      title: "Material 3 UI",
      description: "A modern, clean interface with Google's latest design system."
    },
    {
      image: "/images/editing.jpg",
      title: "Advanced Editing Tools",
      description: "Powerful tools for perfect video content creation."
    },
    {
      image: "/images/customize.jpg",
      title: "Customizable Experience",
      description: "Tailor the app to your workflow with personalized settings."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-primary-100 dark:text-dark-primary max-w-2xl mx-auto">
            Experience the sleek interface and powerful features of Speed Clipper
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 pb-[177.78%] bg-black">
            <div className="absolute inset-0 flex transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img 
                    src={screenshot.image} 
                    alt={`Speed Clipper - ${screenshot.title}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">{screenshot.title}</h3>
                    <p className="text-lg text-gray-200">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-10"
              onClick={prevSlide}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors z-10"
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;