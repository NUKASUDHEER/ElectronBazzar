import React from "react";
import classes from '../styles/Banner.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className={classes["banner-container"]}>
      <div className={classes["banner-heading"]}>REDMI NOTE 11T 5G</div>
      <div className={classes["banner-line"]}></div>

      <img src="/images/REdmi-note11.jpeg" alt="..."  className = {classes["banner-container-img"]} />
      <div className={classes["banner-offer"]}>
        <div className="para-1">
          Robust Performance With MediaTek Dimensity 810 5G | 5000mah Long
          Lasting Battery
        </div>
        <div className={classes["banner-deal"]}>
          <div className={classes["para-2"]}>
            {" "}
            Launch price: From{" "}
            <FontAwesomeIcon icon={faIndianRupeeSign} className={classes.black}   style={{fontSize: '0.8rem',margin: '0 auto',color: '#efefef'}} />{" "}
            15,999
          </div>
          <div className={classes["para-3"]}>Sale ends at 12am</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
