import { atom } from "recoil";

export const rateID = atom({
  key: "rate_id", // unique ID (with respect to other atoms/selectors)
  default: "PINDUF8", // default value (aka initial value)
});

export const apiData = atom({
  key: "api_data",
  default: [],
});
