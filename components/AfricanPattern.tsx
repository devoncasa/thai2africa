import React from 'react';

const AfricanPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-10 pattern-overlay ${className}`} aria-hidden="true" />
  );
};

export default AfricanPattern;