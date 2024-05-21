import React from 'react';
import { mobileBanner } from '../assets/Constants/Constant';
import './styles/mobileBanner.css';

function MobileBanner() {
    return (
        <div className='imageStyle'>
            {mobileBanner?.map(item => (
                <div className="innerImage" key={item.id}>
                    <img src={item.Image} alt="banner" />
                </div>
            ))}
        </div>
    );
}

export default MobileBanner;
