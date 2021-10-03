import React from 'react'

const SingleNew = ({author, comments , date, intro, title , image}) => {
    return (
        <div className="singlenews__container">
            <div className="singlenews__content">
                <div>
                    <p className="singlenews__title">{title}</p>
                    <div className="singlenews__line"></div>
                    <p>Author:{author}</p>
                </div>
                <img className="singlenews__image" src={image} alt="" />
            </div>
        </div>
    )
}

export default SingleNew
