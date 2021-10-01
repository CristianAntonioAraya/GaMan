import React from 'react'
import News from '../../components/news/News'
import Slider from '../../components/slider/Slider'

const HomePage = () => {
    return (
        <div className="home__container">
            <div className="home__slider-news">
                <Slider/>
                <News/>
            </div>
        </div>
    )
}

export default HomePage
