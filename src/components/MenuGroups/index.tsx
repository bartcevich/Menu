"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import BuyForDay from "@/components/BuyForDay";
import Soup from "@/components/Soup";
import Salad from "@/components/Salad";
import Desserts from "@/components/Desserts";
import Starters from "@/components/Starters";
import SideDish from "@/components/SideDish";
import ShowMenuDay from "@/components/ShowMenuDay";
import NameForPartMenu from "@/components/NameForPartMenu";

export default function MenuGroups(props: any) {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [label, setLabel] = useState<any[]>([]);
  const [image, setImage] = useState<any[]>([]);
  const [numberHuman, setNumberHuman] = useState<any[]>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu((prevValue) => !prevValue);
  };
  const day = props.day;

  return (
    <>
      <div className={styles.container_top}>
        <NameForPartMenu day={day} />
        <button
          type="button"
          className={styles.menuGroup}
          onClick={handleClick}
        >
          {openMenu ? "Возврат к меню" : "Тип блюда"}
        </button>
        {openMenu && (
          <div className={styles.container_popup}>
            <Starters
              day={day}
              //setIngredients={setIngredients}
              //setLabel={setLabel}
            />
            <SideDish day={day} />
            <Soup day={day} />
            <Salad day={day} />
            <Desserts day={day} />
          </div>
        )}
      </div>
      <div>
        <ShowMenuDay day={day} />
      </div>
      {/* <div>
        <BuyForDay
          day={day}
          ingredients={ingredients}
          label={label}
          image={image}
          numberHuman={numberHuman}
          isOpen={true}
        />
      </div> */}
    </>
  );
}
