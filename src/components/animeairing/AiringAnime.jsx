import React, { useEffect, useState } from 'react'
import { GetUpAiringAnime } from '../../sevices/GetData'

import AnimeCard from '../animecard/AnimeCard'
import Label from '../label/Label'


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
            <Label text={'Lives Anime'}/>
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
                            id={item.mal_id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AiringAnime
