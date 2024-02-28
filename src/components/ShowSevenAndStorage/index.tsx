"use client";
import React, { useEffect, useState, useContext, useCallback } from "react";
import styles from "./styles.module.scss";
import { IngredientsContext } from "@/context/IngredientsContext";
import MenuGroupsOpen from "@/components/MenuGroupsOpen";
import MenuGroups from "@/components/MenuGroups";
import BuyForWeek from "@/components/BuyForWeek";

export default function ShowSevenAndStorage() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);

  //useEffect(() => {
  //localStorage.setItem("ingredientHistory", JSON.stringify({}));
  // console.log(
  //   "userChoiceStorage=",
  //   localStorage.getItem("ingredientHistory5")
  // );
  //   const savedIngredientHistory5: string | null =
  //     localStorage.getItem("ingredientHistory5");
  //   if (savedIngredientHistory5) {
  //     const parsedIngredientHistory = JSON.parse(savedIngredientHistory5);
  //     setUserChoice(parsedIngredientHistory);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (
  //     typeof userChoice === "object" &&
  //     userChoice !== null &&
  //     Object.keys(userChoice).length > 0
  //   ) {
  //     localStorage.setItem("ingredientHistory5", JSON.stringify(userChoice));
  //   }
  // for (let keysUserChoice of Object.keys(userChoiceStorage)) {
  //   console.log("keys=", keysUserChoice);
  // }
  //}, [userChoice]);
  //console.log("userChoice=", userChoice);

  return (
    <>
      <MenuGroupsOpen day={"day1"} />
      <MenuGroups day={"day2"} />
      <MenuGroups day={"day3"} />
      <MenuGroups day={"day4"} />
      <MenuGroups day={"day5"} />
      <MenuGroups day={"day6"} />
      <MenuGroups day={"day7"} />
      <BuyForWeek />
    </>
  );
}
