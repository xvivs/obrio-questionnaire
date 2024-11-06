"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";

interface IProps {
  hexColor: string;
  className?: string;
}

const BackButton = ({ hexColor, className = "" }: IProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className={styles.backButton + " " + className}
    >
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
          fill={hexColor}
        />
      </svg>
    </div>
  );
};

export default BackButton;
