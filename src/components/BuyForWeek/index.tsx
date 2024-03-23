"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./styles.module.scss";
import { IngredientsContext } from "@/context/IngredientsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function BuyForWeek() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const [sumIngredientsPrint, setSumIngredientsPrint] = useState({});

  const dataForComponent = () => {
    const stateFirstUndefined: any = userChoice;
    const userChoiceForComponent = {
      ...(stateFirstUndefined["day1_feature"] || {}),
      ...(stateFirstUndefined["day2_feature"] || {}),
      ...(stateFirstUndefined["day3_feature"] || {}),
      ...(stateFirstUndefined["day4_feature"] || {}),
      ...(stateFirstUndefined["day5_feature"] || {}),
      ...(stateFirstUndefined["day6_feature"] || {}),
      ...(stateFirstUndefined["day7_feature"] || {}),
    };
    const oneArrIngredients = Object.values(userChoiceForComponent)
      .map((item: any) => item.ingredients)
      .flat();
    //console.log("all day", oneArrIngredients);

    setSumIngredientsPrint(
      oneArrIngredients.reduce((accumulator, current) => {
        const [ingredient, weight] = current;
        if (accumulator.hasOwnProperty(ingredient)) {
          accumulator[ingredient] += weight;
        } else {
          accumulator[ingredient] = weight;
        }
        return accumulator;
      }, {})
    );
  };
  //запуск компонента при измененниях данных в памяти
  useEffect(() => {
    if (
      typeof userChoice === "object" &&
      userChoice !== null &&
      Object.keys(userChoice).length > 0
    ) {
      dataForComponent();
    }
  }, [userChoice]);
  //копирование в буфер данных и подтверждение этого на экране
  const [showTooltip, setShowTooltip] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleCopy = () => {
    if (textareaRef.current) {
      const formattedString = Object.entries(sumIngredientsPrint)
        .map(([ingredient, weight]) => `${ingredient}: ${weight}`)
        .join(",\n");
      textareaRef.current.value = formattedString;
      textareaRef.current.select();
      document.execCommand("copy");
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }
  };
  //включение показа списка покупок
  const [sumIngredients, setSumIngredients] = useState(false);
  const handleIngredients = () => {
    setSumIngredients((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={styles.container}>
        <details>
          <summary>Oбщий список:</summary>
          <button className={styles.handleCopy} onClick={handleCopy}>
            <FontAwesomeIcon icon={faCopy} />
          </button>
          <div className={styles.buyForDay}>
            {Object.entries(sumIngredientsPrint).map(([ingredient, weight]) => (
              <div key={ingredient}>
                {ingredient}: {weight as number}
              </div>
            ))}
          </div>
        </details>
        {showTooltip && (
          <div className={styles.tooltip}>Cписок скопирован!</div>
        )}
      </div>
      <textarea
        ref={textareaRef}
        style={{ position: "absolute", left: "-9999px" }} // Hide the textarea off-screen
        readOnly
      />
    </>
  );
}
