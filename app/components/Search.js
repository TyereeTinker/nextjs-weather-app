'use client'
import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { BsSearch } from "react-icons/bs"

import Weather from './Weather'

function Search() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHERAPP_KEY}`

  const fetchWeather = (e) =>{
    e.preventDefault()
    axios.get(url).then((response) =>{
      setWeather(response.data)
    } )
  }
   
  return (
    <div>
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 z-10">
          <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-black rounded-2xl">
            <div>
              <input 
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-black focus:outline-none text-2xl" 
                type="text" 
                placeholder="SEARCH CITY"
              />
            </div>
            <button type="submit"> <BsSearch size={25} color='gray'/> </button>
          </form>
      </div>

      {/* Weather Display */}
      {weather.main && <Weather data={weather}/>}
    </div>
  )
}

export default Search