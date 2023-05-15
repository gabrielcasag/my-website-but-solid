import { Show, createResource } from "solid-js";

import styles from "./styles.module.scss";

const getData = async () => {
  const response = await fetch("https://api.github.com/users/gabrielcasag");

  const data = await response.json();

  return data;
};

const AboutMe = () => {
  const [data] = createResource(getData);

  return (
    <section class={styles.aboutMeSection}>
      <div class={styles.imageWrapper}>
        {/* <img src={myImage} alt="Image from me" /> */}
      </div>

      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <div class={styles.myInfoContainer}>
          <h1>
            <b>{data().name}</b>
          </h1>

          <h2>{data().company}</h2>
          <small>
            <span>{data().location}</span>
            <i class="ph-duotone ph-navigation-arrow" id="location-icon"></i>
          </small>

          <p>{data().bio}</p>
        </div>
      </Show>
    </section>
  );
};

export default AboutMe;
