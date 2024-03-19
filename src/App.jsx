import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <>
      <div className="display">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClear} className="clear">C</button>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleCalculate} className="equals">=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="result">
        Result: {result}
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counter">
        <div className="card">
          <button onClick={handleDecrease}>Remove</button>
          <span style={{ padding: "10px 50px", backgroundColor: "#f1f1f1", margin: "0 10px" }}>{count}</span>
          <button onClick={handleIncrease}>Add</button>
        </div>
      </div>
    </>
  );
}

function App() {
  const [isCalculator, setIsCalculator] = useState(true);

  const handleSwitch = () => {
    setIsCalculator((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleSwitch}>{isCalculator ? "Use Counter" : "Use Calculator"}</button>
      {isCalculator ? <Calculator /> : <Counter />}
    </>
  );
}

export default App;
