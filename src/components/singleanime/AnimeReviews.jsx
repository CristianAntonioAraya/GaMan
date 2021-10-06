import React, { useEffect, useState } from 'react'
import { GetReviews } from '../../sevices/GetData'
import Label from '../label/Label'

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
            <Label text={"Reviews"}/>
            <div className="animereviews__content">
                {
                    reviews.map(item=>(
                        <div key={item.mal_id} >
                            <p>{item.content}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AnimeReviews
