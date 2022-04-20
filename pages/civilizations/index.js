import styles from "../../styles/Home.module.css";
import { civilizationsUrl } from "../../atoms/name";
import { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { fetchCivilizationsSelector } from "../../selectors/name";
function CommentsPage() {
  const [name, setName] = useRecoilState(civilizationsUrl);
  const response = useRecoilValue(fetchCivilizationsSelector);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          {"Click on the button to get more infor of the particular rate id "}
        </div>
        <div
          onClick={() => {
            setName("PINDUF8");
          }}
          style={{
            cursor: "pointer",
            padding: 4,
            backgroundColor: "brown",
            margin: 4,
          }}
        >
          {"PINDUF8"}
        </div>
        <div
          onClick={() => {
            setName("PWKQ1KG");
          }}
          style={{
            cursor: "pointer",
            padding: 4,
            backgroundColor: "brown",
          }}
        >
          {"PWKQ1KG"}
        </div>
        <div>Rate: {response?.rate}</div>
        <div>Rate ID: {response?.rate_id}</div>
        <div>Ask : {response?.ticker?.ask}</div>
        <div>Bid : {response?.ticker?.bid}</div>
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
