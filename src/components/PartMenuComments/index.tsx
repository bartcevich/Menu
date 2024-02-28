"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";

interface MondayProps {
  day: string;
}

export default function MenuGroups(props: MondayProps) {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const [userInput, setUserInput] = useState<any>({ menuText: "" });
  const [userInput1, setUserInput1] = useState<any>(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  //1 отделение от ключа сохраненного выбора пользователя
  const dataForComponent = () => {
    const stateFirstUndefined: any = userChoice;
    setUserInput(
      stateFirstUndefined[`${props.day}_comment`] || { menuText: "" }
    );
  };
  useEffect(() => {
    if (
      userInput1 === false &&
      typeof userChoice === "object" &&
      userChoice !== null &&
      Object.keys(userChoice).length > 0
    ) {
      setUserInput1(userChoice);
      dataForComponent();
    }
  }, [userInput1, userChoice]);
  // получение данных введенных пользователем
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInputs = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(newInputs);
    //console.log(newInputs);
  };
  // добавление ключа от этого компонента и сохранение
  const savingToContext = () => {
    if (userInput["menuText"] !== "") {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Set a new timeout to save the input
      timeoutRef.current = setTimeout(() => {
        setUserChoice((prevUserChoice) => ({
          ...prevUserChoice,
          [`${props.day}_comment`]: {
            ...userInput,
          },
        }));
      }, 1000);
    }
  };
  //вызов через useEffect устранил потерю последнего символа
  useEffect(() => {
    savingToContext();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [userInput]);

  return (
    <>
      <div className={styles.container_top}>
        <textarea
          className={styles.container_input1}
          name="menuText"
          value={userInput.menuText || ""}
          onChange={handleInputChange}
          placeholder="Kомментарий"
        />
      </div>
    </>
  );
}
