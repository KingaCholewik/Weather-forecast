import { useState } from 'react';
export default function SearchCity({ setData }) {
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://wttr.in/${city}?format=j1`)
      .then((result) => result.json())
      .then((data) => setData(data));
  };
  return (
    <div className="searchCity">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />{' '}
        <button>Enter a city</button>
      </form>
    </div>
  );
}
