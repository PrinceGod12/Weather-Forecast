import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      setError('');
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Search</button>

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temp: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;