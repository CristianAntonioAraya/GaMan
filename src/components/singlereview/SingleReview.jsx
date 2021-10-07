import React from 'react'

const SingleReview = ({content, reviewer}) => {

    console.log(reviewer.scores)

    return (
        <div className="singlereview__container">
            <div className="singlereview__info">
                <p className="singlereview__name">By:{reviewer.username}</p>
                <p className="singlereview__score">
                    Score: {reviewer.scores.overall}/10
                </p>
            </div>
            <div className="singlereview__content">
            <p className="singlereview__text">
                {content}    
            </p>
            <button className="singlereview__btn">Click to see full review</button>
            </div>
        </div>
    )
}

export default SingleReview
