import React from "react";

import css from "./PasswordInfo.module.css";

const PasswordInfo = () => {
  return (
    <div className={css.PasswordInfoBox}>
      <div className={css.PasswordInfo}>&#9888;</div>
      <div className={css.PasswordInfoText}>
        <p>How to calculate the strength of a password:</p>
        <ul>
          <li>Only letters/digits/symbols - the password is easy;</li>
          <li>
            Combination of letters-symbols/letters-digits/digits-symbols - the
            password is medium;
          </li>
          <li>Has letters, symbols and numbers - the password is strong;</li>
        </ul>
        <p>
          The color of the sections will depend on the strength of the password:
        </p>
        <ul>
          <li>If the field is empty, all sections are gray;</li>
          <li>
            If the field has less than 8 characters, all sections are red;
          </li>
          <li>
            If the password is easy - the first section is red the rest are
            gray;
          </li>
          <li>
            If the password is medium - the first two sections are yellow the
            last one is gray;
          </li>
          <li>If the password is strong, all sections are green;</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordInfo;
