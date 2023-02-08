import React from "react";
import "../styles/Filter.css";
import Catogory from "./Category";
import Brand from "./Brand";
import Price from "./Price";
import Rating from "./Rating";
import Availability from "./Availability";
import "../styles/Filter.css";

const Filter = (props) => {
  const onChangePriceHandler = (price) => props.onPrice(price);
  const onChangeCategoryHandler = (category) => props.onCategory(category);
  const onChangeRatingHandler = (rating) => props.onRating(rating);

  return (
    <div className="filters">
      <div className="reset12">
        <h4 className="heading-name">Filters</h4>
        <div className="clearall">
          <p className="clearbutton">Clear All</p>
        </div>
      </div>
      <div className="border-line"></div>
      <Catogory onCateogrySetHandler={onChangeCategoryHandler} />
      <Brand />
      <Price onpriceSetHandler={onChangePriceHandler} />
      <Rating onRatingSetHandler={onChangeRatingHandler } />
      <Availability />
    </div>
  );
};

export default Filter;
