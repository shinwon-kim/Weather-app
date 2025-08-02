import { useEffect, useState } from 'react';
import './App.css';
import { fetchCurrentWeather, fetchForcastWeather } from './services/weatherAPI';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';

function App() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(true);

  useEffect(()=>{
    const getWeatherData = async () =>{
      if (!city) return;
      
      try {
        const [currentData, forecastData] = await Promise.all([fetchCurrentWeather(city), fetchForcastWeather(city)]);
        setWeather(currentData);
        setForecast(forecastData);
      } catch(error) {
        console.error("⚠️Error fetching weather data:", error);
      }
    }

    getWeatherData();
  },[city]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    setCity(input);
    setInput("");

  }
  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      handleClick();
    }
  }

  const handleToggle = () => {
    setDark(!dark);
    console.log(dark);
  }

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="weather-cont">
        <h2>Weather App</h2>
        <input type="text" placeholder="Enter city" value ={input} onChange={handleInput} onKeyDown={handleKeyDown}/>
        <button onClick={handleClick} className="search-btn">Search</button>
        <CurrentWeather weather={weather}></CurrentWeather>
        <ForecastWeather forecast={forecast}></ForecastWeather>
      </div>
      <button className={`toggle-btn ${dark ? "active" : ""}`} onClick={handleToggle}>
        <div className="thumb"></div>
      </button>
    </div>
  );
}

export default App;
