import { selector } from "recoil";
import { rateID } from "../atoms/name";

export const rateIdSelector = selector({
  key: "rate_id_selector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    return get(rateID);
  },
  set: ({ set }, value) => {
    set(rateID, value)
  }
});
