import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Label from '../../components/label/Label';
import AnimeEpisode from '../../components/singleanime/AnimeEpisode';
import AnimeInformation from '../../components/singleanime/AnimeInformation';
import AnimeMenu from '../../components/singleanime/AnimeMenu';
import AnimeReviews from '../../components/singleanime/AnimeReviews';
import AnimeSynopsis from '../../components/singleanime/AnimeSynopsis';
import AnimeTrailer from '../../components/singleanime/AnimeTrailer';
import { GetSingleAnime } from '../../sevices/GetData';

const AnimePage = () => {

    const {animeId} = useParams();
    const [anime, setAnime] = useState(null)


    useEffect(() => {
        const GetData = async() => {
            const data = await GetSingleAnime({animeId})
            setAnime(data)
        }
        GetData()
    }, [animeId])

    if(anime === null ){
        return(
            <div>Loading</div>
        )
    }
    return (
        <div className="animepage__container">
            <div className="animepage__first">
                <img className="animepage__image" src={anime.image_url} alt={anime.title} />
                <div className="animepage__first-content">
                    <p className="animepage__title">{anime.title}</p>
                    <p className="animepage__subtitle">{anime.title_japanese}</p>
                    <div className="animepage__content">
                        <AnimeInformation
                            status={anime.status}
                            episodes={anime.episodes}
                            type={anime.type}
                            genres={anime.genres}
                            producers={anime.producers}
                            rank={anime.rank}
                            rating={anime.rating}
                            studio={anime.studio}
                            release={anime.aired.from}
                        />
                        <AnimeMenu/>
                    </div>
                </div>
            </div>
            <div className="animepage__labels">
                <Label text={'Trailer'}/>
                <Label className="pl-1" text={'Synopsis'}/>
            </div>
            <div className="animepage__second">
                <AnimeTrailer trailer={anime.trailer_url}/>
                <AnimeSynopsis synopsis={anime.synopsis}/>
            </div>
            <div>
                <Label text={'Episodes'}/>
                <AnimeEpisode animeId={anime.mal_id}/>
            </div>
            <div>
                <Label text={'Reviews'}/>
                <AnimeReviews animeId={anime.mal_id}/>
            </div>

        </div>
    )
}

export default AnimePage
