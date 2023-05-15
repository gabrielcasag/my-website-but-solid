import { splitProps } from "solid-js";

import styles from "./styles.module.scss";

const TextBox = (props) => {
  const [local, others] = splitProps(props, ["children"]);

  return (
    <div {...others} class={styles["textBox"]}>
      {local.children}
    </div>
  );
};

export default TextBox;
