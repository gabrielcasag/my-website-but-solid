import TextBox from "../TextBox";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header class={styles.header}>
      <div class={styles.gLink}>
        <span></span>
        <a href="">G</a>
      </div>

      <nav class={styles.navbar}>
        <ul>
          <li>
            <TextBox
              style={{
                cursor: `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🚧</text></svg>"), auto`,
              }}
            >
              SOBRE
            </TextBox>
          </li>
          <li>
            <TextBox>PROJETOS</TextBox>
          </li>
          <li>
            <TextBox
              style={{
                cursor: `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🚧</text></svg>"), auto`,
              }}
            >
              BLOG
            </TextBox>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
