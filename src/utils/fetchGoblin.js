export default function fetchGoblin(goblins, setGoblin, goblinIdx) {
      const newGoblin = { ...goblins[goblinIdx] };
      setGoblin(newGoblin);
};