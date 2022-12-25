

import React, { useState } from 'react';
import Input from './Input';

export default function WeatherForm({ onSubmit }) {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    return (
        <div className='mt-4'>
            <form onSubmit={e => {
                e.preventDefault();
                onSubmit({ lat, lng });
            }}>
                <Input label='Latitude' value={lat} onChange={setLat} type='number' />
                <Input label='Longitude' value={lng} onChange={setLng} type='number' />
                <button type='submit' className='btn btn-primary form-control'>Search</button>
            </form>
        </div>
    )
}


