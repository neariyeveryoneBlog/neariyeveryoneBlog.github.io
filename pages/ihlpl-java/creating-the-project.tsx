import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/ihlplJava/project.module.scss";

const Project = () => {
  return (
    <>
      <div id={styles.wrapper}>
        <h1 id={styles.title}>Creating the Project</h1>
        <p id={styles.description}>
          Now we are ready to <span>create our project</span>. First open
          Intellij or <a href="#eclipse">Eclipse</a>. In <span>Intellij</span>{" "}
          go to the top and click on <span>File</span> then hover over{" "}
          <span>New</span> and click on <span>Project</span>.<br />
          <br />
          <br />
          <Image src="/image1.png" width={653} height={308} alt=""></Image>
          <br />
          <br />
          <br />
          You will be prompted with this. Enter a <span>name</span>, choose a{" "}
          <a
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Java_Development_Kit"
            target="_blank"
          >
            JDK
          </a>{" "}
          version &ndash; preferably 18 &ndash; and hit <span>Create</span>.
          <br />
          <br />
          <br />
          <Image src="/image2.png" width={631} height={409} alt=""></Image>
          <div id="eclipse">
            <br />
            <br />
            <br />
            If you are using <span>Eclipse</span> navigate to the top and click
            on <span>File</span> then hover over <span>New</span> and click on{" "}
            <span>Java Project</span>.<br />
            <br />
            <br />
            <Image src="/image3.png" width={602} height={403} alt=""></Image>
            <br />
            <br />
            <br />
            You will be prompted with this. Enter a <span>name</span>, choose a{" "}
            <a
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Java_Development_Kit"
              target="_blank"
            >
              JDK
            </a>{" "}
            version &ndash; preferably 18 &ndash; and hit <span>Finish</span>.
            <br />
            <br />
            <br />
            <Image src="/image4.png" width={760} height={804} alt=""></Image>
          </div>
          <br />
          <br />
          <br />
          After we&apos;ve done that, we can move on to{" "}
          <Link href="adding-tokens">Adding Tokens</Link>.
        </p>
      </div>
    </>
  );
};

export default Project;
