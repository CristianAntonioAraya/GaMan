import React from 'react'
import ReactPlayer from 'react-player'

const AnimeTrailer = ({trailer}) => {

    if(trailer === null){
        return(
            <div className="animetrailer__no-trailer">No trailer :(</div>
        )
    }

    return (
        <div className="animetrailer__container">
            <div className="animetrailer__content">
                <ReactPlayer
                    url={trailer}
                    origin="http://localhost:3000"
                    />
            </div>
         </div>
    )
}

export default AnimeTrailer
