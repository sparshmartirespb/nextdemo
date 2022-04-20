import styles from "../../styles/Home.module.css";

import { useState } from "react";
import Image from "next/image";
function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/civilizations");
    const data = await response.json();
    console.log("data", data);
    setComments(data);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          onClick={() => {
            fetchComments();
          }}
        >
          {!comments?.civilizations?.length && (
            <h1 className={styles.title}>load civilizations</h1>
          )}
        </div>
        {comments?.civilizations?.map((item) => {
          return <div key={item.id}>{item.name}</div>;
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
