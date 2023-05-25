export default function WeatherDetails({
  weatherDesc,
  tempC,
  windspeedKmph,
  precipInches,
  humidity,
}) {
  return (
    <ul>
      <li style={{ paddingBottom: '10px' }}>{weatherDesc[0].value}</li>
      <li>{tempC} °C</li>
      <li>{windspeedKmph} km/h</li>
      <li>{precipInches} mm</li>
      <li>{humidity} %</li>
    </ul>
  );
}
