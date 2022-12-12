import { useState, useEffect } from "react";
import "../style/App.css";
import ForecastDetails from "./ForecastDetails";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";
import getForecast from "../Requests/GetForecast";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  const selectedForecast = forecasts.find(
    (forecast) => forecast.dt === selectedDate
  );

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={location.name} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && (
        <ForecastDetails selectedForecast={selectedForecast} />
      )}
    </div>
  );
}

export default App;
