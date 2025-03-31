import { goblinTurn } from "../lib";

export default function handleGoblinTurn (brian, goblin, setBrian, setGameText) {
      const { health = vals.health, text = vals.text } = goblinTurn(
            brian,
            goblin
      );

      setBrian((prevBrian) => ({
            ...prevBrian,
            health: health,
      }));

      setGameText(text);
};