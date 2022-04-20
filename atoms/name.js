import { atom } from "recoil";

export const civilizationsUrl = atom({
  key: "civilizationsUrl", // unique ID (with respect to other atoms/selectors)
  default: "http://www.dnd5eapi.co/api/ability-scores/cha", // default value (aka initial value)
});
