import styles from "../../styles/Home.module.css";
import { nameState } from "../../atoms/name";
import { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { fetchCivilizationsSelector } from "../../selectors/name";
function CommentsPage() {
  const response = useRecoilValue(fetchCivilizationsSelector);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          {!response?.length && (
            <h1 className={styles.title}>load civilizations</h1>
          )}
        </div>
        {response?.map((item) => {
          return <div key={item.index}>{item.name}</div>;
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
export default CommentsPage;
