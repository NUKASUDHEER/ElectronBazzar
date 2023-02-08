import React from "react";
import '../styles/FilterExtra.css'

const Brand = () => {
  return (
    <div className="brand">
      <details id="details" open>
        <summary> brand</summary>
        <input type="checkbox" id="lg" name="lg"></input>
        <label for="lg">Lg</label>
        <br></br>
        <input type="checkbox" id="Sony" name="Sony"></input>
        <label for="Sony">Sony</label>
        <br></br>
        <input type="checkbox" id="Vu" name="Vu"></input>
        <label for="Vu">Vu</label>
        <br></br>
        <input type="checkbox" id="mi" name="mi"></input>
        <label for="mi">Mi</label>
        <br></br>
        <input type="checkbox" id="samsung" name="samsung"></input>
        <label for="samsung">Samsung</label>
        <br></br>
        <input type="checkbox" id="oneplus" name="oneplus"></input>
        <label for="oneplus">OnePlus</label>
      </details>
      <div className="reset"></div>
      <div className="border-line"></div>
    </div>
  );
};

export default Brand;
