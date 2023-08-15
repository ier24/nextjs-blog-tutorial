import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
      <div>何も見つかりませんでした...</div>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
}
