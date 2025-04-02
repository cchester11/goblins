// goblin turn will import and use parameters of goblin strength array and brians health
export default function goblinTurn (brian, goblin) {
      // use math.random to select a random strength value from goblins strength array
      const attackVal = goblin.strength[Math.floor(Math.random() * goblin.strength.length)];
      // subtract from brians health the strength value
      brian.health = brian.health - attackVal;
      // return brians new health

      const vals = {
            health: brian.health,
            text: `${goblin.name} attacked Brian for ${attackVal}!`
      }

      return vals;
};