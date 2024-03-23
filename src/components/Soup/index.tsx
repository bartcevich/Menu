"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";
import { getLunchData } from "@/services/getData";

interface MondayProps {
  day: any;
}
interface MealData {
  value: { [key: string]: number | undefined };
  label: string;
  image: any;
}

const Starters: React.FC<MondayProps> = (props) => {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const First_courses_soup: MealData[] = getLunchData();
  const [label, setLabel] = useState("");
  const [value, setValue] = useState<any[]>([]);
  const [image, setImage] = useState("");
  const [count, setCount] = useState(1);
  const [prevCount, setPrevCount] = useState(0);
  const [prevLabel, setPrevLabel] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLabel = event.target.value;
    const selectedOption = First_courses_soup.find(
      (option) => option.label === selectedLabel
    );

    if (selectedOption) {
      setLabel(selectedLabel);
      setImage(selectedOption.image);
      setValue(Object.entries(selectedOption.value));
    }
  };

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
      if (values.length > 5 && labelDelete) {
        delete userChoiceForComponent[labelDelete];
      }
    }
  };
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
  };
  //5 добавление ключа от этого компонента
  const savingToContext = () => {
    setUserChoice((prevUserChoice) => ({
      ...prevUserChoice,
      [`${props.day}_feature`]: {
        ...newMenuComponent,
      },
    }));
  };
  useEffect(() => {
    if (label !== "" && (prevLabel !== label || prevCount !== count)) {
      setPrevLabel(label);
      setPrevCount(count);
      dataForComponent(); //1
      minusDishIfOnlyFive(); //1.1
      addIfNewLabel(); //3
      savingToContext(); //5
    }
  }, [label, count, prevLabel, prevCount]);

  return (
    <>
      <div className={styles.container_top}>
        <div className={styles.image}>
          {!!image && <img src={image} alt="Image" />}
        </div>
        <div>
          <div className={styles.container}>
            <select
              onChange={handleSelectChange}
              className={styles.container_select}
            >
              <option value="">Супы</option>
              {First_courses_soup.map((option, index) => (
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
