import Link from "next/link";
import styles from "../../styles/pages/ihlplJava/index.module.scss";

const IHlPlJava = () => {
  return (
    <div id={styles.wrapper}>
      <h1 id={styles.title}>Overview</h1>
      <p id={styles.description}>
        In this article You will learn to write an Interpreter for Your very own
        <a
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Programming_language"
          target="_blank"
        >
          {" "}
          Programming Language{" "}
        </a>
        in{" "}
        <a
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Java"
          target="_blank"
        >
          {" "}
          Java{" "}
        </a>
        . This course will be divided into Sections. The first part will be
        about{" "}
        <Link href="ihlpl-java/creating-a-preview">Creating a Preview</Link>.
        After we decided how we want the Language to look like we can move on
        and{" "}
        <Link href="ihlpl-java/creating-the-project">Create The Project</Link>.
        Now that we created our <span>Project</span> we can{" "}
        <a href="ihlpl-java/adding-tokens">create our first class</a>.
      </p>
      <h2 id={styles.button}>
        <Link href="ihlpl-java/creating-a-preview">Get Started</Link>
      </h2>
    </div>
  );
};

export default IHlPlJava;
