
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
