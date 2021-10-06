import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const SearchBar = () => {

    const history = useHistory()
    const [search, setSearch] = useState('')
    
    const handleOnSearch = (e) => {
        e.preventDefault();
        history.replace(`/search/anime/${search}`)
        setSearch('')
    }
    return (
        <div className="searchbar__container">
            <div className="searchbar__links">
                <p className="searchbar__link">Browse</p>
                <p className="searchbar__link">Mangas</p>
                <p className="searchbar__link">Top</p>
                <p className="searchbar__link">Forum</p>
            </div>
            <div className="searchbar__input">
                <form onSubmit={handleOnSearch} className="searchbar__form">
                    <input type="text" className="searchbar__search" placeholder="Search..." onChange={e => setSearch(e.target.value)} value={search}/>
                    <button type='submit' className="searchbar__btn">
                        <i className="fas fa-search" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar
