import React from 'react'
import './styles.css';

const Card = data => {
    const cardData = data.data;
    return (
        <a target='blank' href={cardData.url} className="card">
            <div className="card-image-div">
                <img className="card-image" loading='lazy' src={cardData.image_url} alt={cardData.title}/>
            </div>
            <div className="card-title">
                <span > {cardData.title} </span>
            </div>
        </a>
    )
}


export default Card;