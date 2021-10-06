import React from 'react'
import AiringAnime from '../../components/animeairing/AiringAnime'
import Label from '../../components/label/Label'
import News from '../../components/news/News'
import Slider from '../../components/slider/Slider'

const HomePage = () => {
    return (
        <div className="home__container">
            <div className="home__slider-news">
                <div>
                    <Label text={'Up Coming Animes'}/>
                    <Slider/>
                    <Label text={'In broadcast'}/>
                    <AiringAnime/>
                </div>
                <div>
                    <Label text={'News'}/>
                    <News/>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default HomePage
