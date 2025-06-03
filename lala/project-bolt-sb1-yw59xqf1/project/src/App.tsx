import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import GetStarted from './components/GetStarted';
import Download from './components/Download';
import FAQ from './components/FAQ';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <AppShowcase />
      <GetStarted />
      <Download />
      <FAQ />
    </MainLayout>
  );
}

export default App;