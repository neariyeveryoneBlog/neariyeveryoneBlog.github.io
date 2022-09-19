import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/ihlplJava/lexer.module.scss";
import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";

const Lexer = () => {
  hljs.registerLanguage("java", java);

  return (
    <>
      <div id={styles.wrapper}>
        <h1 id={styles.title}>Writing the Lexer</h1>
        <p id={styles.description}>
          In order to work on the{" "}
          <a rel="noreferrer" href="explanation#lexer" target="_blank">
            Lexer
          </a>{" "}
          we first need to create a new <span>class</span>. The Lexer class will
          take in a <span>String code</span>, an <span>int pos</span> and{" "}
          <span>int line</span>and a <span>char current</span>.
          <br />
          <br />
          <br />
          <Image src="/image7.png" width={667} height={314} alt=""></Image>
          <br />
          <br />
          <br />
          We then make an <span>advance</span> method that allows us to get to
          the next <span>character</span>.
          <br />
          <br />
          <br />
          <Image src="/image8.png" width={758} height={305} alt=""></Image>
          <br />
          <br />
          <br />
          Now we get to the most <span>important</span> method of this class. It
          is called <span>getNextToken</span> and turns the code into usable{" "}
          <span>Tokens</span>. First we will add mathematical{" "}
          <span>operators</span>.
          <br />
          <br />
          <br />
          <Image src="/image9.png" width={593} height={486} alt=""></Image>
          <br />
          <br />
          <br />
          Before we continue with the <span>Lexer</span> we will create a{" "}
          <span>Helper</span> class that holds a few functions that will help us
          later on. For now we will create a <span>Method</span> called{" "}
          <span>in</span> that will iterate through given objects.
          <br />
          <br />
          <br />
          <Image src="/image10.png" width={890} height={397} alt=""></Image>
          <br />
          <br />
          <br />
          Now we return to the <span>Lexer</span>, adding a method to{" "}
          <span>skip the whitespaces</span>.
          <br />
          <br />
          <br />
          <Image src="/image11.png" width={644} height={328} alt=""></Image>
          <br />
          <br />
          <br />
          We also want to be able to declare <span>strings</span> and{" "}
          <span>numbers</span>. For numbers we do
          <br />
          <br />
          <br />
          <Image src="/image12.png" width={547} height={113} alt=""></Image>
          <br />
          <br />
          <br />
          and
          <br />
          <br />
          <br />
          <Image src="/image13.png" width={713} height={205} alt=""></Image>
          <br />
          <br />
          <br />
          and for <span>strings</span> we do
          <br />
          <br />
          <br />
          <Image src="/image14.png" width={482} height={259} alt=""></Image>
          <Image src="/image15.png" width={753} height={557} alt=""></Image>
          <br />
          <br />
          <br />
          Now we want to differ between keywords and <span>Identifiers</span>.
          <br />
          <br />
          <br />
          <Image src="/image16.png" width={554} height={96} alt=""></Image>
          <Image src="/image17.png" width={868} height={513} alt=""></Image>
          <br />
          <br />
          <br />
          Last but not least we check for all the other{" "}
          <span>necessary symbols</span>.
          <br />
          <br />
          <br />
          <Image src="/image18.png" width={438} height={490} alt=""></Image>
          <br />
          <br />
          <br />
          Next up: <Link href="writing-the-parser">Writing the Parser</Link>
        </p>
      </div>
    </>
  );
};

export default Lexer;
