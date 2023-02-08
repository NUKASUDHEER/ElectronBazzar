import React from 'react'
import classes from '../styles/Product.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import {faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

function IndividualReview({comment, stars, userName}) {

    const rating = {
        size: 20,
        count: 5,
        color: "grey",
        activeColor: "orange",
        value: stars,
        a11y: true,
        isHalf: true,
        emptyIcon: <FontAwesomeIcon icon={faStar} />,
        halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
        filledIcon: <FontAwesomeIcon icon={faStar} />,
    };
    
    return (
        <div className={classes["individual-review"]}>
            <div className={classes["individual-review-box"]}>
                <div className={`${classes['row']} ${classes["user-id-rating"]}`}>
                    <div className={`${classes['col-md-1']} ${classes["user-dp"]}`}>
                        <img src="/images/Dp-for-reviews.jpeg" alt="..." />
                    </div>
                    <div className={`${classes['col-3']} ${classes["user-name-review-time"]}`}>
                        <div className={classes["user-name"]}>
                            {userName}
                        </div>
                        <div className={classes["review-time"]}>
                            date time
                        </div>
                    </div>
                    <div className={`${classes['col-md-8']} ${classes["user-rating"]}`}>
                        <ReactStars {...rating} />
                    </div>
                </div>
                <div className={`${classes['row']} ${classes["user-images"]}`}>
                    <div className={classes["image"]}>
                        <img src="/images/realme Cobble Bluetooth.png" alt="" />
                    </div>

                    <div className={classes["image"]}>
                        <img src="/images/realme Cobble Bluetooth.png" alt="" />
                    </div>

                    <div className={classes["image"]}>
                        <img src="/images/realme Cobble Bluetooth.png" alt="" />
                    </div>

                    <div className={classes["image"]}>
                        <img src="/images/realme Cobble Bluetooth.png" alt="" />
                    </div>
                </div>
                <div className={`${classes['row']} ${classes["user-review"]}`}>
                    <div className={classes["user-review-txt"]}>
                       {comment}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualReview