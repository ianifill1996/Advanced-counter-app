import React, { useState, useEffect } from 'react';

const AdvancedCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [step, setStep] = useState(1);

  // Update history and localStorage when count changes
  useEffect(() => {
    setHistory((prevHistory) => [...prevHistory, count]);

    const saveTimeout = setTimeout(() => {
      localStorage.setItem('advanced-counter', JSON.stringify(count));
    }, 300); // simulate auto-save delay

    return () => clearTimeout(saveTimeout); // cleanup to prevent race condition
  }, [count]);

  // Handle keyboard input (ArrowUp = increment, ArrowDown = decrement)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setCount((prev) => prev + step);
      } else if (e.key === 'ArrowDown') {
        setCount((prev) => prev - step);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [step]);

  // Handler functions
  const handleIncrement = () => setCount((prev) => prev + step);
  const handleDecrement = () => setCount((prev) => prev - step);
  const handleReset = () => {
    setCount(0);
    setHistory([0]);
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
      <h1>Advanced Counter</h1>
      <h2>Count: {count}</h2>

      <div style={{ marginBottom: 16 }}>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{ marginLeft: 8, width: 60 }}
          />
        </label>
      </div>

      <div>
        <strong>History:</strong>
        <p>{history.join(', ')}</p>
      </div>
    </div>
  );
};

export default AdvancedCounter;