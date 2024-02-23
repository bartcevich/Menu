"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";

interface MondayProps {
  day: string;
}

export default function MenuGroups(props: MondayProps) {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const [userInput, setUserInput] = useState<any>({ menuText: "" });
  const [userInput1, setUserInput1] = useState<any>(false);

  //1 отделение от ключа сохраненного выбора пользователя
  const dataForComponent = () => {
    const stateFirstUndefined: any = userChoice;
    setUserInput(
      stateFirstUndefined[`${props.day}_nameMenu`] || { menuText: "" }
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
  //5 добавление ключа от этого компонента и сохранение
  const savingToContext = () => {
    if (userInput["menuText"] !== "") {
      setUserChoice((prevUserChoice) => ({
        ...prevUserChoice,
        [`${props.day}_nameMenu`]: {
          ...userInput,
        },
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputs = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(newInputs);
  };

  useEffect(() => {
    //setTimeout(savingToContext, 2000);
    savingToContext();
  }, [userInput]);

  return (
    <>
      <div className={styles.container_top}>
        <input
          className={styles.container_input}
          type="text"
          name="menuText"
          value={userInput.menuText || ""}
          maxLength={27}
          onChange={handleInputChange}
          placeholder="Меню для..."
        />
      </div>
    </>
  );
}
