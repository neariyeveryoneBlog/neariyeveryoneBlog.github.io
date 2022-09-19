import Link from "next/link";
import styles from "../styles/components/blogPostCard.module.scss";

type Props = {
  title: string;
  description: string;
  href: string;
};

const BlogPostCard = ({ title, description, href }: Props) => {
  return (
    <Link href={href}>
      <div id={styles.wrapper}>
        <h1 id={styles.title}>{title}</h1>
        <p id={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;
