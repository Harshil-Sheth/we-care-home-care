import React from 'react';
import './service-item.styles.scss';

const ServiceItem = ( {title, imageUrl, size} ) =>(
    <div className={`${size} service-item`}>
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1> 
        <span className='title'>Book Now</span> 
    </div>
</div>
)

export default ServiceItem;