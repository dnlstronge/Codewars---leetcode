

const mobileKeyboard = (str) => {
  const mapKeys = {
    one: ["0", "*", "#", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    two: ["a", "d", "g", "j", "m", "p", "t", "w"],
    three: ["b", "e", "h", "k", "n", "q", "u", "x"],
    four: ["c", "f", "i", "l", "o", "r", "v", "y"],
    five: ["s", "z"]
  };

  const keysArray = str.toString().toLowerCase().split("");
  let keystrokes = 0;

  keysArray.forEach((k) => {
    if (mapKeys.one.includes(k)) {
      keystrokes += 1;
    } else if (mapKeys.two.includes(k)) {
      keystrokes += 2;
    } else if (mapKeys.three.includes(k)) {
      keystrokes += 3;
    } else if (mapKeys.four.includes(k)) {
      keystrokes += 4;
    } else if (mapKeys.five.includes(k)) {
      keystrokes += 5;
    }
  });

  console.log(keystrokes);
  return keystrokes;
};
