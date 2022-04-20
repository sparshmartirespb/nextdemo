import { selector } from "recoil";
import { civilizationsUrl } from "../atoms/name";

export const fetchCivilizationsSelector = selector({
  key: "fetchCivilizationsSelector", // unique ID (with respect to other atoms/selectors)
  get: async ({}) => {
    try {
      const response = await fetch(
        "http://www.dnd5eapi.co/api/ability-scores/cha",
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const { skills } = await response.json();

      return skills;
    } catch (error) {
      throw error;
    }
  },
});
