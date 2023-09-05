function problem6(forms) {
  const emails = forms.map((form) => form[0]);
  const nicknames = forms.map((form) => form[1]);
  const slicedNicknames = nicknames.map((nickname) =>
    sliceTwoLetters(nickname),
  );

  return compareLetters(slicedNicknames, emails).sort();
}

const sliceTwoLetters = (str) => {
  const letters = [];
  for (let i = 1; i < str.length; i++) {
    letters.push(str[i - 1] + str[i]);
  }
  return letters;
};

const compareLetters = (nicknames, emails) => {
  const duplicated = [];
  const len = nicknames.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const found = findDuplicate(nicknames[i], nicknames[j]);
      if (found === true) {
        duplicated.push(emails[i]);
        duplicated.push(emails[j]);
      }
    }
  }
  return [...new Set(duplicated)];
};

const findDuplicate = (first, second) => {
  let isDuplicated = false;
  first.forEach((letter) => {
    const index = second.indexOf(letter);
    if (index !== -1) isDuplicated = true;
  });
  return isDuplicated;
};

module.exports = problem6;
