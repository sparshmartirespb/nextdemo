import { selector } from "recoil";
import { rateID } from "../atoms/name";

export const fetchCivilizationsSelector = selector({
  key: "fetchCivilizationsSelector", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    try {
      const response = await fetch(
        `${"https://api.n.exchange/en/api/v1/rate/"}${get(rateID)}${"/"}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("jd", data);
      return data;
    } catch (error) {
      throw error;
    }
  },
});
