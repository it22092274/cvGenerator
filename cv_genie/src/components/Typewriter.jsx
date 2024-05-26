import React, { useState, useEffect } from 'react';
import '../styles/Typewriter.css';

function Typewriter({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <h1 className="typewriter">{displayedText}</h1>;
}

export default Typewriter;
