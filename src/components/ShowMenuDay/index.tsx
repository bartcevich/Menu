"use client";
import React, { useEffect, useState, useContext } from "react";
import { IngredientsContext } from "@/context/IngredientsContext";
import styles from "./styles.module.scss";

interface MondayProps {
  day: string;
}

const ShowMenuDay: React.FC<MondayProps> = (props) => {
  const { userChoice } = useContext(IngredientsContext);
  const [menuData, setMenuData] = useState<any[]>([]);

  useEffect(() => {
    let userChoiceForComponent: any = {};
    const dataForComponent = () => {
      const stateFirstUndefined: any = userChoice;
      userChoiceForComponent =
        stateFirstUndefined[`${props.day}_feature`] || {};
      const values = Object.values(userChoiceForComponent);
      const lastFiveObjects = values.slice(-5);
      setMenuData(lastFiveObjects);
    };
    if (
      typeof userChoice === "object" &&
      userChoice !== null &&
      Object.keys(userChoice).length > 0
    ) {
      dataForComponent();
    }
  }, [userChoice, props.day]);
  // if (count === 1) {
  //   setUserChoice();
  // } else if (count > 1) {
  //   setUserChoice();
  // }
  return (
    <>
      <div className={styles.container_top}>
        {menuData.map((menuItem, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.image}>
              <img src={menuItem.image} alt="Image" />
            </div>
            <div className={styles.label}>
              {menuItem.label}
              {menuItem.numberServings === 1
                ? `Для ${menuItem.numberServings} человека.`
                : `Для ${menuItem.numberServings} человек.`}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowMenuDay;
