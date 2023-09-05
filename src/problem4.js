function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    const type = checkType(word[i]);

    if (type === "-1") answer += word[i];
    else answer += makeReverse(word[i], type);
  }
  return answer;
}

const makeReverse = (ch, type) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reversedUpper = upper.split("").reverse().join("");
  const lower = upper.toLowerCase();
  const reversedLower = lower.split("").reverse().join("");

  if (type === "upper") {
    return changeAlphabet(upper, reversedUpper, ch);
  } else {
    return changeAlphabet(lower, reversedLower, ch);
  }
};

const changeAlphabet = (before, after, ch) => {
  const index = before.indexOf(ch);
  return after[index];
};

const checkType = (ch) => {
  if (ch >= "a" && ch <= "z") return "lower";
  if (ch >= "A" && ch <= "Z") return "upper";
  else return "-1";
};

module.exports = problem4;
