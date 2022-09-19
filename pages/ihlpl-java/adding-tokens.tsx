import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/ihlplJava/tokens.module.scss";

const Tokens = () => {
  return (
    <>
      <div id={styles.wrapper}>
        <h1 id={styles.title}>Adding Tokens</h1>
        <p id={styles.description}>
          First create a <span>package</span>. We will name it <span>lang</span>
          . Then create an <span>enum</span> in the package and call it{" "}
          <a href="explanation">TokenType</a>. Now we create a few{" "}
          <span>TokenTypes</span> which are necessary for the{" "}
          <a href="explanation#interpreter">Interpreter</a> to work.
          <br />
          <br />
          <br />
          <Image src="/image5.png" width={692} height={439} alt="" />
          <br />
          <br />
          <br />
          After we created the <span>TokenTypes</span> we can make a class
          called <a href="explanation#token">Token</a>. It will hold Information
          for a <span>TokenType</span> and a <span>value</span>.
          <br />
          <br />
          <br />
          <Image src="/image6.png" width={757} height={312} alt="" />
          <br />
          <br />
          <br />
          After that we can move on to our{" "}
          <Link href="creating-the-lexer">Lexer</Link>.
        </p>
      </div>
    </>
  );
};

export default Tokens;
