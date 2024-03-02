"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";
import { getHistory1 } from "@/services/getDataMenu1";
import { getHistory2 } from "@/services/getDataMenu2";
//import { useHistory } from "react-router-dom";

export default function FavoriteMenu() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const History1 = getHistory1();
  const History2 = getHistory2();
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

  const loadMenu1 = () => {
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      ...History1,
    }));
    //console.log("label2", History1);
    //history.push("/");
    window.location.href = "/";
  };
  const loadMenu2 = () => {
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      ...History2,
    }));
    window.location.href = "/";
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={() => loadMenu1()}>загрузить меню1.</button>
        <button onClick={() => loadMenu2()}>загрузить меню2.</button>
        {dataString}
      </div>
    </>
  );
}
