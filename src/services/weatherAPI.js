import axios from "axios";

const apiKey = "67f2f8213d44253b7f0c321ccb4ec971";

export const fetchCurrentWeather = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
}


export const fetchForcastWeather = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
}
