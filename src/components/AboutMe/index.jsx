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
      {/* <img src={myImage} alt="Image from me" /> */}
      <div class={styles.imageWrapper} />

      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <div class={styles.myInfoContainer}>
          <h1>
            <b>{data().name}</b>
          </h1>

          <h2>
            <i class="ph-duotone ph-buildings" />
            {data().company}
          </h2>

          <small>
            <i class="ph-duotone ph-navigation-arrow" id="location-icon" />
            <a
              href={`https://www.google.com/search?q=${data().location}`}rel="noreferrer noopener"
              target="_blank"
            >
              {data().location}
            </a>
          </small>

          <p>{data().bio}</p>
        </div>
      </Show>
    </section>
  );
};

export default AboutMe;
