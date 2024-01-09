"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";
import MenuGroups from "@/components/MenuGroups";
import MenuGroupsOpen from "@/components/MenuGroupsOpen";

type UserInput = { [key: string]: string | undefined };
const identifiers = [
  "label2",
  "label3",
  "label4",
  "label5",
  "label6",
  "label7",
] as const;
export default function AllIngredients() {
  const [printLabel, setPrintLabel] = useState<{ [key: string]: any }>({});
  const [selectionUser, setSelectionUser] = useState<{ [key: string]: any }>(
    {}
  );
  //const [selectionUser, setSelectionUser] = useState<any[]>([]);
  //console.log(selectionUser);

  useEffect(() => {
    //localStorage.setItem("ingredientHistory", JSON.stringify([]));
    console.log("checkTasks=", localStorage.getItem("ingredientHistory"));
    const savedIngredientHistory: string | null =
      localStorage.getItem("ingredientHistory");
    if (savedIngredientHistory) {
      const parsedIngredientHistory = JSON.parse(savedIngredientHistory);
      setPrintLabel(parsedIngredientHistory);
    }
  }, []);

  const handleChange = useCallback(
    (identifier: (typeof identifiers)[number], value: any) => {
      const newSelectionUser = {
        ...printLabel,
        [identifier]: value,
      };
      console.log("selectionUser=", selectionUser);
      console.log("printLabel=", printLabel);
      console.log("newSelectionUser=", newSelectionUser);
      //setSelectionUser(newSelectionUser);
      localStorage.setItem(
        "ingredientHistory",
        JSON.stringify(newSelectionUser)
      );
    },
    [printLabel, selectionUser]
  );
  const [userInput, setUserInput] = useState<UserInput>({});
  useEffect(() => {
    const savedInputs: string | null = localStorage.getItem("userInputs");
    if (savedInputs) {
      const parsedInputs: UserInput = JSON.parse(savedInputs);
      setUserInput(parsedInputs);
    }
  }, []);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    identifier: (typeof identifiers)[number]
  ) => {
    const newInputs: UserInput = {
      ...userInput,
      [identifier]: e.target.value,
    };
    setUserInput(newInputs);
    localStorage.setItem("userInputs", JSON.stringify(userInput));
  };

  return (
    <>
      <div className={styles.container_text}>
        <div>
          <MenuGroupsOpen />
        </div>
        <input
          className={styles.container_input}
          type="text"
          //value={userInput1["input1"] || ""}
          maxLength={27}
          //onChange={(e) => handleInputChange(e, "input1")}
          placeholder="Меню для..."
        />
      </div>
      {identifiers.map((identifier) => (
        <div key={identifier} className={styles.container_text}>
          <input
            className={styles.container_input}
            type="text"
            value={userInput[identifier] || ""}
            maxLength={27}
            onChange={(e) => handleInputChange(e, identifier)}
            placeholder="Меню для..."
          />
          <div className={styles.component_button}>
            <MenuGroups setSelectionUser={setSelectionUser} />
            <button
              value={selectionUser[identifier]}
              onClick={() => handleChange(identifier, selectionUser)}
            >
              сохранить меню
            </button>
          </div>
          <div>
            {printLabel[identifier] && (
              <div key={identifier}>
                {Array.isArray(printLabel[identifier]) ? (
                  printLabel[identifier].map((item: any, index: any) => (
                    <div key={index}>
                      {item.image && item.image.length > 0 && (
                        <img src={item.image[0]} alt="Image" />
                      )}
                      {item.label && item.label.length > 0 && (
                        <div>
                          {item.numberHuman}
                          {item.label}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className={styles.container_storage}>
                    {printLabel[identifier].image &&
                      printLabel[identifier].image.length > 0 && (
                        <img
                          src={printLabel[identifier].image[0]}
                          alt="Image"
                        />
                      )}
                    {printLabel[identifier].label &&
                      printLabel[identifier].label.length > 0 && (
                        <div>
                          {printLabel[identifier].numberHuman}
                          {printLabel[identifier].label}
                        </div>
                      )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
