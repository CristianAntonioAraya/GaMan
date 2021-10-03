
import React from 'react'
import { Link } from 'react-router-dom'
const AnimeCard = ( { episode , image , rank , title , type, id } ) => {
   
    return (
        <Link to={`/anime/${id}`} className="animecard__container">
            <img className="animecard__img" src={image} alt="" />
            <div className="animecard__info">
                <p className="animecard__title">{title}</p>
                <p className="animecard__btn">See more</p>
            </div>
        </Link >
    )
}

export default AnimeCard
