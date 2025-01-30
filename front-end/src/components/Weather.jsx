import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Paris");

  const fetchWeather = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/weather?city=${city}`
      );
      // console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const handleSearch = (e) => {
    e.preventDefault();
    const newCity = e.target.elements.city.value;
    setCity(newCity);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Weather Dashboard</h1>
      <form onSubmit={handleSearch} className="mb-4 flex justify-center">
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          className="p-2 border rounded w-2/3"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
      {weather && weather.name && weather.weather && weather.main ? (
        <div className="text-center">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      ) : (
        <p className="text-center">No weather data available</p>
      )}
    </div>
  );
};

export default Weather;
