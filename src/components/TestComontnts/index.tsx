"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";
import {
  getDinnerData,
  getBreakfastData,
  getLunchData,
  getSalad,
  getPastriesDesserts,
} from "@/services/getData";

export default function FavoriteMenu() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const [dataString, setDataString] = useState({});
  const DinnerData = getDinnerData();
  const BreakfastData = getBreakfastData();
  const LunchData = getLunchData();
  const SaladData = getSalad();
  const PastriesDesserts = getPastriesDesserts();

  const deleteMenu = () => {
    for (let i = 1; i <= 7; i++) {
      const key = `day${i}_feature`;
      if (key in userChoice) {
        delete (userChoice as any)[key];
      }
    }
    setUserChoice({ ...userChoice });
  };

  const loadMenu = (history: any) => {
    //deleteMenu();
    // setUserChoice((prevUserChoice) => ({
    //   ...prevUserChoice,
    //   ...history,
    // }));
    //window.location.href = "/";
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      ["day9_feature"]: {
        ...history,
      },
    }));
  };

  const foundDishMenu = () => {
    const dishToFind = "Лимонный бисквит.";
    const foundDinner = DinnerData.find((item) => item.label === dishToFind);
    const foundBreakfast: any = BreakfastData.find(
      (item) => item.label === dishToFind
    );
    const foundLunch = LunchData.find((item) => item.label === dishToFind);
    const foundSalad = SaladData.find((item) => item.label === dishToFind);
    const foundPastries = PastriesDesserts.find(
      (item) => item.label === dishToFind
    );
    const menuOneDay = {
      [dishToFind]: {
        ...foundDinner,
        ...foundBreakfast,
        ...foundLunch,
        ...foundSalad,
        ...foundPastries,
        numberServings: 1,
      },
    };
    console.log("dataString", foundPastries);
    console.log("selectedUser", menuOneDay);
    loadMenu(menuOneDay);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Недорогое меню для семьи на месяц</h2>
        <ul>
          <li>
            <button onClick={() => foundDishMenu()}>загрузить меню 5.</button>
          </li>
        </ul>
      </div>
    </>
  );
}
