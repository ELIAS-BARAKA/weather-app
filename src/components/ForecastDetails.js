import WeatherIcon from "react-icons-weather";
import moment from "moment";

function ForecastDetails({ selectedForecast }) {
  const { date, icon, temperature, description, humidity, wind } =
    selectedForecast;

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-details__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-details__description">{description}</div>
      <div className="forecast-details__humidity">
        <div>humidity:</div>&nbsp;
        <div>{humidity}</div>
      </div>
      <div className="forecast-details__wind">
        <div>wind:</div>&nbsp;
        <div>{wind.speed}mph</div>&nbsp;
        <div>{wind.direction}</div>
      </div>
    </div>
  );
}

export default ForecastDetails;
