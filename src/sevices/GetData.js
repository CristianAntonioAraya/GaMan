import axios from "axios"

const API_URL  = "https://api.jikan.moe/v3"

export const GetUpAiringAnime = () => {
    try {
        return(
            axios.get(`${API_URL}/top/anime/1/airing`)
            .then( resp => {
                return resp.data.top
            })
        )
    } catch (error) {
        console.log(error)
    }
}
export const GetSingleAnime = ({animeId}) => {
    try {
        return(
            axios.get(`${API_URL}/anime/${animeId}`)
            .then(resp=>{
                return resp.data
            })
        )
    } catch (error) {
        console.log(error)
    }
}

export const GetUpComingAnime = () => {
    try {
        return(
            axios.get(`${API_URL}/top/anime/1/upcoming`)
            .then(resp=>{
                return resp.data.top
            })
        )
    } catch (error) {
        
    }
}

export const GetNews = () => {
    try {
        return(
            axios.get(`${API_URL}/anime/1/news`)
            .then(resp=>{
                return resp.data.articles
            })
        )
    } catch (error) {
        
    }
}
export const GetEpisodes = ({animeId}) => {
    try {
        return(
            axios.get(`${API_URL}/anime/${animeId}/episodes`)
            .then(resp=>{
                return resp.data.episodes
            })
        )
    } catch (error) {
        
    }
}
export const GetReviews = ({animeId}) => {
    try {
        return(
            axios.get(`${API_URL}/anime/${animeId}/reviews`)
            .then(resp=>{
                return resp.data.reviews 
            })
        )
    } catch (error) {
        
    }
}
export const GetSearch = ({search}) => {
    try {
        return(
            axios.get(`${API_URL}/search/anime?q=${search}`)
            .then(resp=>{
                return resp.data.results
            })
        )
    } catch (error) {
        
    }
}