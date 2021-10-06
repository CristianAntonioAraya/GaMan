import React, { useEffect, useState } from 'react'
import { GetUpAiringAnime } from '../../sevices/GetData'
import AnimeCard from '../animecard/AnimeCard'


const AiringAnime = () => {

    const [animes, setAnimes] = useState(null)

    useEffect(() => {
        const handleGetData = async() => {
           const data = await GetUpAiringAnime(); 
           setAnimes(data)
        }
        handleGetData();
    }, [])

    return (
        <div className="airing__container">
            <div className="airing__content">
                {
                    animes && 
                    animes.map(item=> (
                        <AnimeCard 
                            key={item.mal_id} 
                            episode={item.episode}
                            image={item.image_url} 
                            rank={item.rank} 
                            title={item.title} 
                            type={item.type}
                            id={item.mal_id}
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default AiringAnime
