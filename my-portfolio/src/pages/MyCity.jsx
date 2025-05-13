import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';
import './MyCity.css';

function MyCity() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '2258e85ffaadd5a65b378bae99b20f1f'; 
  const city = 'Vasylkiv';
  const country = 'UA';

  useEffect(() => {
    fetchWeather(city, country, apiKey).then(data => {
      console.log('Отримані дані:', data);
      if (data) setWeatherData(data);
    });
  }, []);

  return (
    <div className="my-city-container">
      <img
        src="/images/vasylkiv.jpg" // Убедись, что у тебя есть этот файл
        alt="Васильків"
        className="city-image"
      />
      <h1>My town is - Vasylkiv</h1>
      <p>
        Vasylkiv is a picturesque town in the Kyiv region located on the banks of the Stugna River.
        The town has a deep history that dates back to the times of Kyivan Rus.
      </p>
      <p>
        Today, Vasylkiv is known for its ancient architecture, including the church of St Anthony and St Theodosius,
        as well as picturesque natural scenery. 
      </p>
      <p>
        The city attracts with its cosy atmosphere, historical flavour and hospitality.
      </p>

      {weatherData ? (
        <div className="weather-box">
          <h2>Weather RightNow:</h2>
          <div className="weather-info">
            <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
            <p><strong>Description:</strong> {weatherData.weather[0].description}</p>
            <p><strong>Coordinate:</strong> [{weatherData.coord.lat}, {weatherData.coord.lon}]</p>
           
          </div>

          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
        </div>
      ) : (
        <p>More Inf...</p>
      )}
    </div>
  );
}

export default MyCity;