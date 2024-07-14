import React from 'react'

function Slider({ slider, index}) {
    console.log(index)
    return (
        
            <div className={`carousel-item carouselHeight ${index === 0 ? 'active' : ''}`} key={index} data-bs-interval="1000">
                <img className="w-100 h-100" src={slider.images.url} alt="1" />
                <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">{slider.title}</h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">Shop Now</button>
                </div>
            </div>
        
    )
}

export default Slider