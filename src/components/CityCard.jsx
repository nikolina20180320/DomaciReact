
import React from 'react'
import { useGet } from '../hooks/useGet'
import InfoItem from './InfoItem'

export default function CityCard({ city }) {
    const { data, loading } = useGet('http://www.7timer.info/bin/api.pl', {
        lat: city.lat,
        lon: city.lng,
        product: 'civillight',
        output: 'json'
    })
    const weatherData = data?.dataseries[0];
    return (
        <div className='border p-3 rounded'>
            {
                (loading || !weatherData) ? (
                    <div className='d-flex justify-content-center '>
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3 className='text-center'>{city.name}</h3>
                        <InfoItem name='Min' value={weatherData.temp2m.min} />
                        <InfoItem name='Max' value={weatherData.temp2m.max} />
                        <InfoItem name='Weather' value={weatherData.weather} />
                        <InfoItem name='Wind' value={weatherData.wind10m_max + 'm'} />
                    </>

                )
            }
        </div>
    )
}
