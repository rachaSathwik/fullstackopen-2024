import { useState,useEffect } from "react";
import axios from "axios";
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_KEY;

const Weather = ({state}) => {
    const [weather,setWeather] = useState(null);
    useEffect(() => {
        axios
            .get(`${baseUrl}?q=${state}&&appid=${apiKey}`)
            .then(response => {
                console.log(response);
                setWeather(response.data);
            })
            .catch(e => console.log(e));
    },[])
    if(!weather)return;
    return(
            <div key = {weather.id}>
                <h3>Weather in {state}</h3>
                <p>temperature - {Math.round((Number(weather.main.temp)-273.15)*100)/100} Celsius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt = {weather.weather[0].description}/>
                <p>wind - {weather.wind.speed} m/s</p>
            </div>
    )
}
export default Weather;
