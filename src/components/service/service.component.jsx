import React from 'react';
import './service.styles.scss';

import ServiceItem from '../service-item/service-item.component'

class Service extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Furnishing',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTdzvmYy9e5BCt1S3OyE9o287dDyHXA_lww&usqp=CAU',
                id: '1'
            },
            {
                title: 'Beautifying',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7639x3M_O1N5An2Y6CNEdWnwL6HLzUX2fzw&usqp=CAU',
                id: '2'
            },
            {
                title: 'Cleaning',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvnY15Nf4OM82CycatyuVX9zb8gqpNs3LAw&usqp=CAU',
                id: '3'
            },
            {
                title: 'Flooring',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPjyQEMrs6mtBfLbcWUCBfZR7V7Y-0UprzQ&usqp=CAU',
                id: '4',
                size: 'large'
            },
            {
                title: 'Painting',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ccIHqSWQdc6lSoW4bixXyAmdAbU_xw3YXg&usqp=CAU',
                id: '5',
                size: 'large'
            }]
        }
    }

    render(){
        return(
            <div className='service-menu'>
            {this.state.sections.map(({title, imageUrl, id, size}) => (
                <ServiceItem key={id} title={title} imageUrl={imageUrl} size={size}/> 
            ))}
        </div>
        )
    }
}
export default Service;