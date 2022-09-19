import Link from "next/link";
import styles from "../../styles/pages/ihlplJava/preview.module.scss";
import hl from "../../styles/util/majaCodeHighlighter.module.scss";

const Preview = () => {
  return (
    <>
      <div id={styles.wrapper}>
        <h1>Creating a Code Preview</h1>
        <p id={styles.description}>
          In order to create our own{" "}
          <a
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Programming_language"
            target="_blank"
          >
            Programming Language
          </a>
          , we first need to know what we want it to look line in the end. For
          this example we&apos;re gonna go with a simple syntax where we first
          need to declare a <span>class</span> and give it a name followed by a
          set of curly-brackets in which we can declare our variables and
          functions.
        </p>
        <pre className={styles.code} id={hl.code}>
          <span id={hl.blue}>class</span> Example{" "}
          <span id={hl.black}>{"{"}</span>
          <br />
          <span id={hl.green}>&#9;&#9;&#9;var</span> a ={" "}
          <span id={hl.red}>
            5 + <span id={hl.black}>(</span>10 - 2<span id={hl.black}>)</span> /
            3
          </span>
          <span id={hl.black}>;</span>
          <br />
          <span id={hl.green}>&#9;&#9;&#9;var</span> b ={" "}
          <span id={hl.red}>true</span>
          <span id={hl.black}>;</span>
          <br />
          <span id={hl.green}>&#9;&#9;&#9;var</span> c = &apos;Hello
          World!&apos;
          <span id={hl.black}>;</span>
          <br />
          <br />
          <span id={hl.green}>&#9;&#9;&#9;function</span> greet
          <span id={hl.black}>(</span>
          name
          <span id={hl.black}>)</span> <span id={hl.black}>{"{"}</span>
          <br />
          <span id={hl.green}>&#9;&#9;&#9;&#9;&#9;&#9;print</span>
          <span id={hl.black}>(</span>
          &apos;Hello &apos; <span id={hl.red}>+</span> name{" "}
          <span id={hl.red}>+</span> &apos;.&apos;
          <span id={hl.black}>);</span>
          <br />
          <span id={hl.black}>&#9;&#9;&#9;{"}"}</span>
          <br />
          <br />
          <span>&#9;&#9;&#9;greet</span>
          <span id={hl.black}>(</span>&apos;Bob&apos;
          <span id={hl.black}>);</span>
          <br />
          <span id={hl.black}>{"}"}</span>
        </pre>
        <p id={styles.description}>
          After we&apos;ve done that, we can move on to{" "}
          <Link href="creating-the-project">Creating the Project</Link>.
        </p>
      </div>
    </>
  );
};

export default Preview;
