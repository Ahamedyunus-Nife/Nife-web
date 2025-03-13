import React, { useEffect } from 'react';
import '../style.css';

const GlowBackground = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${(e.clientX / window.innerWidth) * 100}%`;
      const y = `${(e.clientY / window.innerHeight) * 100}%`;
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="glow-background">
      <div className="glow-content">
        {children}
      </div>
    </div>
  );
};

export default GlowBackground;
