import React from "react";
import "../styles/FilterExtra.css";

const Catogory = (props) => {
  const onSubmitHandler = e => {
    const category = e.target.value
    props.onCateogrySetHandler(category)
  }
  return (
    <div className="category">
      <details id="details" open>
        <summary> category</summary>
        <form onSubmit={onSubmitHandler}>
          {" "}
          <input
            type="checkbox"
            id="laptop"
            name="laptop"
            value="Laptop"
            onClick={onSubmitHandler}
          ></input>
        </form>
        <label for="laptop">Laptops</label>
        <br></br>
        <input onClick={ onSubmitHandler}type="checkbox" id="mobile" name="Mobile" value = "Mobile"></input>
        <label for="mobile">Mobiles</label>
        <br></br>
        <input onClick={ onSubmitHandler}type="checkbox" id="watch" name="Watch" value="Watch"></input>
        <label for="watch">Smart Watches</label>
        <br></br>
        <input type="checkbox" id="tv" onClick={ onSubmitHandler} name="tv" value = "Tv"></input>
        <label for="tv">Smart TV's</label>
      </details>
      <div className="reset"></div>
      <div className="border-line"></div>
    </div>
  );
};

export default Catogory;
