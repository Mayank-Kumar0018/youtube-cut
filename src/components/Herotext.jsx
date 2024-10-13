import React, { useState, useEffect } from 'react';

const Herotext = () => {
  const words = ["Fast", "Efficient", "Creative", "Modern"];
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Speed of typing
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    let typingTimeout;
    
    const currentWord = words[currentWordIndex];

    if (!isDeleting && text !== currentWord) {
      typingTimeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1)); // Typing forward
      }, speed);
    } else if (isDeleting && text !== '') {
      typingTimeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1)); // Deleting
      }, speed);
    } else if (text === currentWord && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000); // Pause before starting deletion
    } else if (text === '' && isDeleting) {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, currentWordIndex, speed, words]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='flex justify-center h-52 mt-20'>
    <div className="text-black text-5xl font-bold text-center">
      The <span className='text-red-600'>{text}</span>
      <span className={`text-red-500 ${showCursor ? 'inline-block' : 'hidden'}`}>|</span> way to do YouTube videos
    </div>
    </div>
  );
};

export default Herotext;
