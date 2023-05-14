import styles from "./styles.module.scss";

const TextBox = (props) => {
  console.log(props);

  return (
    <div {...props} class={styles["text-box"]}>
      {props.children}
    </div>
  );
};

export default TextBox;
