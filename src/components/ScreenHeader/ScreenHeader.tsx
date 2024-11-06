import React from "react";

import { ScreenType } from "@/lib/types";
import BackButton from "./BackButton";
import styles from "./ScreenHeader.module.css";

const ScreenHeader = ({ screenType }: { screenType: ScreenType }) => {
  const backButtonColor = screenType === "info" ? "#FAFAFA" : "#333333";
  const logoClassName =
    screenType === "info" ? styles.logoLight : styles.logoDark;

  return (
    <header className={styles.header}>
      <BackButton hexColor={backButtonColor} className={styles.backButton} />
      <div className={`${styles.logo} ${logoClassName}`}></div>
    </header>
  );
};

export default ScreenHeader;
