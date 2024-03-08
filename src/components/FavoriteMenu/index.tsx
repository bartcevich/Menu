"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";
import { getHistory1 } from "@/services/getDataMenu1";
import { getHistory2 } from "@/services/getDataMenu2";
import { getHistory3 } from "@/services/getDataMenu3";
import { getHistory4 } from "@/services/getDataMenu4";
//import { useHistory } from "react-router-dom";

export default function FavoriteMenu() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const History1 = getHistory1();
  const History2 = getHistory2();
  const History3 = getHistory3();
  const History4 = getHistory4();
  const [dataString, setDataString] = useState("");
  //const history = useHistory();

  // useEffect(() => {
  //   if (
  //     typeof userChoice === "object" &&
  //     userChoice !== null &&
  //     Object.keys(userChoice).length > 0
  //   ) {
  //     const stateFirstUndefined: any = userChoice;
  //     setDataString(JSON.stringify(stateFirstUndefined));
  //   }
  // }, [userChoice]);

  const deleteMenu = () => {
    for (let i = 1; i <= 7; i++) {
      const key = `day${i}_feature`;
      if (key in userChoice) {
        delete (userChoice as any)[key]; // Type assertion here as 'any'
      }
    }
    setUserChoice({ ...userChoice });
  };

  const loadMenu = (history: any) => {
    deleteMenu();
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      ...history,
    }));
    //
    //history.push("/");
    window.location.href = "/";
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Недорогое меню для семьи на месяц</h2>
        <ul>
          <li>
            <button onClick={() => loadMenu(History1)}>
              загрузить меню 1.
            </button>
          </li>
          <li>
            <button onClick={() => loadMenu(History2)}>
              загрузить меню 2.
            </button>
          </li>
          <li>
            <button onClick={() => loadMenu(History3)}>
              загрузить меню 3.
            </button>
          </li>
          <li>
            <button onClick={() => loadMenu(History4)}>
              загрузить меню 4.
            </button>
          </li>
        </ul>
        {dataString}
      </div>
    </>
  );
}
