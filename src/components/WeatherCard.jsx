import React from 'react'
import InfoItem from './InfoItem';

export default function WeatherCard({ weatherData }) {
    const d = weatherData.date + '';
    const year = d.slice(0, 4);
    const month = d.slice(4, 6);
    const day = d.slice(6);
    return (
        <div className='border p-3 rounded'>
            <h3 className='text-center'>
                {`${day}.${month}.${year}`}
            </h3>
            <InfoItem name='Min' value={weatherData.temp2m.min} />
            <InfoItem name='Max' value={weatherData.temp2m.max} />
            <InfoItem name='Weather' value={weatherData.weather} />
            <InfoItem name='Wind' value={weatherData.wind10m_max + 'm'} />
        </div>
    )
}

