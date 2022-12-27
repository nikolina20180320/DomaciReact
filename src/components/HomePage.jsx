import React from 'react'
import cities from '../cities.json'
import Navbar from '../components/Navbar';
import CityCard from './CityCard';

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className='container mt-5'>
                <h1 className='text-center'>Weather overview</h1>
                <div className='mt-5  d-flex flex-wrap align-items-center justify-content-between'>
                    {
                        cities.cities.map(city => {
                            return (
                                <CityCard city={city} key={city.name} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
