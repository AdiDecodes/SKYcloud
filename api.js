const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "435ec0b7bfmshbf41945eb7fd82cp173a04jsnd5c26f1cb59a",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

const getweather = (cityname) => {
  fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityname}&format=json&u=f`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var load = document.getElementById("loading");
      load.style.display = "none";
      if (response.message != "Internal Server Error") {
        let Data = response;
        console.log(Data);
        temp.innerHTML = tempconvert(
          Data.current_observation.condition.temperature
        );
        set_condition_icon(
          Data.current_observation.condition.text,
          "weather_icon"
        );
        visibility1.innerHTML = Data.current_observation.atmosphere.visibility;
        humidity.innerHTML = Data.current_observation.atmosphere.humidity;
        pressure.innerHTML = Data.current_observation.atmosphere.pressure;
        wind_speed.innerHTML = Data.current_observation.wind.speed;
        wind_direction.innerHTML = Data.current_observation.wind.direction;
        chill.innerHTML = Data.current_observation.wind.chill;
        condition_text.innerHTML = Data.current_observation.condition.text;
        wind_speed1.innerHTML = Data.current_observation.wind.speed;
        sunset.innerHTML = Data.current_observation.astronomy.sunset;
        sunrise.innerHTML = Data.current_observation.astronomy.sunrise;
        sstime.innerHTML = Data.current_observation.astronomy.sunrise;
        day1.innerHTML = Data.forecasts[1].day;
        min_temp1.innerHTML = tempconvert(Data.forecasts[1].low) + "°C";
        max_temp1.innerHTML = tempconvert(Data.forecasts[1].high) + "°C";
        condition_text1.innerHTML = Data.forecasts[1].text;
        set_condition_icon(Data.forecasts[1].text, "condition_icon1");
        day2.innerHTML = Data.forecasts[2].day;
        min_temp2.innerHTML = tempconvert(Data.forecasts[2].low) + "°C";
        max_temp2.innerHTML = tempconvert(Data.forecasts[2].high) + "°C";
        condition_text2.innerHTML = Data.forecasts[2].text;
        set_condition_icon(Data.forecasts[2].text, "condition_icon2");
        day3.innerHTML = Data.forecasts[3].day;
        min_temp3.innerHTML = tempconvert(Data.forecasts[3].low) + "°C";
        max_temp3.innerHTML = tempconvert(Data.forecasts[3].high) + "°C";
        condition_text3.innerHTML = Data.forecasts[3].text;
        set_condition_icon(Data.forecasts[3].text, "condition_icon3");
        day4.innerHTML = Data.forecasts[4].day;
        min_temp4.innerHTML = tempconvert(Data.forecasts[4].low) + "°C";
        max_temp4.innerHTML = tempconvert(Data.forecasts[4].high) + "°C";
        condition_text4.innerHTML = Data.forecasts[4].text;
        set_condition_icon(Data.forecasts[4].text, "condition_icon4");
        day5.innerHTML = Data.forecasts[5].day;
        min_temp5.innerHTML = tempconvert(Data.forecasts[5].low) + "°C";
        max_temp5.innerHTML = tempconvert(Data.forecasts[5].high) + "°C";
        condition_text5.innerHTML = Data.forecasts[5].text;
        set_condition_icon(Data.forecasts[5].text, "condition_icon5");
        day6.innerHTML = Data.forecasts[6].day;
        min_temp6.innerHTML = tempconvert(Data.forecasts[6].low) + "°C";
        max_temp6.innerHTML = tempconvert(Data.forecasts[6].high) + "°C";
        condition_text6.innerHTML = Data.forecasts[6].text;
        set_condition_icon(Data.forecasts[6].text, "condition_icon6");
        day7.innerHTML = Data.forecasts[7].day;
        min_temp7.innerHTML = tempconvert(Data.forecasts[7].low) + "°C";
        max_temp7.innerHTML = tempconvert(Data.forecasts[7].high) + "°C";
        condition_text7.innerHTML = Data.forecasts[7].text;
        set_condition_icon(Data.forecasts[7].text, "condition_icon7");
        city.innerHTML =
          "Weather For " + Data.location.city + ", " + Data.location.country;
      } else {
        console.log("Internal Server error");
      }
    })
    .catch((err) => {
      console.error(err);
      var load = document.getElementById("loading");
      load.style.display = "none";
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (textbox.value.trim().length !== 0) {
    var load = document.getElementById("loading");
    load.style.display = "flex";
    getweather(textbox.value);
  }
});

const tempconvert = (tempval) => {
  return Math.floor(((tempval - 32) * 5) / 9);
};

const set_condition_icon = (condition, name) => {
  if (condition.toLowerCase() == "haze") {
    document.getElementById(name).className = "fa-solid fa-smog";
  } else if (
    condition.toLowerCase() == "rainy" ||
    condition.toLowerCase() == "rain"
  ) {
    document.getElementById(name).className = "fa-solid fa-cloud-showers-heavy";
  } else if (condition.toLowerCase() == "sunny") {
    document.getElementById(name).className = "fa-solid fa-sun";
  } else if (
    condition.toLowerCase() == "mostly sunny" ||
    condition.toLowerCase() == "mostly cloudy"
  ) {
    document.getElementById(name).className = "fa-solid fa-cloud-sun";
  } else if (condition.toLowerCase() == "fog") {
    document.getElementById(name).className = "fa-solid fa-water";
  } else if (condition.toLowerCase() == "smoke") {
  } else if (condition.toLowerCase() == "cloudy") {
    document.getElementById(name).className = "fa-solid fa-smoke";
  } else if (condition.toLowerCase() == "thunderstorm") {
    document.getElementById(name).className = "fa-solid fa-cloud-bolt";
  } else if (condition.toLowerCase() == "snow") {
    document.getElementById(name).className = "fa-solid fa-snowflake";
  } else if (condition.toLowerCase() == "wind") {
    document.getElementById(name).className = "fa-solid fa-wind";
  } else if (condition.toLowerCase() == "partly cloudy") {
    document.getElementById(name).className = "fa-solid fa-cloud-sun";
  } else if (condition.toLowerCase() == "clear") {
    document.getElementById(name).className = "fa-solid fa-cloud";
  } else if (condition.toLowerCase() == "sleet") {
    document.getElementById(name).className = "fa-solid fa-cloud-hail-mixed";
  } else if (condition.toLowerCase() == "showers") {
    document.getElementById(name).className = "fa-solid fa-cloud-showers";
  }
};
