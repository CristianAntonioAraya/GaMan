import React from 'react'
import CenterLabel from '../label/CenterLabel'


const AnimeInformation = () => {
    return (
        <div className="animeinfo__container">
            <CenterLabel text={"information"}/>
            <div className="animeinfo__content">
                <div>
                    <p>information</p>
                </div>
                <div className="animeinfo__line-container">
                    <div className="animeinfo__line"/>
                </div>
                <div>
                    <p>infor</p>
                    <p>infor</p>
                    <p>infor</p>
                    <p>infor</p>
                    <p>infor</p>
                </div>

            </div>
        </div>
    )
}

export default AnimeInformation
