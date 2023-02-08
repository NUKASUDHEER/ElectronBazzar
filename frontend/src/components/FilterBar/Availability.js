import React from "react";
import '../styles/FilterExtra.css'

const Availability = () => {
  return (
    <div>
      <details id="details" open>
        <summary> Availability</summary>
        <input type="checkbox" id="A1" name="A1"></input>
        <label for="A1">Show in stock only</label>
        <br></br>
      </details>
      <div className="reset"></div>

      <div className="border-line"></div>
    </div>
  );
};

export default Availability;
