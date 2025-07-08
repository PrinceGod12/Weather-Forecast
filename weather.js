const fetchWeather = async (city) => {
  const API_KEY = 'YOUR_API_KEY';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};