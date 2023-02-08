import React from 'react'
import classes from '../styles/Product.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";


function CarouselItem() {
    return (
        <div className={`${classes["deal-1"]} ${classes['slide-col-3']}`}>
            <div className={classes["card"]}>
                <div className={classes["offer"]}><FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontSize: '0.8rem', margin: '0 auto', color: "black" }} />
                    500 Off
                </div>
                <img src="/images/realme Pad.png" className={classes["card-img-top"]} alt="..." />
                <div className={classes["card-body"]}>
                    <p className={classes["card-text"]}><strong>realme Pad</strong></p>
                    <p className={classes["card-text"]}>From,<FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontSize: '0.8rem', margin: '0 auto' }} />
                        13,999</p>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem