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

interface MenuItem {
  label: string;
  value: Record<string, number | undefined>;
}

interface DishFound {
  day: any;
  // setDishFromFound: React.Dispatch<React.SetStateAction<any[]>>;
}

const FoundDish: React.FC<DishFound> = (props) => {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const DinnerData: MenuItem[] = getDinnerData();
  const BreakfastData: MenuItem[] = getBreakfastData();
  const LunchData: MenuItem[] = getLunchData();
  const SaladData: MenuItem[] = getSalad();
  const PastriesDesserts: MenuItem[] = getPastriesDesserts();
  const [answer, setAnswer] = useState("");
  const [allFound, setAllFound] = useState<any[]>([]);
  const [placeholder, setPlaceholder] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const userFound = (menuItem: any) => {
    const selectedUser = {
      [menuItem.label]: {
        label: menuItem.label,
        numberServings: 1,
        ingredients: Object.entries(menuItem.value),
        image: menuItem.image,
      },
    };

    const stateFirstUndefined: any = userChoice;
    let userChoiceForComponent: any =
      stateFirstUndefined[`${props.day}_feature`] || {};

    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      [`${props.day}_feature`]: {
        ...userChoiceForComponent,
        ...selectedUser,
      },
    }));
    setAnswer("");
  };

  const phrases = ["найти        ", "завтрак         ", "творог          "];

  useEffect(() => {
    const tick = () => {
      const current = phrases[phraseIndex];
      // console.log(placeholder, isDeleting, charIndex);
      if (!isDeleting) {
        // — ПЕЧАТЬ
        setPlaceholder(current.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
        if (charIndex > current.length) {
          // фраза полностью напечатана
          setIsDeleting(true);
        }
      } else if (charIndex < 0) {
        // полностью стерли → переходим к следующей фразе
        setPhraseIndex(phraseIndex + 1);
        setIsDeleting(false);
        setCharIndex(0);
      } else {
        // — СТИРАТЬ
        setPlaceholder(current.slice(0, charIndex));
        setCharIndex(charIndex - 1);
        // setTimeout(tick, erasingDelay);
      }
    };
    if (phrases.length > phraseIndex) {
      const timerID = setTimeout(() => tick(), 100);
      return () => {
        clearTimeout(timerID);
      };
    } else {
      setPlaceholder("по ингредиенту");
    }
  }, [charIndex]);

  return (
    <div className={styles.found}>
      <input
        className={styles.form}
        type="text"
        value={answer}
        onInput={handleAnswerChange}
        required
        id="contactAnswer"
        placeholder={placeholder}
      />
      {answer.length >= 3 && (
        <div className={styles.container_scroll}>
          {allFound.map((menuItem, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onClick={() => userFound(menuItem)}
            >
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
};
export default FoundDish;
