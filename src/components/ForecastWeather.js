function ForecastWeather({forecast}){
  if(!forecast) return null;
  console.log("🟢",forecast);
  const preview10 = forecast.list.slice(2,12);
  return(
    <div className="forecast-cont">
      {/* <p>{forecast.list[0].weather[0].main}</p>  */}
      {preview10.map((item, index) => {
        const weatherIcon = item.weather[0].icon;
        const date = item.dt_txt.slice(10,-3);
        const weatherTemp = Math.round(item.main.temp-273.15);
        return(
            <div key={index} className="forecast-item"> 
                <p>{date}</p>
                <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={""}></img>
                <p>{weatherTemp}°C</p>
            </div>

        )
      })}
    </div>
  )
}

export default ForecastWeather;