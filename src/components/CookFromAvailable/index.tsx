"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  getDinnerData,
  getBreakfastData,
  getLunchData,
  getSalad,
  getPastriesDesserts,
} from "@/services/getData";

const RIGHT_ANSWER = [
  { value: "Выберите ингридиент", label: "Выберите ингридиент" },

  { value: "Помидоры гр", label: "Помидоры" },
  { value: "Консервированный горошек гр", label: "Консервированный горошек" },
  { value: "Крабовые палочки гр", label: "Крабовые палочки" },
  { value: "Рыба гр", label: "Рыба" },
  { value: "Селедка соленая гр", label: "Селедка соленая" },
  { value: "Сосиски гр", label: "Сосиски" },
  { value: "Ветчина гр", label: "Ветчина" },
  { value: "Грудинка гр", label: "Грудинка" },
  { value: "Курица гр", label: "Курица" },

  //{ value: "Куриные субпродукты гр", label: "Куриные субпродукты" },
  { value: "Куриные крылья гр", label: "Куриные крылья" },
  { value: "Куриное филе гр", label: "Куриное филе" },
  //{ value: "Утка гр", label: "Утка" },
  //{ value: "Индейка гр", label: "Индейка" },
  //{ value: "Гусь гр", label: "Гусь" },
  { value: "Пельмени гр", label: "Пельмени" },
  //{ value: "Перепел гр", label: "Перепел" },
  { value: "Свинина гр", label: "Свинина" },
  { value: "Свиной фарш гр", label: "Свиной фарш" },
  //{ value: "Свиные субпродукты гр", label: "Свиные субпродукты" },
  { value: "Свиные ребра гр", label: "Свиные ребра" },
  { value: "Сало гр", label: "Сало" },
  { value: "Говядина гр", label: "Говядина" },
  //{ value: "Говяжий фарш гр", label: "Говяжий фарш" },
  //{ value: "Говяжьи субпродукты гр", label: "Говяжьи субпродукты" },
  //{ value: "Баранина гр", label: "Баранина" },
];

export default function CookFromAvailable() {
  const DinnerData = getDinnerData();
  const BreakfastData = getBreakfastData();
  const LunchData = getLunchData();
  const SaladData = getSalad();
  const PastriesDesserts = getPastriesDesserts();
  const [answer, setAnswer] = useState("");
  const [allFound, setAllFound] = useState<any[]>([]);

  useEffect(() => {
    const foundDinner = DinnerData.filter((item) =>
      item.value.hasOwnProperty(answer)
    );
    const foundBreakfast = BreakfastData.filter((item) =>
      item.value.hasOwnProperty(answer)
    );
    const foundLunch = LunchData.filter((item) =>
      item.value.hasOwnProperty(answer)
    );
    const foundSalad = SaladData.filter((item) =>
      item.value.hasOwnProperty(answer)
    );
    const foundPastries = PastriesDesserts.filter((item) =>
      item.value.hasOwnProperty(answer)
    );
    const allFoundItems = [
      ...foundDinner,
      ...foundBreakfast,
      ...foundLunch,
      ...foundSalad,
      ...foundPastries,
    ];
    setAllFound(allFoundItems);
    //console.log(foundSalad);
    // const labelsDinner = foundDinner.map((item) => item.label);
    // const labelsPastries = foundPastries.map((item) => item.label);
    // setDataString(
    //   `Из "${answer}" можно приготовить:
    //     ${labelsDinner.join(", ")}
    //     ${labelsPastries.join(", ")}`
    // );
  }, [answer]);

  const handleAnswerChange = (e: any) => {
    const enteredAnswer = e.target.value;
    setAnswer(enteredAnswer);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Выберите главный ингридиент для приготовления</h2>
        <select
          className={styles.form}
          onChange={handleAnswerChange}
          value={answer}
          id="contactAnswer"
          name="answer"
        >
          {RIGHT_ANSWER.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {allFound.length > 0 && <h2>Вы можете приготовить: </h2>}
        {allFound.map((menuItem, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.container}>
              <div className={styles.labelImage}>
                <div className={styles.label}>{menuItem.label}</div>
                <div className={styles.image}>
                  <img src={menuItem.image} alt="Image" />
                  {/* befor Image afto  image */}
                </div>
              </div>
              <div>
                {Object.entries(menuItem.value).map(([name, quantity]) => (
                  <span className={styles.ingredientCourse} key={name}>
                    {name}:{quantity as number},<span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
