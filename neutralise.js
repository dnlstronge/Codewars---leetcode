function neutralise(s1, s2) {
  let newS = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == "+" && s2[i]== "+") {
      newS += "+";
    } else if (s1[i]== "-" && s2[i]== "-") {
      newS += "-";
    } else {
      newS += "0";
    }
  }
  return newS;
}
