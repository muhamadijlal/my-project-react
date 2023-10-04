import { useState } from "react";
import Weather from "./components/Weather";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [location, setLocation] = useState("");
  const { loading, displayLocation, weather, fetchWeather } = useWeather();

  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <div>
        <input
          type="text"
          placeholder="Search from location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button onClick={() => fetchWeather(location)}>Get Weather</button>

      {loading && <div className="loader">Loading...</div>}

      {weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}

export default App;
