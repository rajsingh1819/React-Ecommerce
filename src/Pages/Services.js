import React from 'react'
import { services } from '../assets/Constants/Constant'
import "./style/service.css"

function Services() {
    return (
        <div className='serviceStyle' >
            {
                services?.map(item => (
                    <div className='inner-Style' key={item.id}>
                        {item.icon}
                        <div className='inner-text'>
                            <h5>{item.title}</h5>
                            <h6>{item.desc}</h6>
                        </div>
                    </div>

                ))
            }

        </div>
    )
}

export default Services