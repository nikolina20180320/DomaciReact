import React, { useEffect, useState } from 'react'
import cities from '../cities.json'
import WeatherForm from './WeatherForm';
import { useGet } from '../hooks/useGet'
import WeatherCard from './WeatherCard';
export default function HomePage() {

    const [lat, setLat] = useState(cities.cities[0].lat);
    const [lng, setLng] = useState(cities.cities[0].lng);
    const [selectedCityName, setSelectedCityName] = useState(cities.cities[0].name);
    const selectedCity = cities.cities.find(e => e.name === selectedCityName);
    const { data, loading } = useGet('http://www.7timer.info/bin/api.pl', {
        lat,
        lon: lng,
        product: 'civillight',
        output: 'json'
    })

    useEffect(() => {
        setLat(selectedCity?.lat || 0);
        setLng(selectedCity?.lng || 0);
    }, [selectedCity])


    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Weather forecast</h1>
            <div className='form-group'>
                <label>Select city</label>
                <select value={selectedCityName} onChange={e => {
                    setSelectedCityName(e.currentTarget.value);
                }} className='form-control'>
                    {
                        cities.cities.map(city => {
                            return (
                                <option key={city.name} value={city.name}>{city.name}</option>
                            )
                        })
                    }
                    <option value="custom">Select custom location</option>
                </select>
            </div>
            {
                !selectedCity && (
                    <WeatherForm
                        onSubmit={val => {
                            setLat(val.lat);
                            setLng(val.lng);
                        }}
                    />
                )
            }

            {
                loading ? (
                    <div className='d-flex justify-content-center pt-5'>
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                ) : (
                    <div className='mt-5 p-2 d-flex flex-wrap align-items-center justify-content-between'>
                        {
                            data?.dataseries.map(element => {
                                return (
                                    <WeatherCard key={element.date} weatherData={element} />
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
