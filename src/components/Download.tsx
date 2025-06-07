import React, { useState } from 'react';
import { ArrowRight, Key, Check, Download as DownloadIcon, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { collection, setDoc, doc, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase';
import PaymentSuccess from './PaymentSuccess';
import DownloadModal from './DownloadModal';
import TermsAcceptanceModal from './TermsAcceptanceModal';
import toast from 'react-hot-toast';

const Download: React.FC = () => {
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [accessKey, setAccessKey] = useState('');
  const [showPreviousReleases, setShowPreviousReleases] = useState(false);
  const [downloadingVersion, setDownloadingVersion] = useState<string | null>(null);

  const RAZORPAY_KEY = "rzp_live_HVZy0IyBKNeSHe";

  const previousReleases = [
    {
      version: "1.0",
      name: "Speed Clipper v1.0 (Initial Release)",
      description: "The original Speed Clipper with core video resizing functionality",
      downloadPath: "/speedclipper-v1.0.zip",
      releaseDate: "March 2024",
      features: [
        "Basic 16:9 video resizing",
        "Simple UI design",
        "Core video processing"
      ]
    }
  ];

  const generateAccessKey = () => {
    const chars = '0123456789ABCDEF';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const isKeyUnique = async (key: string) => {
    if (!db) return false;
    
    const keyDoc = doc(db, "access_keys", key);
    const keyQuery = query(collection(db, "access_keys"), where("__name__", "==", key));
    const querySnapshot = await getDocs(keyQuery);
    return querySnapshot.empty;
  };

  const generateUniqueKey = async () => {
    let key = generateAccessKey();
    let isUnique = await isKeyUnique(key);
    
    while (!isUnique) {
      key = generateAccessKey();
      isUnique = await isKeyUnique(key);
    }
    
    return key;
  };

  const handlePayment = () => {
    setShowTermsModal(true);
  };

  const initiatePayment = () => {
    setIsAnimating(true);
    const options = {
      key: RAZORPAY_KEY,
      amount: 34900,
      currency: "INR",
      name: "Speed Clipper",
      description: "App License Purchase",
      handler: async function(response: any) {
        try {
          const newAccessKey = await generateUniqueKey();
          
          if (db) {
            await setDoc(doc(db, "access_keys", newAccessKey), {
              createdAt: new Date().getTime(),
              isUsed: false,
              isValid: true,
              paymentId: response.razorpay_payment_id
            });
          }

          setAccessKey(newAccessKey);
          setShowPaymentSuccess(true);
          setIsAnimating(false);
        } catch (error) {
          toast.error("Error generating access key. Please contact support.");
          console.error('Payment processing error:', error);
          setIsAnimating(false);
        }
      },
      modal: {
        ondismiss: function() {
          toast.error("Payment was cancelled. Please try again.");
          setIsAnimating(false);
        }
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#1E1E1E",
        backdrop_color: "#121212",
        hide_topbar: true
      }
    };
    
    const rzp = new (window as any).Razorpay(options);
    rzp.on('payment.failed', function() {
      toast.error("Payment failed. Please try again.");
      setIsAnimating(false);
    });
    rzp.open();
  };

  const handleDownload = (version?: string, downloadPath?: string) => {
    const link = document.createElement('a');
    link.href = downloadPath || '/speedclipper.apk';
    
    if (version) {
      // For previous versions, use the appropriate file extension
      const fileName = downloadPath?.includes('.zip') ? `speedclipper-v${version}.zip` : `speedclipper-v${version}.apk`;
      link.download = fileName;
    } else {
      link.download = 'speedclipper.apk';
    }
    
    if (version) {
      setDownloadingVersion(version);
    } else {
      setIsDownloading(true);
    }
    
    setTimeout(() => {
      link.click();
      if (version) {
        setDownloadingVersion(null);
        setShowDownloadModal(true);
      } else {
        setIsDownloading(false);
        setShowDownloadModal(true);
      }
    }, 2500);
  };

  return (
    <section id="download" className="py-20 bg-white dark:bg-dark-surface reveal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12 lg:space-x-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 reveal-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-dark-text mb-6">
              Ready to Transform Your Video Editing?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get Speed Clipper v1.1 today for just ₹349 and experience faster, easier video editing with our powerful features and sleek Material 3 UI.
            </p>
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">What's new in v1.1:</h3>
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
                    <Check size={20} className="text-green-500 dark:text-dark-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handlePayment}
                className={`inline-flex items-center justify-center px-8 py-3 bg-primary-600 dark:bg-dark-primary text-white font-medium rounded-full hover:bg-primary-700 dark:hover:bg-dark-hover transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full transform hover:scale-105 ${isAnimating ? 'animate-pulse' : ''}`}
                disabled={isAnimating}
              >
                <Key size={24} className="mr-2" />
                Purchase License (₹349)
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button 
                onClick={() => handleDownload()}
                disabled={isDownloading}
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary-600 dark:bg-dark-secondary text-white font-medium rounded-full hover:bg-secondary-700 dark:hover:bg-dark-hover transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full transform hover:scale-105"
              >
                {isDownloading ? (
                  <div className="flex items-center">
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Preparing Download...
                  </div>
                ) : (
                  <>
                    <DownloadIcon size={24} className="mr-2" />
                    Download APK (v1.1)
                    <ArrowRight size={20} className="ml-2" />
                  </>
                )}
              </button>
            </div>

            {/* Previous Releases Section */}
            <div className="mt-8 border-t border-gray-200 dark:border-dark-border pt-8">
              <button
                onClick={() => setShowPreviousReleases(!showPreviousReleases)}
                className="flex items-center justify-between w-full text-left mb-4 hover:text-primary-600 dark:hover:text-dark-primary transition-colors"
              >
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-lg font-semibold text-gray-800 dark:text-dark-text">
                    Previous Releases
                  </span>
                </div>
                {showPreviousReleases ? (
                  <ChevronUp size={20} className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                )}
              </button>

              {showPreviousReleases && (
                <div className="space-y-4 animate-slide-down">
                  {previousReleases.map((release, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-dark-bg rounded-lg p-4 border border-gray-200 dark:border-dark-border"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                            {release.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Released: {release.releaseDate}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDownload(release.version, release.downloadPath)}
                          disabled={downloadingVersion === release.version}
                          className="inline-flex items-center px-4 py-2 bg-gray-600 dark:bg-dark-border text-white font-medium rounded-full hover:bg-gray-700 dark:hover:bg-dark-hover transition-colors mt-2 sm:mt-0"
                        >
                          {downloadingVersion === release.version ? (
                            <div className="flex items-center">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Downloading...
                            </div>
                          ) : (
                            <>
                              <DownloadIcon size={16} className="mr-2" />
                              Download v{release.version}
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {release.description}
                      </p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Features:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {release.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative reveal-right">
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
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-secondary-500 dark:bg-dark-secondary rounded-3xl transform rotate-6"></div>
            </div>
            
            <div className="mt-12 bg-gray-100 dark:bg-dark-surface rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-3">One-Time Purchase</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Key size={20} className="mr-2 text-primary-600 dark:text-dark-primary" />
                  Lifetime license key for just ₹349
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check size={20} className="mr-2 text-green-500 dark:text-dark-primary" />
                  No subscription required
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check size={20} className="mr-2 text-green-500 dark:text-dark-primary" />
                  All features included
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check size={20} className="mr-2 text-green-500 dark:text-dark-primary" />
                  Future updates included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PaymentSuccess 
        isOpen={showPaymentSuccess}
        onClose={() => setShowPaymentSuccess(false)}
        accessKey={accessKey}
      />

      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onPurchase={handlePayment}
      />

      <TermsAcceptanceModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={initiatePayment}
      />
    </section>
  );
};

export default Download;