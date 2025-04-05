// edit so that setButtonFlicker is passed through
// setButtonFlicker state to "attack or potion"

export default function handleBrianOptions (setGameText, setIsActive, setButtonFlicker) {
      setGameText(
            "Attack or Use Potion? (Select from the button options)"
      );

      setIsActive(true);

      setButtonFlicker((prev) => ({
            ...prev,
            attack_potion: true
      }));
};