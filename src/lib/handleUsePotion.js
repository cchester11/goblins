// use as parameter brians potion state and selected potion
export default function handleUsePotion (brian, color) {
      if (color === "red") {
            const health = Math.min(brian.health + 20, 100);
            let potionsLeft = brian.potions.red;

            if(brian.potions.red <= 0) {
                  const vals = {
                        health: brian.health,
                        strength: brian.strength,
                        potionsLeft: potionsLeft,
                        text: "You have no more red potions left!"
                  }

                  return vals;
            }

            potionsLeft = potionsLeft - 1;

            const vals = {
                  health: health,
                  strength: brian.strength,
                  potionsLeft: potionsLeft,
                  text: "You consume a red potion and increase your health!"
            }

            return vals;
      } else if (color === "green") {
            const health = Math.min(brian.health + 25, 100);
            let potionsLeft = brian.potions.green;

            if(brian.potions.green <= 0) {
                  const vals = {
                        health: brian.health,
                        strength: brian.strength,
                        potionsLeft: potionsLeft,
                        text: "You have no green potions left!"
                  }

                  return vals;
            }

            potionsLeft = potionsLeft - 1;

            const vals = {
                  health: health,
                  strength: brian.strength,
                  potionsLeft: potionsLeft,
                  text: "You consume a green potion and increase your health!"
            }

            return vals;
      } else if (color === "blue") {
            const strength = [];
            let potionsLeft = brian.potions.blue;

            if(brian.potions.blue <= 0) {
                  const vals = {
                        health: brian.health,
                        strength: brian.strength,
                        potionsLeft: potionsLeft,
                        text: "You have no blue potions left!"
                  }

                  return vals;
            }

            for(let i = 0; i < 3; i ++) {
                  let num = 2;

                  num += brian.strength[i]

                  strength.push(num)

                  num = 0;
            }

            potionsLeft = potionsLeft - 1;

            const vals = {
                  strength: strength,
                  health: brian.health,
                  potionsLeft: potionsLeft,
                  text: "You consume a blue potion and increase your strength!"
            }

            return vals;
      } else if (color === "orange") {
            const strength = [];
            let potionsLeft = brian.potions.orange;

            if(brian.potions.orange <= 0) {
                  const vals = {
                        health: brian.health,
                        strength: brian.strength,
                        potionsLeft: potionsLeft,
                        text: "You have no orange potions left!"
                  }

                  return vals;
            }

            for(let i = 0; i < 3; i ++) {
                  let num = 3;

                  num += brian.strength[i];

                  strength.push(num);

                  num = 0;
            }

            potionsLeft = potionsLeft - 1;

            const vals = {
                  strength: strength,
                  health: brian.health,
                  potionsLeft: potionsLeft,
                  text: "You consume a rare orange potion and increase your strength!"
            }

            return vals;
      }
};