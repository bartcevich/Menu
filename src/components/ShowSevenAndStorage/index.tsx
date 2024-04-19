"use client";
import React, { useEffect, useState, useContext, useCallback } from "react";
import styles from "./styles.module.scss";
import { IngredientsContext } from "@/context/IngredientsContext";
import MenuGroupsOpen from "@/components/MenuGroupsOpen";
import MenuGroups from "@/components/MenuGroups";
import BuyForWeek from "@/components/BuyForWeek";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareRight,
  faCaretSquareLeft,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function ShowSevenAndStorage() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const [messageSent, setMessageSent] = useState(0);
  const [number, setNumber] = useState(1);

  const letterInMail = useCallback(() => {
    // Use useCallback to avoid unnecessary re-renders
    //console.log("ShowSevenAndStorage", messageSent);
    const stateFirstUndefined: any = userChoice;
    const dataForComponent = stateFirstUndefined["letterInMail"] || {};
    const dataAuthentication = stateFirstUndefined["formData"] || {};
    if (dataForComponent["mail"] !== "true" && messageSent === 1) {
      const data = JSON.stringify(dataAuthentication);
      //console.log("data=", data);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log("promise=", data);
          if (data["success"] === true) {
            setMessageSent(2);
            setUserChoice((prevUserChoice) => ({
              ...prevUserChoice,
              ["letterInMail"]: {
                mail: "true",
              },
            }));
          } else {
            setMessageSent(1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userChoice, messageSent, setUserChoice]);

  useEffect(() => {
    if (
      typeof userChoice === "object" &&
      userChoice !== null &&
      Object.keys(userChoice).length > 0
    ) {
      setMessageSent(1);
      letterInMail();
    }
  }, [messageSent]);

  const goToTop = () => window.scrollTo(0, 0);
  //данные для компонента о номере фона который был выбран или задать 1
  const dataForComponent = () => {
    const stateFirstUndefined: any = userChoice;
    const numberGet = stateFirstUndefined.background || 1;
    setNumber(numberGet);
    //console.log(stateFirstUndefined.background, numberGet, number);
  };
  //задание однократного вызова из памяти номера фона
  useEffect(() => {
    if (
      typeof userChoice === "object" &&
      userChoice !== null &&
      Object.keys(userChoice).length > 0
    ) {
      dataForComponent();
    }
  }, []);
  const handleNumberChange = (event: { target: { value: string } }) => {
    setNumber(parseInt(event.target.value));
  };
  //установка имени класса в зависимости от выбора пользователя
  let backgroundClass =
    number === 1
      ? styles.background1
      : number === 2
      ? styles.background2
      : styles.background3;
  // сохранение выбора  пользователя в хранилище
  const savingToContext = () => {
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      ["background"]: number,
    }));
  };
  useEffect(() => {
    savingToContext();
  }, [number]);

  return (
    <>
      <div className={`${styles.containerTest} ${backgroundClass}`}>
        <div className={styles.container_button}>
          <p>выберите фон:</p>
          <input
            type="range"
            max="3"
            min="1"
            value={number}
            onChange={handleNumberChange}
            id="sliderRange"
          />
          <span id="demo">{number}</span>
        </div>
        <div className={styles.container}>
          <div className={styles.column1}>
            <div className={styles.menuGroups1}>
              <MenuGroupsOpen day={"day1"} />
            </div>
            <div className={styles.menuGroups2}>
              <MenuGroups day={"day2"} />
            </div>
            <div className={styles.menuGroups3}>
              <MenuGroups day={"day3"} />
            </div>
            <div className={styles.menuGroups4}>
              <MenuGroups day={"day4"} />
            </div>
            <div className={styles.menuGroups5}>
              <MenuGroups day={"day5"} />
            </div>
            <div className={styles.menuGroups6}>
              <MenuGroups day={"day6"} />
            </div>
            <div className={styles.menuGroups7}>
              <MenuGroups day={"day7"} />
            </div>
          </div>
          <div>
            <div className={styles.column2}>
              <div className={styles.menuGroups8}>
                <BuyForWeek />
              </div>
            </div>
            <div className={styles.goToTop} onClick={() => goToTop()}>
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
