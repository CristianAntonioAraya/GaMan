import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeCard from '../../components/animecard/AnimeCard';
import Filters from '../../components/filters/Filters';
import Label from '../../components/label/Label';
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

    console.log(searchResults)

    if(searchResults === null){
        return(
            <div>Loading</div>
        )
    }
    else{
    return (
        <div className="searchpage__container">
            <Filters/>
            <div className="searchpage__content">
                <Label text={`Results for: ${search}`}/>
                <div className="searchpage__results">
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
            
        </div>
        )
    }
}

export default SearchPage
