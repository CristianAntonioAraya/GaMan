import React from 'react'
import AiringAnime from '../../components/animeairing/AiringAnime'
import News from '../../components/news/News'
import Slider from '../../components/slider/Slider'

const HomePage = () => {
    return (
        <div className="home__container">
            <div className="home__slider-news">
                <div>
                    <Slider/>
                    <AiringAnime/>
                </div>
                <News/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default HomePage
