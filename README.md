# Ex04 Simple Calculator - React Project

# Date:26-11-2026
# Name :Jegan P
# Reg No :212225240061

# AIM
To develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

# ALGORITHM
STEP 1
Create a React App.

STEP 2
Open a terminal and run:

npx create-react-app simple-calculator
cd simple-calculator
npm start
STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

STEP 5
Create a new file Calculator.css in src/ and add the styling.

STEP 6
Open src/App.js and modify it.

STEP 7
Start the development server. npm start

STEP 8
Open http://localhost:3000/ in the browser.

STEP 9
Test the calculator by entering numbers and operations.

STEP 10
Fix styling issues and refine content placement.

STEP 11
Deploy the website.

STEP 12
Upload to GitHub Pages for free hosting.

# PROGRAM

# ./components/calculator.jsx

```

import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      if (!/^[0-9+\-*/.() ]+$/.test(display)) {
        throw new Error("Invalid expression");
      }

      const result = Function(
        '"use strict"; return (' + display + ')'
      )();

      if (!Number.isFinite(result)) {
        throw new Error("Invalid result");
      }

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2>Calculator</h2>

        <input
          type="text"
          value={display}
          placeholder="0"
          readOnly
        />

        <div className="calculator-buttons">

          <button
            className="clear"
            onClick={clearDisplay}
          >
            C
          </button>

          <button
            className="delete"
            onClick={deleteLast}
          >
            ⌫
          </button>

          {buttons.map((btn) => (
            <button
              key={btn}
              className={btn === "=" ? "equal" : ""}
              onClick={() =>
                btn === "="
                  ? calculate()
                  : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Calculator;
```

# ./components/calculator.css

```

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.calculator-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    black,
    #43e379,
    #3b7ecb,
    black
  );
}

.calculator {
  width: 340px;
  padding: 25px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px #0005;
}

.calculator h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #243b55;
}

.calculator input {
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  padding: 10px;
  text-align: right;
  font-size: 25px;
  border: 2px solid #ddd;
  border-radius: 8px;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.calculator-buttons button {
  height: 55px;
  border: none;
  border-radius: 8px;
  background: #e5f0ef;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.calculator-buttons button:hover {
  background: #0b69dd;
}

.calculator-buttons .clear {
    grid-column: span 2;
    background: #e74c3c;
    color: white;
}

.calculator-buttons .delete {
  grid-column: span 2;
  background: #4606f694;
  color: white;
}

.calculator-buttons .equal {
  background: #2196f3;
  color: white;
}

.calculator-buttons .equal:hover {
  background: #176fc0;
}
```

# ./App.jsx

```

import React from "react";
import Calculator from "./components/calculator.jsx";

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
```

# main.jsx

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

# OUTPUT

![alt text](<Screenshot 2026-11-26 104254.png>)

# RESULT
The program for developing a simple calculator in React.js is executed successfully.

