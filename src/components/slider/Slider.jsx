import React from 'react'
import Label from '../label/Label'
import SlideShow from './SlideShow'

const Slider = () => {

    return (
        <div className="slider__container">
            <Label text={'Up Coming Animes'}/>
            <div className="slider__content">
                <SlideShow/>
            </div>
        </div>
    )
}

export default Slider
