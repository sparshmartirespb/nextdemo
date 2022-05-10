export const getAllRates = async (response) => {
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
    // setApiData([
    //   ...apisData,
    //   {
    //     rate: data.rate,
    //     rate_id: data.rate_id,
    //     bid: data.ticker.bid,
    //     ask: data.ticker.ask,
    //     code: data.market.code,
    //   },
    // ]);
    return data;
  } catch (err) {
    throw err;
  }
};
