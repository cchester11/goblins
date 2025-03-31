// use as parameter brians potion state and selected potion
export default function handleUsePotion (brian, color) {
      if (color === "red") {
            const health = Math.min(brian.health + 20, 100);
            let potionsLeft = brian.potions.red;

            potionsLeft = potionsLeft - 1;

            const vals = {
                  health: health,
                  potionsLeft: potionsLeft
            }

            return vals;
      } else if (color === "green") {
            const health = Math.min(brian.health + 25, 100);
            let potionsLeft = brian.potions.green;

            potionsLeft = potionsLeft - 1;

            const vals = {
                  health: health,
                  potionsLeft: potionsLeft
            }

            return vals;
      };
};