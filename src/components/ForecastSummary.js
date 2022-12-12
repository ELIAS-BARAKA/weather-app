import moment from "moment";
import "../style/App.css";

const ForecastSummary = (props) => {
  const date = props.forecast.dt;
  const weather = props.forecast.weather[0];
  const main = props.forecast.main;
  const onSelect = props.onSelect;

  return (
    <div className="forecast-summery">
      <div className="forecast-summery__date">
        {moment(date).format("ddd Do MMM hh:mm")}
      </div>
      <div id="icon" className="forecast-summery__icon">
        {
          <img
            id="wicon"
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="weather icon"
          ></img>
        }
      </div>
      {/* <div className="forecast-summery__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={weather.icon} />
      </div> */}
      <div className="forecast-summery__temperature">{main.temp}&deg;C</div>
      <div className="forecast-summery__description">{weather.description}</div>
      <button
        type="button"
        onClick={() => {
          onSelect(date);
          console.log(date);
        }}
      >
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;
