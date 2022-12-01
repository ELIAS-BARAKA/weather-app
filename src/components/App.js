import useState from "react";
import "../style/App.css";
import ForecastDetails from "./ForecastDetails";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

function App(props) {
  const { location, forecasts } = props;
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);

  const handleForecastSelect = (date) => {
    setSelectedDate(Date);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  console.log(selectedForecast);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails selectedForecast={selectedForecast} />
    </div>
  );
}

export default App;
