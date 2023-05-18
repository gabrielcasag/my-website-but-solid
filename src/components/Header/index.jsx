import { createEffect, createSignal } from "solid-js";

import TextBox from "../TextBox";

import styles from "./styles.module.scss";

const initializeTheme = () => {
  let theme = "light";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  } else if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const Header = () => {
  const [theme, setTheme] = createSignal(initializeTheme());

  createEffect(() => {
    const body = document.documentElement;
    if (theme() === "light") {
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("theme-dark");
      body.classList.remove("theme-light");
      localStorage.setItem("theme", "dark");
    }
  });

  const toggleTheme = () => {
    console.log(theme());
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };
  return (
    <header class={styles.header}>
      <div class={styles.gLink}>
        <span />
        <a href="">G</a>
      </div>

      <nav class={styles.navbar}>
        <ul>
          <li>
            <TextBox
              style={{
                cursor:
                  "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🚧</text></svg>\"), auto"
              }}
            >
              SOBRE
            </TextBox>
          </li>
          <li>
            <TextBox
              style={{
                cursor:
                  "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🚧</text></svg>\"), auto"
              }}
            >
              PROJETOS
            </TextBox>
          </li>
          <li>
            <TextBox
              style={{
                cursor:
                  "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🚧</text></svg>\"), auto"
              }}
            >
              BLOG
            </TextBox>
          </li>

          <li>
            <TextBox onClick={toggleTheme}>THEME</TextBox>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
