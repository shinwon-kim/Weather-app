import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCurrentWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
}


export const fetchForcastWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
}
