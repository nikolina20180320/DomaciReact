import React from 'react'

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
            <Item name='Min' value={weatherData.temp2m.min} />
            <Item name='Max' value={weatherData.temp2m.max} />
            <Item name='Weather' value={weatherData.weather} />
            <Item name='Wind' value={weatherData.wind10m_max + 'm'} />
        </div>
    )
}

function Item({ name, value }) {
    return (
        <div className='mt-3 d-flex flex-wrap align-items-center justify-content-between'>
            <div>
                <strong>{name}</strong>
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}
