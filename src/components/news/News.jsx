import React, { useEffect, useState } from 'react'
import { GetNews } from '../../sevices/GetData'
import Label from '../label/Label'
import SingleNew from './SingleNew'

const News = () => {

    const [news, setNews] = useState(null)

    useEffect(() => {
        const handleGetNews = async() => {
            const data = await GetNews();
            setNews(data)
        }
        handleGetNews();
    }, [])

    if(news === null){
        return(
            <div> Loading </div>
        )
    }
    return (
        <div className="news__container">
            <Label text={'News'}/>
            {
                news.map((item,index)=>(
                    <SingleNew 
                        key={index}
                        author={item.author_name}
                        comments={item.comments}
                        date={item.date}
                        intro={item.intro}
                        title={item.title}
                        image={item.image_url}
                        />
                ))
            }
        </div>
    )
}

export default News
