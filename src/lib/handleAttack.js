// accepts brians strength array and goblins health value
export default function handleAttack (brianStrength, goblin) {
      // use math.random to select a random number from the strength array
      const strength = brianStrength[Math.floor(Math.random() * brianStrength.length)];
      // the strength value will be subtracted from the goblins health value
      goblin.health = goblin.health - strength;
      // return the goblins health value and a string that can be used to setGameText
      const text = `Brian attacks ${goblin.name} for ${strength}!`;

      const vals = {
            goblinHealth: goblin.health,
            text: text
      };

      return vals;
};