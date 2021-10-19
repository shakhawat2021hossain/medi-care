import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('servicedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div id='services' className='container my-5'>
            <h1 className='text-center'>Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                    service={service}
                    key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;