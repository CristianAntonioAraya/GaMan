import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';


const Navbar = () => {

  const history = useHistory()
  const [search, setSearch] = useState('')
  
  const handleOnSearch = (e) => {
      e.preventDefault();
      history.push(`/search/anime/${search}`)
      setSearch('')
  }

  return (
        <div className="navbar__container">
            <Link to="/" className="navbar__title">GuMan</Link>
              <div className="navbar__input">
                  <form onSubmit={handleOnSearch} className="navbar__form">
                      <input type="text" className="navbar__search" placeholder="Search..." onChange={e => setSearch(e.target.value)} value={search}/>
                      <button type='submit' className="navbar__btn">
                          <i className="fas fa-search" />
                      </button>
                  </form>
              </div>
              <p className="navbar__footer">logout</p>
            </div>
  )
}

export default Navbar
