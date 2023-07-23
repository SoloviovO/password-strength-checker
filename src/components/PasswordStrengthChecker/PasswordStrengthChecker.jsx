import React, { useState } from "react";

import css from "./PasswordStrengthChecker.module.css";
import PasswordInfo from "../PasswordInfo/PasswordInfo";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");

  const calculatePasswordStrength = (password) => {
    if (!password) return "empty";

    if (password.length < 8) return "insufficient";

    const LETTERS = /[a-zA-Zа-яА-Я]/.test(password);
    const NUMBERS = /\d/.test(password);
    const SYMBOLS = /[!@#$%^&*()_+{}[\]:;<>,.?~]/.test(password);

    if (LETTERS && NUMBERS && SYMBOLS) {
      return "strong";
    } else if (
      (LETTERS && NUMBERS) ||
      (LETTERS && SYMBOLS) ||
      (NUMBERS && SYMBOLS)
    ) {
      return "medium";
    } else {
      return "weak";
    }
  };

  const getPasswordStrengthColors = (strength) => {
    switch (strength) {
      case "strong":
        return { first: "green", second: "green", third: "green" };
      case "medium":
        return { first: "yellow", second: "yellow", third: "gray" };
      case "weak":
        return { first: "red", second: "gray", third: "gray" };
      case "insufficient":
        return { first: "red", second: "red", third: "red" };
      case "empty":
      default:
        return { first: "gray", second: "gray", third: "gray" };
    }
  };

  const passwordStrength = calculatePasswordStrength(password);
  const {
    first: firstSectionColor,
    second: secondSectionColor,
    third: thirdSectionColor,
  } = getPasswordStrengthColors(passwordStrength);

  return (
    <div className={css.MainBox}>
      <div className={css.PasswordBox}>
        <h2 className={css.PasswordTitle}>Password Strength</h2>
        <label className={css.PasswordLabel}>
          <input
            className={css.InputField}
            type="password"
            value={password}
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={css.InputLabel}>Enter your password</span>
        </label>
        <div className={css.PasswordSectionBox}>
          <div
            className={css.PasswordSection}
            style={{ backgroundColor: firstSectionColor }}
          ></div>
          <div
            className={css.PasswordSection}
            style={{ backgroundColor: secondSectionColor }}
          ></div>
          <div
            className={css.PasswordSection}
            style={{ backgroundColor: thirdSectionColor }}
          ></div>
        </div>
      </div>
      <PasswordInfo />
    </div>
  );
};

export default PasswordStrengthChecker;
