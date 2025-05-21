"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import MemoizedLocation from "../Geolocation/geolocation";
import WeatherForecastShort from "../WeatherForecastShort";

interface WeatherData {
  city: WeatherCity;
  list: ForecastItem[];
}
interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    "3h"?: number;
  };
}
interface WeatherCity {
  name?: string;
  country?: string;
  population?: number;
}
const API = "c36b3601f08a6d80e90fad7a4d07df8f";
export default function WeatherForecast() {
  const [openMenu, setOpenMenu] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [geo, setGeo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasWeatherData, setHasWeatherData] = useState(false);
  const [days, setDays] = useState<[string, any[]][]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      setHasWeatherData(false);
      const url =
        latitude === 0 && longitude === 0
          ? `https://api.openweathermap.org/data/2.5/forecast?lat=53.815388&lon=27.79933&appid=${API}&units=metric`
          : `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных погоды");
        }
        const data = await response.json();
        setWeatherData(data);
        // Группируем данные по дням
        if (data.list && Array.isArray(data.list)) {
          const grouped = groupByDay(data.list);
          setDays(grouped);
          setHasWeatherData(true);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  // Функция для группировки данных по дням
  function groupByDay(forecasts: any[]) {
    const daysMap = new Map<string, ForecastItem[]>();

    forecasts.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000);
      const dayKey = date.toLocaleDateString("ru-RU", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      if (!daysMap.has(dayKey)) {
        daysMap.set(dayKey, []);
      }
      daysMap.get(dayKey)?.push(forecast);
    });

    return Array.from(daysMap.entries());
  }

  // Функция для отображения капель дождя
  function renderRainDrops(pop: any) {
    let dropsCount = 0; //
    if (typeof pop === "object" && Object.keys(pop).length > 0) {
      dropsCount = Math.ceil(pop["3h"]); //Math.min(, 6);
    }
    return dropsCount > 0 ? (
      <div className={styles.rainDrops}>
        {Array(dropsCount)
          .fill(0)
          .map((_, i) => (
            <span key={i}>💧</span>
          ))}
      </div>
    ) : null;
  }

  // Функция для определения цвета фона по скорости ветра
  function getWindBgColor(speed: number) {
    const roundedSpeed = Math.ceil(speed);
    if (roundedSpeed <= 2) return styles.windLow;
    if (roundedSpeed <= 4) return styles.windMedium;
    if (roundedSpeed <= 6) return styles.windHigh;
    if (roundedSpeed <= 8) return styles.windVeryHigh;
    return styles.windExtreme;
  }
  // console.log("forecast", latitude, longitude, days);
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.container_button}>
        <div>
          <button
            type="button"
            className={styles.styleButton}
            title="нажмите для подробного просмотра погоды"
            onClick={() => setOpenMenu((prevValue) => !prevValue)}
          >
            {openMenu ? "Закрыть просмотр" : "Погода подробно"}
          </button>
          <button
            type="button"
            className={styles.styleButton}
            onClick={() => setGeo((prevValue) => !prevValue)}
          >
            {geo ? "Назад" : "погода для вашей локации"}
          </button>
        </div>
        {!geo && <span>данные погоды в Pryvol’ny (2000) BY</span>}
        {geo && weatherData && (
          <>
            <span>
              данные погоды в {weatherData.city.name} (
              {weatherData.city.population}) {weatherData.city.country}.
              Получены для геоточки:
            </span>
            <MemoizedLocation
              setLatitude={setLatitude}
              setLongitude={setLongitude}
            />
          </>
        )}
      </div>
      <div className={styles.container_days}>
        {hasWeatherData && !openMenu && <WeatherForecastShort days={days} />}
        {hasWeatherData && openMenu && (
          <>
            {days.map(([dayName, forecasts], dayIndex) => (
              <div key={dayIndex} className={styles.dayContainer}>
                <h3 className={styles.dayTitle}>
                  {dayIndex === 0
                    ? "Сегодня"
                    : dayIndex === 1
                    ? "Завтра"
                    : dayName}
                </h3>

                <div className={styles.hourlyForecasts}>
                  {forecasts.map((forecast, index) => {
                    const time = new Date(forecast.dt * 1000)
                      .toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace(":", ".");

                    return (
                      <div
                        key={index}
                        className={`${styles.forecastCard} ${getWindBgColor(
                          forecast?.wind?.speed
                        )}`}
                      >
                        <div className={styles.time}>
                          {time}
                          {renderRainDrops(forecast?.rain)}
                        </div>
                        <div className={styles.tempRange}>
                          <span className={styles.tempMax}>
                            {Math.round(forecast.main.temp_min)}°C
                            {Math.round(forecast.main.temp_max) !==
                            Math.round(forecast.main.temp_min)
                              ? ` - ${Math.round(forecast.main.temp_max)}°C`
                              : ""}
                          </span>
                          <div className={styles.feelsLike}>
                            Ощущается: {Math.round(forecast.main.feels_like)}°
                          </div>
                        </div>
                        <img
                          src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                          alt={forecast.weather[0].description}
                          className={styles.weatherIcon}
                        />
                        <div className={styles.windAndRain}>
                          <p className={styles.rainData}>
                            {forecast?.rain && <span>💧</span>}
                            {forecast?.rain !== null
                              ? typeof forecast?.rain === "object"
                                ? forecast.rain["3h"]
                                : ""
                              : ""}
                          </p>
                          <p className={styles.windData}>
                            <FontAwesomeIcon icon={faWind} />{" "}
                            {Math.ceil(forecast?.wind?.speed)} м/с
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            {!loading && !error && !hasWeatherData && (
              <span>
                Данные погоды ещё не загружены. Разрешите браузеру получить вашу
                локацию.
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
