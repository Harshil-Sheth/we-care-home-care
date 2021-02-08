import React from 'react';
import './homepage.styles.scss'

const HomePage = () =>(
    <div className='homepage'>
        <div className='service-menu'>
            <div className='service-item'>
                <div className='content'>
                    <h1 className='title'>Service 1</h1> 
                    <span className='title'>Book Now</span> 
                </div>
            </div>
            <div className='service-item'>
                <div className='content'>
                    <h1 className='title'>Service 2</h1> 
                    <span className='title'>Book Now</span> 
                </div>
            </div>
            <div className='service-item'>
                <div className='content'>
                    <h1 className='title'>Service 3</h1> 
                    <span className='title'>Book Now</span> 
                </div>
            </div>
            <div className='service-item'>
                <div className='content'>
                    <h1 className='title'>Service 4</h1> 
                    <span className='title'>Book Now</span> 
                </div>
            </div>
            <div className='service-item'>
                <div className='content'>
                    <h1 className='title'>Service 5</h1> 
                    <span className='title'>Book Now</span> 
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;