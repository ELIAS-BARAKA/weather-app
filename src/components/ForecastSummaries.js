import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        return (
          <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            icon={forecast.icon}
            temperature={forecast.temperature}
            description={forecast.description}
            onSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

export default ForecastSummaries;
