import TextBox from "../TextBox";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer class={styles.footerContainer}>
      <div class={styles.ctaWrapper}>
        <a
          target="_blank"
          href="https://wa.me/5535998960098"
          title="Click to talk with me"
          aria-label="A click to talk with me in my whatsapp number"
        >
          Talk to me
        </a>
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
