import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThanksModal from './ThanksModal';

interface BuyMeCoffeeProps {
  className?: string;
}

const BuyMeCoffee: React.FC<BuyMeCoffeeProps> = ({ className }) => {
  const { theme } = useTheme();
  const [showThanks, setShowThanks] = useState(false);
  const [showAmounts, setShowAmounts] = useState(false);

  const amounts = [
    { usd: 1, inr: 85, label: 'Small Coffee' },
    { usd: 5, inr: 425, label: 'Large Coffee' },
    { usd: 10, inr: 850, label: 'Coffee & Snacks' },
    { usd: 25, inr: 2125, label: 'Coffee for the Team' },
    { usd: 100, inr: 8500, label: 'Coffee for a Month!' }
  ];

  const handlePayment = (amount: number) => {
    const options = {
      key: "rzp_live_HVZy0IyBKNeSHe",
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      name: "Support Speed Clipper",
      description: "Buy the developer a coffee",
      handler: function() {
        setShowThanks(true);
        setShowAmounts(false);
      },
      modal: {
        ondismiss: function() {
          console.log("Payment cancelled");
        }
      },
      theme: {
        color: theme === 'dark' ? '#00B8D4' : '#4f46e5'
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className={`${className || ''} text-center`}>
        <button
          onClick={() => setShowAmounts(!showAmounts)}
          className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${
            theme === 'dark'
              ? 'bg-dark-primary text-white hover:opacity-90'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          <Coffee className="mr-2" size={20} />
          Buy Me a Coffee
        </button>
        
        {showAmounts && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 animate-fade-in">
            {amounts.map((amount, index) => (
              <button
                key={index}
                onClick={() => handlePayment(amount.inr)}
                className={`p-4 rounded-lg transition-all transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-dark-surface hover:bg-dark-hover border border-dark-border'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="text-lg font-semibold mb-1">
                  ${amount.usd}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ₹{amount.inr}
                </div>
                <div className="text-sm mt-2 text-primary-600 dark:text-dark-primary">
                  {amount.label}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <ThanksModal
        isOpen={showThanks}
        onClose={() => setShowThanks(false)}
      />
    </>
  );
};

export default BuyMeCoffee;