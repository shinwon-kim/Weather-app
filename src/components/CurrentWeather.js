function CurrentWeather({weather}){
    if (!weather) return null; 
    console.log("🟣",weather);
    return(
        <div className="weather-info">
            <p className="weather-city">{weather.name}</p> 
            <h3 className="weather-temp">{Math.round(weather.main.temp - 273.15)}°C</h3> 
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main}></img>
            <p className="weather-detail">{weather.weather[0].description}</p>
            {/* <p>{new Date(weather.dt * 1000).toLocaleString().slice(0,8)}</p> */}
        </div>
    )

}

export default CurrentWeather;