import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 animate-slide-down">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How does Speed Clipper's automatic video detection work?",
      answer: "Speed Clipper automatically detects and uses your most recently recorded or downloaded video when you tap the Resize button. There's no need to manually select a video - just tap and it instantly resizes to 16:9 format without any quality loss."
    },
    {
      question: "What is Editor Mode and how do I use it?",
      answer: "Editor Mode creates professional 9:16 videos with your clip centered on a white background and customizable text overlay. Simply enter your text, and the app automatically handles the layout. You can customize text style, size, color, position, video scaling, and background to match your style."
    },
    {
      question: "How does Manual Resize Mode differ from automatic resizing?",
      answer: "Manual Resize Mode gives you complete control over video selection using the built-in photo or file picker. This mode is perfect when you want to resize a specific video rather than using the latest one automatically."
    },
    {
      question: "Can I combine multiple videos into one?",
      answer: "Yes! The Merge Clips feature allows you to select multiple videos and combine them into a single seamless 16:9 video. All clips are automatically resized and merged in one process, saving you time and effort."
    },
    {
      question: "What is Batch Process Mode?",
      answer: "Batch Process Mode lets you enhance multiple videos simultaneously. You can resize, compress, enhance audio, and stabilize several clips at once. All processed videos are automatically saved to your gallery."
    },
    {
      question: "How do I access Quick Settings?",
      answer: "Long-press the Speed Clipper app icon on your home screen to access Quick Settings. This provides instant access to your most frequently used features without opening the full app."
    },
    {
      question: "Does Speed Clipper compress my videos?",
      answer: "No, Speed Clipper's default resize operation maintains the original video quality without any compression. However, if you want to reduce file size, you can use the optional compression features in Batch Process Mode."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about Speed Clipper
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <a 
            href="https://discord.gg/Dgqb5FvVuW" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;