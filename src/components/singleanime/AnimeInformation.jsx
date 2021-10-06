import React from 'react'
import Label from '../label/Label'


const AnimeInformation = ({status,episodes,type,genres,producers,rank,rating,studio,release,}) => {
    return (
        <div className="animeinfo__container">
            <Label text={"information"}/>
            <div className="animeinfo__content">
                <div>
                    {/* <p>Status={status}</p>
                    <p>Episodes={episodes}</p>
                    <p>Type={type}</p>
                    <p>Genres={genres}</p>
                    <p>Producers={producers}</p>
                    <p>type={type}</p> */}
                </div>
                <div className="animeinfo__line-container">
                    <div className="animeinfo__line"/>
                </div>
                <div>
                    <p>infor</p>
                </div>

            </div>
        </div>
    )
}

export default AnimeInformation
