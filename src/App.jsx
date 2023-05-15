import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./styles/App.module.scss";

function App() {
  return (
    <div class={styles.container}>
      <Header />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
