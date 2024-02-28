"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import BuyForDay from "@/components/BuyForDay";
import Soup from "@/components/Soup";
import Salad from "@/components/Salad";
import Desserts from "@/components/Desserts";
import Starters from "@/components/Starters";
import SideDish from "@/components/SideDish";
import ShowMenuDay from "@/components/ShowMenuDay";
import PartMenuName from "@/components/PartMenuName";
import PartMenuComments from "@/components/PartMenuComments";

export default function MenuGroups(props: any) {
  const [openMenu, setOpenMenu] = useState(true);
  const handleClick = () => {
    setOpenMenu((prevValue) => !prevValue);
  };
  const day = props.day;

  return (
    <>
      <div className={styles.container_top}>
        <PartMenuName day={day} />
        <div className={styles.container_button}>
          <button
            type="button"
            className={styles.menuGroup}
            onClick={handleClick}
          >
            {openMenu ? "Возврат к меню" : "Тип блюда"}
          </button>
        </div>
        {openMenu && (
          <div className={styles.container_popup}>
            <Starters day={day} />
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
      <PartMenuComments day={day} />
      <div>
        <BuyForDay day={day} />
      </div>
    </>
  );
}
