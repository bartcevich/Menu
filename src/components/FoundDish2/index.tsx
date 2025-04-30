"use client";
import React, { useEffect, useState, useContext } from "react";
// import { useSearch, search } from "use-search-react";
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
  const data: MenuItem[] = getBreakfastData();
  const [query, setQuery] = useState("");

  const results: any = [];
  //   const results = useSearch(
  //     data,
  //     query,
  //     search({
  //         fields: ["name"],
  //         matchType: "fuzzy",
  //     })
  // );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((item: any, index: any) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FoundDish;
