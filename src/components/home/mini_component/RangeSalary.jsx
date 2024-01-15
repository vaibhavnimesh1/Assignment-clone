import React, { useState } from "react";
import "./style.css";
const RangeSalary = () => {
  const [rangeRes, setrangeRes] = useState(0);
  const updateHandler = (e) => {
    return setrangeRes(e.target.value);
  };
// console.log(title);
  return (
    <div className="range">
      <p>Salary</p>
      <input
        className="range-input"
        name="price"
        type="range"
        min={0}
        max={20000}
        value={rangeRes}
        onChange={updateHandler}
      />
      <div className="results">$0   ${rangeRes}</div>
    </div>
  );
};

export default RangeSalary;
