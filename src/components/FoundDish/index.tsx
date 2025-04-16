"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import {
  getDinnerData,
  getBreakfastData,
  getLunchData,
  getSalad,
  getPastriesDesserts,
} from "@/services/getData";

interface MenuItem {
  label: string;
  value: Record<string, number | undefined>;
}

export default function CookFromAvailable() {
  const DinnerData: MenuItem[] = getDinnerData();
  const BreakfastData: MenuItem[] = getBreakfastData();
  const LunchData: MenuItem[] = getLunchData();
  const SaladData: MenuItem[] = getSalad();
  const PastriesDesserts: MenuItem[] = getPastriesDesserts();
  const [answer, setAnswer] = useState("");
  const [allFound, setAllFound] = useState<any[]>([]);

  useEffect(() => {
    if (answer.length < 3) {
      setAllFound([]);
      return;
    }

    const filterByIngredient = (data: MenuItem[]): MenuItem[] => {
      return data.filter((item) =>
        Object.keys(item.value).some((ingredient) =>
          ingredient.toLowerCase().includes(answer.toLowerCase())
        )
      );
    };

    const foundDinner = filterByIngredient(DinnerData);
    const foundBreakfast = filterByIngredient(BreakfastData);
    const foundLunch = filterByIngredient(LunchData);
    const foundSalad = filterByIngredient(SaladData);
    const foundPastries = filterByIngredient(PastriesDesserts);

    const allFoundItems = [
      ...foundDinner,
      ...foundBreakfast,
      ...foundLunch,
      ...foundSalad,
      ...foundPastries,
    ];
    setAllFound(allFoundItems);
    //console.log(foundSalad);
  }, [answer]);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div className={styles.found}>
      <input
        className={styles.form}
        type="text"
        value={answer}
        onInput={handleAnswerChange}
        required
        id="contactAnswer"
        placeholder={`${answer === "" ? "найти по ингредиенту" : "ингредиент"}`}
      />
      {answer.length >= 3 && (
        <div className={styles.container_scroll}>
          {allFound.map((menuItem, index) => (
            <div key={index} className={styles.menuItem}>
              <div className={styles.container}>
                <div className={styles.labelImage}>
                  <div className={styles.label}>{menuItem.label}</div>
                  <div className={styles.image}>
                    <img src={menuItem.image} alt="Image" />
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
      )}
    </div>
  );
}
