import React from 'react'

const Label = ({text}) => {

    if(text === 'Synopsis'){
        return(
            <div className="label__container pl-1">
                <p className="label__text ">{text}</p>
            </div>
        )
    }
    if(text === 'News'){
        return(
            <div className="label__container pl-1">
                <p className="label__text ">{text}</p>
            </div>
        )
    }
    else{
        return (
            <div className="label__container">
                <p className="label__text">{text}</p>
            </div>
        )
    }

}

export default Label
