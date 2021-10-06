import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeCard from '../../components/animecard/AnimeCard';
import { GetSearch } from '../../sevices/GetData';

const SearchPage = () => {

    const {search} = useParams();
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
       const handleGetSearch = async() => {
            const data = await GetSearch({search});
            setSearchResults(data)
       }
       handleGetSearch();
    }, [search])

    if(searchResults === null){
        return(
            <div>Loading</div>
        )
    }
    else{
    return (
        <div className="searchpage__container">
            <div className="searchpage__content">
                {
                    searchResults.map(item => (
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
}

export default SearchPage
