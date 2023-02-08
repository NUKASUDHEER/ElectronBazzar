import React from "react";
import '../styles/FilterExtra.css'
const Price = (props) => {
  const onClick1Handler = e => {
    e.preventDefault();
    const val = e.target.value
    const lower = val.split(',')[0];
    const higher = val.split(',')[1]
    const price = [Number(lower), Number(higher)]
    props.onpriceSetHandler(price)
  }
  return (
    <div className="price">
      <details id="details" open>
        <summary> Price</summary>
        <input type="radio" id="1" name="1" value="2501,5000" onClick = {onClick1Handler}></input>
        <label for="1">₹2501-₹5000</label>
        <br></br>
        <input type="radio" id="2" name="1"></input>
        <label for="1">₹5001-₹10000</label>
        <br></br>
        <input type="radio" id="3" name="1" value="10000,20000" onClick = {onClick1Handler}></input>
        <label for="1">₹10001 - ₹20000</label>
        <br></br>
        <input type="radio" id="4" name="1" value="20000,30000" onClick = {onClick1Handler}></input>
        <label for="1">₹20001 - ₹30000</label>
        <br></br>
        <input type="radio" id="5" name="1"></input>
        <label for="1">₹30001 - ₹50000</label>
        <br></br>
        <input type="radio" id="6" name="1"></input>
        <label for="1">₹50001 - ₹*</label>
      </details>
      <div className="reset"></div>
      <div className="border-line"></div>
    </div>
  );
};

export default Price;
