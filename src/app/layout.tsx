//"use client";
//import React, { useState } from "react";
import "./globals.css";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Content, Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MenuProvider } from "@/context/IngredientsContext";
import bgImage from "@/assets/images/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareRight,
  faCaretSquareLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";
import ExampleClientComponent from "@/components/TimeEndBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={styles.background1}
        // className={inter.className}
        // style={{
        //   backgroundImage: `url(${bgImage.src})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundAttachment: "fixed",
        //   minHeight: "100vh",
        // }}
      >
        <MenuProvider>
          {/* <div className={`${backgroundClass}`}> */}
          <Navigation />
          {children}
          <Footer />
          {/* </div> */}
        </MenuProvider>
      </body>
    </html>
  );
}
// 'use client'

// export default function ExampleClientComponent({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <>
//       // ... rest of your code
//       {children}
//     </>
//   )
// }
