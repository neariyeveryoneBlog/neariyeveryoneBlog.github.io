import styles from "../../styles/pages/ihlplJava/explanation.module.scss";

const Explanation = () => {
  return (
    <div id={styles.wrapper}>
      <div className={styles.container}>
        <h1>TokenType</h1>
        <p id={styles.description}>
          A <span>TokenType</span> tells the <a href="#parser">Parser</a> what
          the current <a href="#token">Token</a> consists of.
        </p>
      </div>
      <div className={styles.container} id="token">
        <h1>Token</h1>
        <p id={styles.description}>
          A <span>Token</span> consists of a <a href="#">TokenType</a> and a{" "}
          <span>value</span>.
        </p>
      </div>
      <div className={styles.container} id="lexer">
        <h1>Lexer</h1>
        <p id={styles.description}>
          The <span>Lexer</span> takes the <span>code</span> as plain text and
          splits it up into <a href="#token">Tokens</a>.
        </p>
      </div>
      <div className={styles.container} id="parser">
        <h1>Parser</h1>
        <p id={styles.description}>
          The <span>Parser</span> takes <a href="#token">Tokens</a> and their{" "}
          <span>value</span> and turns them into <a href="#node">Nodes</a> and
          feeds them to the <a href="#interpreter">Interpreter</a>.
        </p>
      </div>
      <div className={styles.container} id="interpreter">
        <h1>Interpreter</h1>
        <p id={styles.description}>
          The <span>Interpreter</span> takes <a href="#node">Nodes</a> and{" "}
          <span>visits</span> them to <span>identify</span> their type and
          return their <span>value</span>.
        </p>
      </div>
      <div className={styles.container} id="node">
        <h1>Node</h1>
        <p id={styles.description}>
          A <span>Node</span> is an object that holds{" "}
          <a href="#token">Tokens</a> as <span>values</span>.
        </p>
      </div>
    </div>
  );
};

export default Explanation;
