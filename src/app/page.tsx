//'use client';
import React, { useState, useEffect } from "react";
import AllIngredients from "@/components/AllIngredients";

import Authentication from "@/components/Authentication";
import ShowSevenAndStorage from "@/components/ShowSevenAndStorage";
import LoginForm from "@/components/LoginForm";
//import { MenuProvider } from "@/context/IngredientsContext";
import bgImage from "@/assets/images/background.png";

export default function Home() {
  return (
    <>
      {/* <MenuProvider> */}
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
        {/* <Authentication /> */}
        <LoginForm />
        {/* <ShowSevenAndStorage /> */}
        {/* <AllIngredients /> */}
      </div>
      {/* </MenuProvider> */}
    </>
  );
}
