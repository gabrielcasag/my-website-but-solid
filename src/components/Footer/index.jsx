import TextBox from "../TextBox";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer class={styles.footerContainer}>
      <div class={styles.ctaWrapper}>
        <button title="Talk to me" type="button">
          Talk to me
        </button>
      </div>

      <div class={styles.contactsWrapper}>
        <a target="_blank" href="mailto:gabrielgc.dev@gmail.com">
          <TextBox>MAIL</TextBox>
        </a>

        <a target="_blank" href="https://www.github.com/gabrielcasag">
          <TextBox>GITHUB</TextBox>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/gabrielcasag/">
          <TextBox>LINKEDIN</TextBox>
        </a>

        <a target="_blank" href="https://twitch.tv/gbrl808">
          <TextBox>TWITCH</TextBox>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
