const getCityWeather = async (city) => {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const query = `q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`

    const response = await fetch(`${baseUrl}${query}`);
    return await response.json();

}

export default getCityWeather;