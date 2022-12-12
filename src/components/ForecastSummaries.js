import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        return (
          <ForecastSummary
            key={forecast.dt}
            forecast={forecast}
            onSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

export default ForecastSummaries;
