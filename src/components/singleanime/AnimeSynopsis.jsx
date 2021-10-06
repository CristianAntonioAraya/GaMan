import React from 'react'

const AnimeSynopsis = ({synopsis}) => {
    return (
        <div className="animesynopsis__container">
            <div className="animesynopsis__content">
                <p className="animesynopsis__text">{synopsis}</p>
            </div>
        </div>
    )
}

export default AnimeSynopsis
