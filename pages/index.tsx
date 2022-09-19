import Head from "next/head";
import BlogPostCard from "../components/BlogPostCard";
import styles from "../styles/pages/home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Blog - neariyeveryone</title>
      </Head>
      <div id={styles.wrapper}>
        <div id={styles.cards}>
          <BlogPostCard
            title="Java Interpreter W.I.P."
            description="Making An Interpreted High Level Programming Language in Java"
            href="" ///ihlpl-java
          />
        </div>
      </div>
    </>
  );
};

export default Home;
