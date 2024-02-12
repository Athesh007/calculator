import { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    let answer = eval(inputValue);
    setInputValue(answer);
  };

  const clear = () => {
    setInputValue("");
  };

  return (
    <>
      <form name="calc" className="calculator">
        <input
          type="text"
          className="value"
          value={inputValue}
          placeholder="Calculator"
        />
        <span className="clear" onClick={() => clear()}>
          clear
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>00</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display(".")}>.</span>
        <span className="equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </>
  );
};

export default Calculator;
