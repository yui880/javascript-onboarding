const convertToReversedLetter = (type, letter) => {
  const first = type === "upper" ? "A" : "a";
  const last = type === "upper" ? "Z" : "z";

  const CODE_SUM = first.charCodeAt(0) + last.charCodeAt(0);
  const letterCode = letter.charCodeAt(0);

  return String.fromCharCode(CODE_SUM - letterCode);
};

const checkCaseType = (letter) => {
  if (/[A-Z]/.test(letter)) return "upper";
  else if (/[a-z]/.test(letter)) return "lower";
  else return "-1";
};

function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    const type = checkCaseType(word[i]);

    if (type === "-1") answer += word[i];
    if (type === "upper") answer += convertToReversedLetter("upper", word[i]);
    if (type === "lower") answer += convertToReversedLetter("lower", word[i]);
  }
  return answer;
}

module.exports = problem4;
