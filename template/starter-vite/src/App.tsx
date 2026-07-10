import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="knds-p-400" style={{ maxWidth: '640px', margin: '40px auto' }}>
      <div className="knds-panel knds-grid-bg">
        <div className="knds-panel-header knds-flex-row knds-justify-between knds-items-center">
          <span className="knds-text-label-14-mono knds-text-red">VITE + REACT STARTER</span>
          <span className="knds-badge">KNDS Skeleton</span>
        </div>

        <h1 className="knds-text-heading-32 knds-mb-200">Hello, KNDS</h1>
        <p className="knds-text-copy-14 knds-text-muted knds-mb-300">
          This starter skeleton is pre-connected to KNDS styling. Click the tactile hardware bevel button below to test interactions.
        </p>

        <div className="knds-flex-row knds-gap-200 knds-items-center">
          <button 
            className="knds-btn-primary"
            onClick={() => setCount(c => c + 1)}
          >
            <span>Tactile Counter: {count}</span>
          </button>
          
          <button 
            className="knds-secondary-btn"
            onClick={() => setCount(0)}
          >
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
