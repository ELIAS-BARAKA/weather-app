import moment from "moment";

function ForecastDetails({ selectedForecast }) {
  const wind = selectedForecast.wind;
  const date = selectedForecast.dt;
  const weather = selectedForecast.weather[0];
  const main = selectedForecast.main;

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
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
      {/* <div className="forecast-details__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={weather.icon} />
      </div> */}
      <div className="forecast-details__description">
        <label>Description:</label> {weather.description}
      </div>
      <div className="forecast-details__temperature">
        <div>
          <label> Max Temperature:&nbsp;</label>
          {main.temp_max}&deg;C
        </div>
        <div>
          <label> Min Temperature:&nbsp;</label>
          {main.temp_min}&deg;C
        </div>
      </div>

      <div className="forecast-details__humidity">
        <label>humidity:</label>&nbsp;
        <div>{main.humidity}%</div>
      </div>
      <div className="forecast-details__wind">
        <label>Wind: </label>&nbsp;
        <div>{wind.speed}mph</div>&nbsp;
        <div>{wind.deg}</div>
      </div>
    </div>
  );
}

export default ForecastDetails;
