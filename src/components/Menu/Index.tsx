import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./Styles.module.css";
import { useState, useEffect } from "react";

type AvailableTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableTheme) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevtheme) => {
      const nextTheme = prevtheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para historico"
        title="Ir para a Historico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para configuraçoes"
        title="Ir para a configuraçoes"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para modo escuro ou claro"
        title="Ir para a modo escuro ou claro"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
}
