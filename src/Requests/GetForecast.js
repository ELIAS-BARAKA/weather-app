import axios from "axios";

const getForecast = async (setSelectedDate, setForecasts, setLocation) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=5&appid=348675f08d49c1d80782618f67a09721&units=metric`;

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.list[0].dt);
    setForecasts(response.data.list);
    setLocation(response.data.city);
  });
};

export default getForecast;
