import Forecast from './Forecast';
import SearchCity from './SearchCity';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="app">
      <SearchCity setData={setData} />
      {data &&
        data.weather.map((day) => (
          <div key={day.date}>
            <Forecast key={day.date} day={day} />
          </div>
        ))}
    </div>
  );
}

export default App;
