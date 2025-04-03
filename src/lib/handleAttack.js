// accepts brians strength array and goblins health value

// TO DO
// need to import weapons array
import { weapons } from "../data";
// need to pass weaponIdx  ✅
// define a local function which reads the power value of the current weaponIdx ✅
// change up the math so that there is a 20 percent chance that the passed attack is the weapons power value ✅
// easy way to do this is create an array with 5 values (ex: [1,2,3,4,5]) and randomly select with math.random. 
// if randomly selected = 4 then pass weapons power. otherwise pass randomly selected strength ✅
export default function handleAttack(brianStrength, goblin, weaponIdx) {
      let text = '';
      const randomNums = [1, 2, 3, 4, 5];

      const getCurrIdx = () => {
            const currIdx = weapons[weaponIdx];

            const power = currIdx.power;

            return power;
      };

      // use math.random to select a random number from the strength array
      const strength = brianStrength[Math.floor(Math.random() * brianStrength.length)];

      let powerLevel = getCurrIdx();

      const randomlySelected = randomNums[Math.floor(Math.random() * randomNums.length)];

      if (randomlySelected === 4 || randomlySelected === 2) {
            goblin.health = goblin.health - powerLevel;

            text = `Brian SPECIAL attacks ${goblin.name} for ${powerLevel}`;
      } else {
            // the strength value will be subtracted from the goblins health value
            goblin.health = goblin.health - strength;

            // return the goblins health value and a string that can be used to setGameText
            text = `Brian attacks ${goblin.name} for ${strength}!`;
      }

      const vals = {
            goblinHealth: goblin.health,
            text: text
      };

      return vals;
};