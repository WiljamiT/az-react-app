import React from 'react';
import { useFetch } from '../hooks/useFetch';

const WeatherDisplay = () => {
  const apiUrl = process.env.REACT_APP_URL + "/WeatherForecast";
  
  const { loading, data, error } = useFetch(apiUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  console.log("Data from AZ", data)

  return (
    <div>
      <h2>Weather Forecast</h2>
      <ul>
        {data.map((forecast) => (
          <li key={forecast.date}>
            Date: {forecast.date}, Temperature: {forecast.temperatureC}°C, Summary: {forecast.summary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDisplay;
