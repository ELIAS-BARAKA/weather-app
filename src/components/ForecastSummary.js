import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../style/App.css";

const ForecastSummary = (props) => {
  const { date, icon, temperature, description, onSelect } = props;
  return (
    <div className="forecast-summery">
      <div className="forecast-summery__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summery__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summery__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summery__description">{description}</div>
      <button
        type="button"
        onClick={() => {
          onSelect(date);
        }}
      >
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;
