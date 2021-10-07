import React, { useEffect, useState } from 'react'
import { GetReviews } from '../../sevices/GetData'
import Label from '../label/Label'
import SingleReview from '../singlereview/SingleReview'

const AnimeReviews = ({animeId}) => {

    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        const handleGetNews = async() => {
            const data  = await GetReviews({animeId})
            setReviews(data)
        }
        handleGetNews();
    }, [animeId])

    if(reviews === null){
        return(
            <div>Loading</div>
        )
    }

    return (
        <div className="animereviews__container">
            <div className="animereviews__content">
                {
                    reviews.map(item=>(
                        <SingleReview key={item.mal_id} 
                            content={item.content}
                            reviewer={item.reviewer}
                            id={item.mal_id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AnimeReviews
