import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem';
import classes from '../styles/Product.module.css'

function RecomendedProducts() {
    return (
        <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
            <div className={`${classes['row']} ${classes["slide-1"]}`}>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </div>
            <div className={`${classes['row']} ${classes["slide-2"]}`}>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </div>
        </Carousel>
    )
}

export default RecomendedProducts