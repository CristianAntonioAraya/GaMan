import React, { useEffect, useState } from 'react'
import { GetEpisodes } from '../../sevices/GetData'

const AnimeEpisode = ({ animeId }) => {
  const [episodes, setEpisodes] = useState(null)

  useEffect(() => {
    const HandleGetEpisodes = async () => {
      const data = await GetEpisodes({ animeId })
      setEpisodes(data)
    }
    HandleGetEpisodes()
  }, [animeId])

  return (
        <div className="animeepisode__container">
            <div className="animeepisode__content">
                <p>hola</p>
            </div>
        </div>
  )
}

export default AnimeEpisode
