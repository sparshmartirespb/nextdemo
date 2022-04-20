import { atom } from "recoil";

export const civilizationsUrl = atom({
  key: "civilizationsUrl", // unique ID (with respect to other atoms/selectors)
  default: "PINDUF8", // default value (aka initial value)
});
