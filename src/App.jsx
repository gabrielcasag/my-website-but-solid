import AboutMe from "./components/AboutMe";
import Header from "./components/Header";

import styles from "./styles/App.module.scss";

function App() {
  return (
    <div class={styles.container}>
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
