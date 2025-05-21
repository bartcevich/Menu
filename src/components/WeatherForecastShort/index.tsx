"use client";
import React from "react";
import styles from "./styles.module.scss";

interface WeatherForecastShortProps {
  days: [string, any[]][];
}

const WeatherForecastShort: React.FC<WeatherForecastShortProps> = (props) => {
  // console.log("forecast short", props);
  return (
    <div className={styles.container_daysShort}>
      {props.days.map(([dayName, forecasts], dayIndex) => {
        let maxTemp = Number.NEGATIVE_INFINITY;
        let maxRain = 0;
        let weatherIcon = "";

        forecasts.forEach((forecast) => {
          if (forecast.main.temp_max > maxTemp) {
            maxTemp = forecast.main.temp_max;
            weatherIcon = forecast.weather[0].icon;
          }
          if (forecast.rain && forecast.rain["3h"] > maxRain) {
            maxRain = forecast.rain["3h"];
          }
        });
        const parts = dayName.split(", ");
        const dayNumberAndMonth =
          parts.length === 2 ? parts[1] : "Неизвестная дата";

        return (
          <div key={dayIndex} className={styles.forecastCard}>
            <div className={styles.dailyForecast}>
              <h3 className={styles.dayTitle}>{dayNumberAndMonth}</h3>

              <div className={styles.tempRange}>
                <img
                  src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                  alt="Weather Icon"
                  className={styles.weatherIcon}
                />
                <span className={styles.tempMax}>{Math.round(maxTemp)}°C</span>
              </div>

              <div className={styles.rainData}>
                {maxRain > 0 && <p>💧{maxRain}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecastShort;
