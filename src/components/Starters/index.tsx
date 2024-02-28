"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";
import {
  getBreakfastData,
  getLunchData,
  getDinnerData,
} from "@/services/getData";

interface MondayProps {
  day: any;
  //setIngredients: React.Dispatch<React.SetStateAction<any[]>>;
  //setLabel: React.Dispatch<React.SetStateAction<any[]>>;
}
interface MealData {
  value: { [key: string]: number | undefined };
  label: string;
  Image: any;
}

const Starters: React.FC<MondayProps> = (props) => {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const Starters_dessert: MealData[] = getDinnerData();
  //const first_courses_soup: MealData[] = getLunchData();
  //const Main_courses: MealData[] = getDinnerData();
  const [label, setLabel] = useState("");
  const [value, setValue] = useState<any[]>([]);
  const [image, setImage] = useState("");
  const [count, setCount] = useState(1);
  const [prevCount, setPrevCount] = useState(0);
  const [prevLabel, setPrevLabel] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLabel = event.target.value;
    const selectedOption = Starters_dessert.find(
      (option) => option.label === selectedLabel
    );

    if (selectedOption) {
      setLabel(selectedLabel);
      setImage(selectedOption.Image);
      //setSundayLabel(selectedOption.label);
      setValue(Object.entries(selectedOption.value));
      //props.setIngredients(Object.entries(selectedOption.value));
    }
  };

  //1 отделение от ключа сохраненного выбора пользователя
  let userChoiceForComponent: any = {};
  const dataForComponent = () => {
    const stateFirstUndefined: any = userChoice;
    userChoiceForComponent = stateFirstUndefined[`${props.day}_feature`] || {};
  };
  //1.1 минус первое блюдо если общее количество равно пяти.
  const minusDishIfOnlyFive = () => {
    if (
      typeof userChoiceForComponent === "object" &&
      userChoiceForComponent !== null &&
      Object.keys(userChoiceForComponent).length > 0
    ) {
      const values = Object.values(userChoiceForComponent);
      const firstObject: any = values[0];
      const labelDelete = firstObject["label"];
      //console.log("label1", labelDelete);
      if (values.length > 5 && labelDelete) {
        delete userChoiceForComponent[labelDelete];
      }
    }
    //console.log("f1", `${props.day}_feature`, userChoiceForComponent);
  };
  //2 выделение последнего для показа внутри окна выбора
  // let labelShow = "";
  // const lastDishForShow = () => {
  //   const values = Object.values(userChoiceForComponent);
  //   const lastObject: any = values[values.length - 1];
  //   labelShow = lastObject["label"];
  //   console.log("f2lastObject", labelShow, sunday !== labelShow);
  // };
  //3 добавление к сохраненному нового выбора
  let newMenuComponent: any = {};
  const addIfNewLabel = () => {
    const selectedUser = {
      [label]: {
        label: label,
        numberServings: count,
        ingredients: value.map(([key, val]) => [key, val * count]),
        image: image,
      },
    };
    newMenuComponent = {
      ...userChoiceForComponent,
      ...selectedUser,
    };
    console.log("f3", newMenuComponent);
  };
  //4 замена последнего при увеличении количества
  //5 добавление ключа от этого компонента и сохранение с !!!!!добавить задержку перед сохранением
  const savingToContext = () => {
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      [`${props.day}_feature`]: {
        ...newMenuComponent,
      },
    }));
    //console.log("f5", userChoice);
  };
  useEffect(() => {
    if (label !== "" && (prevLabel !== label || prevCount !== count)) {
      setPrevLabel(label);
      setPrevCount(count);
      dataForComponent(); //1
      minusDishIfOnlyFive(); //1.1
      // if (Object.keys(userChoiceForComponent).length > 0) {
      //   lastDishForShow(); //2
      // }
      addIfNewLabel(); //3
      savingToContext(); //5
    }
  }, [label, count, prevLabel, prevCount]);

  return (
    <>
      <div className={styles.container_top}>
        <div className={styles.image}>
          {/* {sundayImage !== "" && <img src={sundayImage} alt="Image" />} */}
          {/* {sundayImage && <img src={sundayImage} alt="Image" />} */}
          {!!image && <img src={image} alt="Image" />}
          {/* // булевый ответ дают !! */}
        </div>
        <div>
          <div className={styles.container}>
            <select
              onChange={handleSelectChange}
              className={styles.container_select}
            >
              <option value="">Вторые блюда</option>
              {Starters_dessert.map((option, index) => (
                <option key={index} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.container_button}>
            <div className={styles.container_text}>количество порций</div>
            <div
              className={styles.button}
              onClick={() => setCount(count < 2 ? 1 : count - 1)}
            >
              -
            </div>
            <div className={styles.button2}>{count}</div>
            <div
              className={styles.button}
              onClick={() => setCount(count > 99 ? 100 : count + 1)}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_ingredients}>
        {value.map(([key, value], index) => (
          <div key={index}>{`${key}: ${value * count}`}</div>
        ))}
      </div>
    </>
  );
};
export default Starters;
