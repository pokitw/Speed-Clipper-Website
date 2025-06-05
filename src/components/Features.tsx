import React from 'react';
import { 
  FastForward,
  Scissors, 
  SlidersHorizontal, 
  Layers, 
  Settings, 
  Edit3, 
  Merge, 
  FolderPlus, 
  Sliders, 
  Zap, 
  Trash2 
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  priority?: boolean;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FastForward size={24} />,
      title: "Floating Resize Button",
      description: "Always-accessible floating overlay button for instant video resizing. No need to open the app - just tap the floating button to resize your latest video!",
      priority: true
    },
    {
      icon: <Edit3 size={24} />,
      title: "Editor Mode",
      description: "Create clean 9:16 videos with a centered layout, bold text, and a white background. Perfect for Instagram. No editing skills needed. Customize text style, color, position, and more in seconds.",
      priority: true
    },
    {
      icon: <Scissors size={24} />,
      title: "Instant 16:9 Resizing",
      description: "Automatically fetches and resizes your latest video to 16:9 with a single tap, saving it instantly without compression."
    },
    {
      icon: <Layers size={24} />,
      title: "Manual Resize Mode",
      description: "Full control over video selection and resizing with built-in photo and file picker."
    },
    {
      icon: <Merge size={24} />,
      title: "Merge Clips",
      description: "Combine multiple videos into a seamless 16:9 format with automatic resizing."
    },
    {
      icon: <FolderPlus size={24} />,
      title: "Batch Process Mode",
      description: "Process multiple videos simultaneously with various enhancements and automatic gallery saving."
    },
    {
      icon: <Settings size={24} />,
      title: "Material 3 UI",
      description: "Modern, intuitive interface following Google's latest Material 3 design system."
    },
    {
      icon: <SlidersHorizontal size={24} />,
      title: "Quick Settings",
      description: "Access essential features directly from your home screen with a long press."
    },
    {
      icon: <Sliders size={24} />,
      title: "Advanced Video Settings",
      description: "Fine-tune your video output with advanced controls and quality settings."
    },
    {
      icon: <Zap size={24} />,
      title: "Hardware Acceleration",
      description: "Optimized performance with hardware-accelerated video processing."
    },
    {
      icon: <Trash2 size={24} />,
      title: "Storage Management",
      description: "Efficiently manage storage by clearing videos created by Speed Clipper with one tap."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-dark-text mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Speed Clipper v1.1 brings you an array of powerful tools to make video editing faster and easier than ever.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`opacity-0 animate-slide-up ${feature.priority ? 'col-span-full lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div 
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 h-full ${
                  feature.priority 
                    ? 'bg-gradient-to-br from-primary-500 to-primary-700 dark:from-dark-primary dark:to-dark-hover text-white shadow-xl' 
                    : 'bg-white dark:bg-dark-surface shadow-md border border-gray-100 dark:border-dark-border'
                }`}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${
                  feature.priority 
                    ? 'bg-white/20 text-white' 
                    : 'bg-primary-100 dark:bg-dark-primary/20 text-primary-600 dark:text-dark-primary'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  feature.priority ? 'text-white' : 'text-gray-900 dark:text-dark-text'
                }`}>
                  {feature.title}
                </h3>
                <p className={feature.priority ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;