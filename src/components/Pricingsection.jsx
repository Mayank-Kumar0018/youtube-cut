import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const PricingSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 }); // Slightly less distance for better smoothness
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start slightly below
            animate={controls}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }} // Smoother animation with ease
            className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 border-4 border-transparent before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-red-300 before:to-yellow-400 before:rounded-lg before:transition-all before:duration-500 before:opacity-0 hover:before:opacity-100"
          >
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">$9.99/month</p>
            <ul className="text-left">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                Unlimited access
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                5 Video edits/month
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                Basic support
              </li>
            </ul>
            <button className="mt-4 w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Select Plan
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start slightly above
            animate={controls}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }} // Smoother animation with ease
            className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 border-4 border-transparent before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-green-300 before:to-blue-500 before:rounded-lg before:transition-all before:duration-500 before:opacity-0 hover:before:opacity-100"
          >
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">$19.99/month</p>
            <ul className="text-left">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                Unlimited access
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                15 Video edits/month
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <button className="mt-4 w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Select Plan
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start slightly below
            animate={controls}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }} // Smoother animation with ease
            className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 border-4 border-transparent before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-purple-400 before:to-pink-600 before:rounded-lg before:transition-all before:duration-500 before:opacity-0 hover:before:opacity-100"
          >
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">$29.99/month</p>
            <ul className="text-left">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                Unlimited access
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                Unlimited Video edits
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
                </svg>
                24/7 support
              </li>
            </ul>
            <button className="mt-4 w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Select Plan
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
