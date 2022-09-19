import Link from "next/link";
import styles from "../styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <p id={styles.p}>
          neariyeveryone<span>Blog</span>
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
