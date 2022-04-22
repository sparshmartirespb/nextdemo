import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { apiData, rateID } from "../../atoms/name";
import { useRecoilState } from "recoil";
import { rateIdSelector } from "../../selectors/name";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function CommentsPage() {
  const [response, setResponse] = useRecoilState(rateIdSelector);
  const [apisData, setApiData] = useRecoilState(apiData);

  useEffect(() => {
    const getData = async () => {
      let currentRateID = apisData.filter((item) => {
        return item.rate_id === response;
      });

      if (!currentRateID.length) {
        try {
          const res = await fetch(
            `${"https://api.n.exchange/en/api/v1/rate/"}${response}${"/"}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          const data = await res.json();
          setApiData([
            ...apisData,
            {
              rate: data.rate,
              rate_id: data.rate_id,
              bid: data.ticker.bid,
              ask: data.ticker.ask,
              code: data.market.code,
            },
          ]);
        } catch (err) {
          throw err;
        }
      }
    };
    getData();
  }, [response]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>select particular rate id to get more info</h2>
        <div className={styles.rateCard}>
          <Dropdown
            options={["PINDUF8", "PWKQ1KG"]}
            onChange={(item) => {
              setResponse(item.value);
            }}
            value={"PINDUF8"}
            placeholder="Select an option"
            className={styles.rateDropdown}
          />
          <div className={styles.rates}>
            {/* <div className={styles.codeDisplay}>{code}</div> */}
            {apisData
              .filter(function (item) {
                return item.rate_id === response;
              })
              .map((item) => (
                <>
                  {" "}
                  <div>Rate: {item?.rate}</div>
                  <div>Rate ID: {item?.rate_id}</div>
                  <div>Ask : {item?.ask}</div>
                  <div>Bid : {item?.bid}</div>
                </>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default CommentsPage;
