import React, { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import CreatorStory from './components/CreatorStory';
import GetStarted from './components/GetStarted';
import Download from './components/Download';
import FAQ from './components/FAQ';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      
      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainLayout>
      <Hero />
      <Features />
      <AppShowcase />
      <CreatorStory />
      <GetStarted />
      <Download />
      <FAQ />
    </MainLayout>
  );
}

export default App;