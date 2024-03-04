"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import ShowSevenAndStorage from "@/components/ShowSevenAndStorage";
import Image from "next/image";
import test from "@/assets/images/test.jpg";

const RIGHT_ANSWER = [
  { value: "Enter your answer", label: "Enter your answer" },
  { value: "голубь", label: "голубь" },
  { value: "сорока", label: "сорока" },
  { value: "ворона", label: "ворона" },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleEmailChange = (e: any) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const handlePasswordChange = (e: any) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setIsValidPassword(validatePassword(enteredPassword));
  };

  const handleAnswerChange = (e: any) => {
    const enteredAnswer = e.target.value;
    setAnswer(enteredAnswer);
  };

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: any) => {
    //const passwordRegex = /^[A-Za-z\s]{0,20}$/;
    const passwordRegex = /^[^\s]{0,20}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("state Answer1", answer, isValidEmail, isValidPassword);
    if (isValidEmail && isValidPassword && answer === "сорока") {
      setIsLoggedIn(true);
      console.log("Logged in successfully");
    } else {
      console.log("Invalid email or password");
    }
  };

  const handleButtonText = () => {
    if (isValidEmail || isValidPassword || answer === "сорока") {
      return "Пробовать снова";
    } else {
      return "Войти";
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <form
          onSubmit={handleSubmit}
          className={`${styles.containerForm} ${
            isLoggedIn ? "animate-slide" : ""
          }`}
        >
          <h3>Регистрация.</h3>
          <label>
            <h3>Введите адрес вашей электронной почты</h3>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Enter a valid email address"
            />
          </label>
          <br />
          <label>
            <h3>Введите ваш пароль</h3>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder={`${
                password === "" ? "Enter your password" : "password"
              }`}
            />
          </label>
          <br />
          <h3>Выберите правильный ответ</h3>
          <div className={styles.imageTest}>
            <Image src={test} alt="image" />
          </div>
          <select
            className={`formControl ${answer ? "formError" : ""}`}
            // onFocus={() => {
            //   handleInputFocus(setAnswer);
            // }}
            onChange={handleAnswerChange}
            value={answer}
            id="contactAnswer"
            name="answer"
            placeholder={answer === "" ? "Enter your answer" : ""}
          >
            {RIGHT_ANSWER.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="submit" disabled={!isValidEmail || !isValidPassword}>
            <div className={styles.button}>{handleButtonText()}</div>
          </button>
        </form>
      ) : (
        <ShowSevenAndStorage />
      )}
    </>
  );
};

export default LoginForm;
