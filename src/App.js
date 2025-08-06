import { useEffect, useState } from 'react';
import './App.css';
import { IoSearch, IoSunny, IoMoon } from "react-icons/io5";
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
    setCity(input.trim());
    setInput("");
  }
  
  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      handleClick();
    }
  }

  const handleToggle = () => {
    setDark(!dark);
  }

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="weather-cont">
        <h2>Weather App</h2>
        <div className="search">
          <input type="text" placeholder="Enter city" value ={input} onChange={handleInput} onKeyDown={handleKeyDown}/>
          <IoSearch className="search-icon"/>
        </div>
        <button type="button" onClick={handleClick} className="search-btn">Search</button>
        <CurrentWeather weather={weather}></CurrentWeather>
        <ForecastWeather forecast={forecast}></ForecastWeather>
      </div>
      <div className="toggle-btn-wrapper">
        <button className={`toggle-btn ${dark ? "active" : ""}`} onClick={handleToggle}>
          <IoSunny className="sun" />
          <div className="thumb"></div>
          <IoMoon className="moon" />
        </button>
      </div>
    </div>
  );
}

export default App;
