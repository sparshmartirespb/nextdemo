import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { rateID } from "../../atoms/name";
import { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { fetchCivilizationsSelector } from "../../selectors/name";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
function CommentsPage() {
  const [name, setName] = useRecoilState(rateID);
  // useEffect(() => {
  //   setName("PWKQ1KG");
  // }, []);
  const response = useRecoilValue(fetchCivilizationsSelector);
  console.log(response);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>{"select particular rate id to get more info "}</div>
        <Dropdown
          options={["PINDUF8", "PWKQ1KG"]}
          onChange={(item) => {
            setName(item.value);
          }}
          value={"PINDUF8"}
          placeholder="Select an option"
        />

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
