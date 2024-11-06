import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface IProps {
  uniqueKey: string;
  children: React.ReactNode
}

export default function AnimatePresenceContainer({ uniqueKey, children }: IProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={uniqueKey}
        initial={{ opacity: 0, scale: 0.7, y: "100%" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, x: "100%" }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>{" "}
    </AnimatePresence>
  );
};