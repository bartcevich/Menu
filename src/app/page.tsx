//'use client';
import React, { useState, useEffect } from "react";
import AllIngredients from "@/components/AllIngredients";
import Authentication from "@/components/Authentication";
import MenuGroups from "@/components/MenuGroups";
import ShowSevenAndStorage from "@/components/ShowSevenAndStorage";
import { MenuProvider } from "@/context/IngredientsContext";
import bgImage from "@/assets/images/background3.jpg";

export default function Home() {
  return (
    <MenuProvider>
      {/* <Form/> */}
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        {/* <MenuGroups /> */}
        <ShowSevenAndStorage />
        {/* <Authentication /> */}
        {/* <AllIngredients /> */}
      </div>
    </MenuProvider>
  );
}
