import React from "react";
import styles from "./Styles.module.css";

type genericHtmlProps = {
  children: React.ReactNode;
};
export function GenericHTML({ children }: genericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
