import styles from "./Styles.module.css";

import type React from "react";

type DefautInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefautInput({
  id,
  type,
  labelText,
  ...rest
}: DefautInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>

      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
