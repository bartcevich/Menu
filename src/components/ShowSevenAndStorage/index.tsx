"use client";
import React, { useEffect, useState, useContext, useCallback } from "react";
import styles from "./styles.module.scss";
import { IngredientsContext } from "@/context/IngredientsContext";
import MenuGroupsOpen from "@/components/MenuGroupsOpen";
import MenuGroups from "@/components/MenuGroups";
import BuyForWeek from "@/components/BuyForWeek";

export default function ShowSevenAndStorage() {
  const { userChoice, setUserChoice } = useContext(IngredientsContext);
  const [messageSent, setMessageSent] = useState(0);

  const letterInMail = useCallback(() => {
    // Use useCallback to avoid unnecessary re-renders
    //console.log("ShowSevenAndStorage", messageSent);
    const stateFirstUndefined: any = userChoice;
    const dataForComponent = stateFirstUndefined["letterInMail"] || {};
    const dataForm = stateFirstUndefined["formData"] || {};
    if (dataForComponent["mail"] !== "true" && messageSent === 1) {
      const data = JSON.stringify(dataForm);
      //console.log("data=", data);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("promise=", data);
          if (data["success"] === true) {
            setMessageSent(2);
            setUserChoice((prevUserChoice) => ({
              ...prevUserChoice,
              ["letterInMail"]: {
                mail: "true",
              },
            }));
          } else {
            setMessageSent(1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userChoice, messageSent, setUserChoice]);

  useEffect(() => {
    if (
      typeof userChoice === "object" &&
      userChoice !== null &&
      Object.keys(userChoice).length > 0
    ) {
      setMessageSent(1);
      letterInMail();
    }
  }, [messageSent]);

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
