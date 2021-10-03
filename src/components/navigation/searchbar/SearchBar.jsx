import React from 'react'

const SearchBar = () => {
    return (
        <div className="searchbar__container">
            <div className="searchbar__links">
                <p className="searchbar__link">Browse</p>
                <p className="searchbar__link">Mangas</p>
                <p className="searchbar__link">Top</p>
                <p className="searchbar__link">Forum</p>
            </div>
            <div className="searchbar__input">
                <input type="text" className="searchbar__search" placeholder="Search..."/>
                <i className="fas fa-search"/>
            </div>
        </div>
    )
}

export default SearchBar
