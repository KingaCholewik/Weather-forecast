import WeatherDetails from './WeatherDetails';
import WeatherImage from './WeatherImage';

const timeValue = {
  0: 'Night',
  600: 'Morning',
  1200: 'Noon',
  2100: 'Evening',
};

export default function WeatherCard({ datapoint }) {
  const {
    tempC,
    weatherDesc,
    windspeedKmph,
    precipInches,
    humidity,
    time,
    weatherCode,
  } = datapoint;

  return (
    <div className="card">
      <h3>{timeValue[time]}</h3>
      <div className="card-details">
        <WeatherImage code={weatherCode} />
        <WeatherDetails
          tempC={tempC}
          weatherDesc={weatherDesc}
          windspeedKmph={windspeedKmph}
          precipInches={precipInches}
          humidity={humidity}
        />
      </div>
    </div>
  );
}
