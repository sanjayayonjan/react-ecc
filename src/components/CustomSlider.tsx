"use client"; // This is a client component 👈🏽

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const CustomSlider = () => {


    return (
        <>
            <Carousel>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_960_720.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2023/09/02/03/15/water-8228076_1280.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </>
        
    );


}
