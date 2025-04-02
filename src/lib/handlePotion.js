// handle potion imports the potions array and brians state; is used to give Brian a potion after each defeat
import { potions } from "../data";

export default function handlePotion (brian, setBrian) {
      // First access all the possible potions
      const potionKeys = Object.keys(brian.potions);
      // Select a random potion key from the available potion types
      const randomPotionKey = potionKeys[Math.floor(Math.random() * potionKeys.length)];

      //Update Brian's inventory
      setBrian((prevBrian)  => ({
            ...prevBrian,
            // access the previous state of Brian's potions object
            potions: {
                  ...prevBrian.potions,
                  [randomPotionKey]: prevBrian.potions[randomPotionKey] + 1
            }
      }));

      return randomPotionKey;
};