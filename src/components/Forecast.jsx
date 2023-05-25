import WeatherCard from './WeatherCard';

const dayPartsBreakpoints = [0, 600, 1200, 2100];

export default function Forecast({ day }) {
  const dayParts = day.hourly.filter((hour) =>
    dayPartsBreakpoints.includes(parseInt(hour.time))
  );
  return (
    <div className="forecast">
      {day.date}
      <div className="timesOfDay">
        {dayParts.map((datapoint) => (
          <WeatherCard datapoint={datapoint} key={datapoint.time} />
        ))}
      </div>
    </div>
  );
}
