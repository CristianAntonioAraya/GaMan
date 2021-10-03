import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetUpComingAnime } from '../../sevices/GetData'

const SlideShow = () => {

    const [upComingAnime, setUpComingAnime] = useState(null)
    const slide = useRef(null)
    
    const handleNext = () => {
        //Get the first element 
        const firstElement = slide.current.children[0];
        //Set animation transition to each img
        slide.current.style.transition = `all 0.5s ease-out`
        //Get img width size
        const SizeSlide = slide.current.children[0].offsetWidth;
        //Move img to next
        slide.current.style.transform = `translateX(-${SizeSlide}px)`;
        setTimeout(() => {
            slide.current.appendChild(firstElement);
            slide.current.style.transition = `none`;
            slide.current.style.transform = `translateX(0)`;
        }, 500);
        
    }
    const handlePrev = () => {
        const index = slide.current.children.length - 1;
        const lastElement = slide.current.children[index];
        slide.current.insertBefore(lastElement, slide.current.firstChild);
        slide.current.style.transition = `none`
        const SizeSlide = slide.current.children[0].offsetWidth;
        slide.current.style.transform = `translateX(-${SizeSlide}px)`
        setTimeout(() => {
            slide.current.style.transition = `0.5s all ease-out`
            slide.current.style.transform = `translateX(0)`;
        }, 500);

    }
    useEffect(() => {
        const HandleGetData = async() => {
            const data = await GetUpComingAnime()
            const array = []
            for (let index = 0; index < 6; index++) {
                array.push(data[index])
            }
            setUpComingAnime(array)
        }
        HandleGetData();
    }, [])
    
    console.log(upComingAnime)

    if(upComingAnime === null){
        return(
            <div>
                loading
            </div>
        )
    }
        
    return(
        <div className="slideshow__container">
            <div className="slideshow__content" ref={slide}>

                <div className="slideshow__slide">
                    <Link to={`/anime/${upComingAnime[0].mal_id}`}>
                        <img  className="slideshow__img"  src={upComingAnime[0].image_url}alt="" />
                    </Link >
                    <div className="slideshow__info">
                        <p className="slideshow__title">{upComingAnime[0].title}</p>
                        <p className="slideshow__date">{upComingAnime[0].start_date}</p>
                    </div>
                </div>
                
                <div className="slideshow__slide">
                    <Link to={`/anime/${upComingAnime[1].mal_id}`}>
                        <img  className="slideshow__img" src={upComingAnime[1].image_url}alt="" />
                    </Link>
                    <div className="slideshow__info">
                        <p className="slideshow__title">{upComingAnime[1].title}</p>
                        <p className="slideshow__date">{upComingAnime[1].start_date}</p>
                    </div>
                </div>

                <div className="slideshow__slide">
                    <Link to={`/anime/${upComingAnime[2].mal_id}`}>
                        <img  className="slideshow__img" src={upComingAnime[2].image_url}alt="" />
                    </Link>
                    <div className="slideshow__info">
                        <p className="slideshow__title">{upComingAnime[2].title}</p>
                        <p className="slideshow__date">{upComingAnime[2].start_date}</p>
                    </div>
                </div>

                <div className="slideshow__slide">
                    <Link to={`/anime/${upComingAnime[3].mal_id}`}>
                        <img  className="slideshow__img" src={upComingAnime[3].image_url}alt="" />
                    </Link>
                    <div className="slideshow__info">
                        <p className="slideshow__title">{upComingAnime[3].title}</p>
                        <p className="slideshow__date">{upComingAnime[3].start_date}</p>
                    </div>
                </div>

                <div className="slideshow__slide">
                    <Link to={`/anime/${upComingAnime[4].mal_id}`}>
                        <img  className="slideshow__img" src={upComingAnime[4].image_url}alt="" />
                    </Link>
                    <div className="slideshow__info">
                        <p className="slideshow__title">{upComingAnime[4].title}</p>
                        <p className="slideshow__date">{upComingAnime[4].start_date}</p>
                    </div>
                </div>

               

            </div>
            <i onClick={handlePrev} className="fas fa-arrow-left slideshow__icon"></i>
            <i onClick={handleNext} className="fas fa-arrow-right slideshow__icon"></i>
        </div>
    )
}

export default SlideShow
